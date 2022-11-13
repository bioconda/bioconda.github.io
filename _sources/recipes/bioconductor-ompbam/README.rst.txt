:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ompbam'
.. highlight: bash

bioconductor-ompbam
===================

.. conda:recipe:: bioconductor-ompbam
   :replaces_section_title:
   :noindex:

   C\+\+ Library for OpenMP\-based multi\-threaded sequential profiling of Binary Alignment Map \(BAM\) files

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ompBAM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ompbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ompbam/meta.yaml>`_

   This packages provides C\+\+ header files for developers wishing to create R packages that processes BAM files. ompBAM automates file access\, memory management\, and handling of multiple threads \'behind the scenes\'\, so developers can focus on creating domain\-specific functionality. The included vignette contains detailed documentation of this API\, including quick\-start instructions to create a new ompBAM\-based package\, and step\-by\-step explanation of the functionality behind the example packaged included within ompBAM.


.. conda:package:: bioconductor-ompbam

   |downloads_bioconductor-ompbam| |docker_bioconductor-ompbam|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ompbam

   and update with::

      conda update bioconductor-ompbam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ompbam:<tag>

   (see `bioconductor-ompbam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ompbam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ompbam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ompbam
   :alt:   (downloads)
.. |docker_bioconductor-ompbam| image:: https://quay.io/repository/biocontainers/bioconductor-ompbam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ompbam
.. _`bioconductor-ompbam/tags`: https://quay.io/repository/biocontainers/bioconductor-ompbam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ompbam";
        var versions = ["1.2.0"];
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