:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sampleclassifier'
.. highlight: bash

bioconductor-sampleclassifier
=============================

.. conda:recipe:: bioconductor-sampleclassifier
   :replaces_section_title:
   :noindex:

   Sample Classifier

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/sampleClassifier.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier/meta.yaml>`_

   The package is designed to classify gene expression profiles.


.. conda:package:: bioconductor-sampleclassifier

   |downloads_bioconductor-sampleclassifier| |docker_bioconductor-sampleclassifier|

   :versions:
      
      

      ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.66.0,<1.67.0``
   :depends bioconductor-mgfm: ``>=1.22.0,<1.23.0``
   :depends bioconductor-mgfr: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-e1071: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sampleclassifier

   and update with::

      conda update bioconductor-sampleclassifier

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sampleclassifier:<tag>

   (see `bioconductor-sampleclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sampleclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sampleclassifier
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier
.. _`bioconductor-sampleclassifier/tags`: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html