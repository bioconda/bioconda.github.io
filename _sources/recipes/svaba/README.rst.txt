:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svaba'
.. highlight: bash

svaba
=====

.. conda:recipe:: svaba
   :replaces_section_title:
   :noindex:

   Structural variation and indel detection by local assembly

   :homepage: https://github.com/walaj/svaba
   :license: GPLv3
   :recipe: /`svaba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba/meta.yaml>`_

   


.. conda:package:: svaba

   |downloads_svaba| |docker_svaba|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libcurl: ``>=8.12.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.4,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
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

    pixi global install svaba

to add into an existing workspace instead, run::

    pixi add svaba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svaba

Alternatively, to install into a new environment, run::

    conda create -n envname svaba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svaba:<tag>

(see `svaba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svaba| image:: https://img.shields.io/conda/dn/bioconda/svaba.svg?style=flat
   :target: https://anaconda.org/bioconda/svaba
   :alt:   (downloads)
.. |docker_svaba| image:: https://quay.io/repository/biocontainers/svaba/status
   :target: https://quay.io/repository/biocontainers/svaba
.. _`svaba/tags`: https://quay.io/repository/biocontainers/svaba?tab=tags


.. raw:: html

    <script>
        var package = "svaba";
        var versions = ["1.2.0","1.2.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svaba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svaba/README.html