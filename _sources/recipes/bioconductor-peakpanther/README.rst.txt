:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peakpanther'
.. highlight: bash

bioconductor-peakpanther
========================

.. conda:recipe:: bioconductor-peakpanther
   :replaces_section_title:
   :noindex:

   Peak Picking and Annotation of High Resolution Experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/peakPantheR.html
   :license: GPL-3
   :recipe: /`bioconductor-peakpanther <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther/meta.yaml>`_

   An automated pipeline for the detection\, integration and reporting of predefined features across a large number of mass spectrometry data files. It enables the real time annotation of multiple compounds in a single file\, or the parallel annotation of multiple compounds in multiple files. A graphical user interface as well as command line functions will assist in assessing the quality of annotation and update fitting parameters until a satisfactory result is obtained.


.. conda:package:: bioconductor-peakpanther

   |downloads_bioconductor-peakpanther| |docker_bioconductor-peakpanther|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-msnbase: ``>=2.20.0,<2.21.0``
   :depends bioconductor-mzr: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: ``>=1.0.11``
   :depends r-dt: ``>=0.15``
   :depends r-foreach: ``>=1.4.4``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gridextra: ``>=2.3``
   :depends r-minpack.lm: ``>=1.2.1``
   :depends r-pracma: ``>=2.2.3``
   :depends r-scales: ``>=0.5.0``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinycssloaders: ``>=1.0.0``
   :depends r-shinythemes: ``>=1.1.1``
   :depends r-stringr: ``>=1.2.0``
   :depends r-xml: ``>=3.98.1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peakpanther

   and update with::

      conda update bioconductor-peakpanther

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peakpanther:<tag>

   (see `bioconductor-peakpanther/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peakpanther| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peakpanther.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peakpanther
   :alt:   (downloads)
.. |docker_bioconductor-peakpanther| image:: https://quay.io/repository/biocontainers/bioconductor-peakpanther/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peakpanther
.. _`bioconductor-peakpanther/tags`: https://quay.io/repository/biocontainers/bioconductor-peakpanther?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peakpanther";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html