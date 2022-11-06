:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sdams'
.. highlight: bash

bioconductor-sdams
==================

.. conda:recipe:: bioconductor-sdams
   :replaces_section_title:
   :noindex:

   Differential Abundant\/Expression Analysis for Metabolomics\, Proteomics and single\-cell RNA sequencing Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SDAMS.html
   :license: GPL
   :recipe: /`bioconductor-sdams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sdams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sdams/meta.yaml>`_

   This Package utilizes a Semi\-parametric Differential Abundance\/expression analysis \(SDA\) method for metabolomics and proteomics data from mass spectrometry as well as single\-cell RNA sequencing data. SDA is able to robustly handle non\-normally distributed data and provides a clear quantification of the effect size.


.. conda:package:: bioconductor-sdams

   |downloads_bioconductor-sdams| |docker_bioconductor-sdams|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-trust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sdams

   and update with::

      conda update bioconductor-sdams

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sdams:<tag>

   (see `bioconductor-sdams/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sdams| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sdams.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sdams
   :alt:   (downloads)
.. |docker_bioconductor-sdams| image:: https://quay.io/repository/biocontainers/bioconductor-sdams/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sdams
.. _`bioconductor-sdams/tags`: https://quay.io/repository/biocontainers/bioconductor-sdams?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sdams";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sdams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sdams/README.html