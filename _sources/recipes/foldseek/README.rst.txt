:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldseek'
.. highlight: bash

foldseek
========

.. conda:recipe:: foldseek
   :replaces_section_title:
   :noindex:

   Foldseek\: fast and accurate protein structure search

   :homepage: https://github.com/steineggerlab/foldseek
   :license: GPL / GPL-3
   :recipe: /`foldseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01773-0`, doi: :doi:`10.1038/s41586-023-06510-w`, doi: :doi:`10.1101/2024.04.14.589414`, biotools: :biotools:`foldseek`

   


.. conda:package:: foldseek

   |downloads_foldseek| |docker_foldseek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.941cd33-1</code>,  <code>10.941cd33-0</code>,  <code>9.427df8a-2</code>,  <code>9.427df8a-1</code>,  <code>9.427df8a-0</code>,  <code>8.ef4e960-1</code>,  <code>8.ef4e960-0</code>,  <code>7.04e0ec8-0</code>,  <code>6.29e2557-2</code>,  </span></summary>
      

      ``10.941cd33-1``,  ``10.941cd33-0``,  ``9.427df8a-2``,  ``9.427df8a-1``,  ``9.427df8a-0``,  ``8.ef4e960-1``,  ``8.ef4e960-0``,  ``7.04e0ec8-0``,  ``6.29e2557-2``,  ``6.29e2557-1``,  ``6.29e2557-0``,  ``5.53465f0-0``,  ``4.645b789-0``,  ``3.915ef7d-1``,  ``3.915ef7d-0``,  ``2.8bd520-1``,  ``2.8bd520-0``,  ``1.3c64211-1``,  ``1.3c64211-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on aria2: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install foldseek

to add into an existing workspace instead, run::

    pixi add foldseek

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install foldseek

Alternatively, to install into a new environment, run::

    conda create -n envname foldseek

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/foldseek:<tag>

(see `foldseek/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_foldseek| image:: https://img.shields.io/conda/dn/bioconda/foldseek.svg?style=flat
   :target: https://anaconda.org/bioconda/foldseek
   :alt:   (downloads)
.. |docker_foldseek| image:: https://quay.io/repository/biocontainers/foldseek/status
   :target: https://quay.io/repository/biocontainers/foldseek
.. _`foldseek/tags`: https://quay.io/repository/biocontainers/foldseek?tab=tags


.. raw:: html

    <script>
        var package = "foldseek";
        var versions = ["10.941cd33","10.941cd33","9.427df8a","9.427df8a","9.427df8a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldseek/README.html