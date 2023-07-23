:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meb'
.. highlight: bash

bioconductor-meb
================

.. conda:recipe:: bioconductor-meb
   :replaces_section_title:
   :noindex:

   A normalization\-invariant minimum enclosing ball method to detect differentially expressed genes for RNA\-seq and scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MEB.html
   :license: GPL-2
   :recipe: /`bioconductor-meb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb/meta.yaml>`_

   This package provides a method to identify differential expression genes in the same or different species. Given that non\-DE genes have some similarities in features\, a scaling\-free minimum enclosing ball \(SFMEB\) model is built to cover those non\-DE genes in feature space\, then those DE genes\, which are enormously different from non\-DE genes\, being regarded as outliers and rejected outside the ball. The method on this package is described in the article \'A minimum enclosing ball method to detect differential expression genes for RNA\-seq data\'. The SFMEB method is extended to the scMEB method that considering two or more potential types of cells or unknown labels scRNA\-seq dataset DEGs identification.


.. conda:package:: bioconductor-meb

   |downloads_bioconductor-meb| |docker_bioconductor-meb|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-wrswor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meb

   and update with::

      conda update bioconductor-meb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meb:<tag>

   (see `bioconductor-meb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meb
   :alt:   (downloads)
.. |docker_bioconductor-meb| image:: https://quay.io/repository/biocontainers/bioconductor-meb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meb
.. _`bioconductor-meb/tags`: https://quay.io/repository/biocontainers/bioconductor-meb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meb";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meb/README.html