:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-absseq'
.. highlight: bash

bioconductor-absseq
===================

.. conda:recipe:: bioconductor-absseq
   :replaces_section_title:
   :noindex:

   ABSSeq\: a new RNA\-Seq analysis method based on modelling absolute expression differences

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ABSSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-absseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq/meta.yaml>`_
   :links: biotools: :biotools:`absseq`

   Inferring differential expression genes by absolute counts difference between two groups\, utilizing Negative binomial distribution and moderating fold\-change according to heterogeneity of dispersion across expression level.


.. conda:package:: bioconductor-absseq

   |downloads_bioconductor-absseq| |docker_bioconductor-absseq|

   :versions:
      
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-0``,  ``1.22.8-0``

      

   
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-locfit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-absseq

   and update with::

      conda update bioconductor-absseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-absseq:<tag>

   (see `bioconductor-absseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-absseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-absseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-absseq
   :alt:   (downloads)
.. |docker_bioconductor-absseq| image:: https://quay.io/repository/biocontainers/bioconductor-absseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-absseq
.. _`bioconductor-absseq/tags`: https://quay.io/repository/biocontainers/bioconductor-absseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-absseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-absseq/README.html