:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam2'
.. highlight: bash

leviosam2
=========

.. conda:recipe:: leviosam2
   :replaces_section_title:
   :noindex:

   Fast and accurate coordinate conversion between assemblies.

   :homepage: https://github.com/milkschen/leviosam2
   :documentation: https://github.com/milkschen/leviosam2/blob/v0.5.0/README.md
   
   :license: MIT / MIT
   :recipe: /`leviosam2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab396`, doi: :doi:`10.1101/2022.04.27.489683`

   


.. conda:package:: leviosam2

   |downloads_leviosam2| |docker_leviosam2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  </span></summary>
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.11``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on python: ``>=3.6``
   :depends on sdsl-lite: ``>=2.1.1``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install leviosam2

to add into an existing workspace instead, run::

    pixi add leviosam2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install leviosam2

Alternatively, to install into a new environment, run::

    conda create -n envname leviosam2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/leviosam2:<tag>

(see `leviosam2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_leviosam2| image:: https://img.shields.io/conda/dn/bioconda/leviosam2.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam2
   :alt:   (downloads)
.. |docker_leviosam2| image:: https://quay.io/repository/biocontainers/leviosam2/status
   :target: https://quay.io/repository/biocontainers/leviosam2
.. _`leviosam2/tags`: https://quay.io/repository/biocontainers/leviosam2?tab=tags


.. raw:: html

    <script>
        var package = "leviosam2";
        var versions = ["0.5.0","0.5.0","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam2/README.html