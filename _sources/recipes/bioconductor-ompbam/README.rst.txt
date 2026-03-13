:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ompbam'
.. highlight: bash

bioconductor-ompbam
===================

.. conda:recipe:: bioconductor-ompbam
   :replaces_section_title:
   :noindex:

   C\+\+ Library for OpenMP\-based multi\-threaded sequential profiling of Binary Alignment Map \(BAM\) files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ompBAM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ompbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam/meta.yaml>`_

   This packages provides C\+\+ header files for developers wishing to create R packages that processes BAM files. ompBAM automates file access\, memory management\, and handling of multiple threads \'behind the scenes\'\, so developers can focus on creating domain\-specific functionality. The included vignette contains detailed documentation of this API\, including quick\-start instructions to create a new ompBAM\-based package\, and step\-by\-step explanation of the functionality behind the example packaged included within ompBAM.


.. conda:package:: bioconductor-ompbam

   |downloads_bioconductor-ompbam| |docker_bioconductor-ompbam|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: 

   :additional platforms:
      

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

    pixi global install bioconductor-ompbam

to add into an existing workspace instead, run::

    pixi add bioconductor-ompbam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ompbam

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ompbam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ompbam:<tag>

(see `bioconductor-ompbam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ompbam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ompbam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ompbam
   :alt:   (downloads)
.. |docker_bioconductor-ompbam| image:: https://quay.io/repository/biocontainers/bioconductor-ompbam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ompbam
.. _`bioconductor-ompbam/tags`: https://quay.io/repository/biocontainers/bioconductor-ompbam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ompbam";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ompbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ompbam/README.html