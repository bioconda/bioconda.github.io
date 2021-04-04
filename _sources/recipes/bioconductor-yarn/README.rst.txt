:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yarn'
.. highlight: bash

bioconductor-yarn
=================

.. conda:recipe:: bioconductor-yarn
   :replaces_section_title:
   :noindex:

   YARN\: Robust Multi\-Condition RNA\-Seq Preprocessing and Normalization

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/yarn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yarn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yarn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yarn/meta.yaml>`_
   :links: biotools: :biotools:`yarn`, doi: :doi:`10.1101/086587`

   Expedite large RNA\-Seq analyses using a combination of previously developed tools. YARN is meant to make it easier for the user in performing basic mis\-annotation quality control\, filtering\, and condition\-aware normalization. YARN leverages many Bioconductor tools and statistical techniques to account for the large heterogeneity and sparsity found in very large RNA\-seq experiments.


.. conda:package:: bioconductor-yarn

   |downloads_bioconductor-yarn| |docker_bioconductor-yarn|

   :versions:
      
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends bioconductor-quantro: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-downloader: 
   :depends r-gplots: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yarn

   and update with::

      conda update bioconductor-yarn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yarn:<tag>

   (see `bioconductor-yarn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yarn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yarn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yarn
   :alt:   (downloads)
.. |docker_bioconductor-yarn| image:: https://quay.io/repository/biocontainers/bioconductor-yarn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yarn
.. _`bioconductor-yarn/tags`: https://quay.io/repository/biocontainers/bioconductor-yarn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yarn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yarn/README.html