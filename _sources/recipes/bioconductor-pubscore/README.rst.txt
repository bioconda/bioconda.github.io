:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pubscore'
.. highlight: bash

bioconductor-pubscore
=====================

.. conda:recipe:: bioconductor-pubscore
   :replaces_section_title:
   :noindex:

   Automatic calculation of literature relevance of genes

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/PubScore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pubscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pubscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pubscore/meta.yaml>`_

   Calculates the importance score for a given gene. The importance score is the total counts of articles in the pubmed database that are a result for that gene AND each term of a list.


.. conda:package:: bioconductor-pubscore

   |downloads_bioconductor-pubscore| |docker_bioconductor-pubscore|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-network: 
   :depends r-progress: 
   :depends r-rentrez: 
   :depends r-sna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pubscore

   and update with::

      conda update bioconductor-pubscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pubscore:<tag>

   (see `bioconductor-pubscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pubscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pubscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pubscore
   :alt:   (downloads)
.. |docker_bioconductor-pubscore| image:: https://quay.io/repository/biocontainers/bioconductor-pubscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pubscore
.. _`bioconductor-pubscore/tags`: https://quay.io/repository/biocontainers/bioconductor-pubscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pubscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pubscore/README.html