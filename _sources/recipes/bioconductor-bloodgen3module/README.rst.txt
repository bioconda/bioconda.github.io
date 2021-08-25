:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bloodgen3module'
.. highlight: bash

bioconductor-bloodgen3module
============================

.. conda:recipe:: bioconductor-bloodgen3module
   :replaces_section_title:
   :noindex:

   This R package for performing module repertoire analyses and generating fingerprint representations

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BloodGen3Module.html
   :license: GPL-2
   :recipe: /`bioconductor-bloodgen3module <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodgen3module>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodgen3module/meta.yaml>`_

   The BloodGen3Module package provides functions for R user performing module repertoire analyses and generating fingerprint representations. Functions can perform group comparison or individual sample analysis and visualization by fingerprint grid plot or fingerprint heatmap. Module repertoire analyses typically involve determining the percentage of the constitutive genes for each module that are significantly increased or decreased. As we describe in details\;https\:\/\/www.biorxiv.org\/content\/10.1101\/525709v2 and https\:\/\/pubmed.ncbi.nlm.nih.gov\/33624743\/\, the results of module repertoire analyses can be represented in a fingerprint format\, where red and blue spots indicate increases or decreases in module activity. These spots are subsequently represented either on a grid\, with each position being assigned to a given module\, or in a heatmap where the samples are arranged in columns and the modules in rows.


.. conda:package:: bioconductor-bloodgen3module

   |downloads_bioconductor-bloodgen3module| |docker_bioconductor-bloodgen3module|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-matrixstats: 
   :depends r-randomcolor: 
   :depends r-reshape2: 
   :depends r-testthat: 
   :depends r-v8: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bloodgen3module

   and update with::

      conda update bioconductor-bloodgen3module

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bloodgen3module:<tag>

   (see `bioconductor-bloodgen3module/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bloodgen3module| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bloodgen3module.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bloodgen3module
   :alt:   (downloads)
.. |docker_bioconductor-bloodgen3module| image:: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module
.. _`bioconductor-bloodgen3module/tags`: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bloodgen3module";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bloodgen3module/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bloodgen3module/README.html