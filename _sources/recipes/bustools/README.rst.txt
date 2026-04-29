:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bustools'
.. highlight: bash

bustools
========

.. conda:recipe:: bustools
   :replaces_section_title:
   :noindex:

   bustools is a program for manipulating BUS files for single cell RNA\-Seq datasets.

   :homepage: https://github.com/BUStools/bustools
   :documentation: https://bustools.github.io/manual
   
   :license: BSD / BSD-2-Clause "Simplified" License
   :recipe: /`bustools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools/meta.yaml>`_
   :links: biotools: :biotools:`BUStools`, doi: :doi:`10.1038/s41587-021-00870-2`

   


.. conda:package:: bustools

   |downloads_bustools| |docker_bustools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.45.1-0</code>,  <code>0.45.0-0</code>,  <code>0.44.1-1</code>,  <code>0.44.1-0</code>,  <code>0.44.0-0</code>,  <code>0.43.2-2</code>,  <code>0.43.2-1</code>,  <code>0.43.2-0</code>,  <code>0.43.1-0</code>,  </span></summary>
      

      ``0.45.1-0``,  ``0.45.0-0``,  ``0.44.1-1``,  ``0.44.1-0``,  ``0.44.0-0``,  ``0.43.2-2``,  ``0.43.2-1``,  ``0.43.2-0``,  ``0.43.1-0``,  ``0.43.0-0``,  ``0.42.0-2``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.41.0-2``,  ``0.41.0-1``,  ``0.41.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.39.4-0``,  ``0.39.3-0``,  ``0.39.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install bustools

to add into an existing workspace instead, run::

    pixi add bustools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bustools

Alternatively, to install into a new environment, run::

    conda create -n envname bustools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bustools:<tag>

(see `bustools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bustools| image:: https://img.shields.io/conda/dn/bioconda/bustools.svg?style=flat
   :target: https://anaconda.org/bioconda/bustools
   :alt:   (downloads)
.. |docker_bustools| image:: https://quay.io/repository/biocontainers/bustools/status
   :target: https://quay.io/repository/biocontainers/bustools
.. _`bustools/tags`: https://quay.io/repository/biocontainers/bustools?tab=tags


.. raw:: html

    <script>
        var package = "bustools";
        var versions = ["0.45.1","0.45.0","0.44.1","0.44.1","0.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bustools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bustools/README.html