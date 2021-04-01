:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrvgo'
.. highlight: bash

bioconductor-rrvgo
==================

.. conda:recipe:: bioconductor-rrvgo
   :replaces_section_title:
   :noindex:

   Reduce \+ Visualize GO

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rrvgo.html
   :license: GPL-3
   :recipe: /`bioconductor-rrvgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrvgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrvgo/meta.yaml>`_

   Reduce and visualize lists of Gene Ontology terms by identifying redudance based on semantic similarity.


.. conda:package:: bioconductor-rrvgo

   |downloads_bioconductor-rrvgo| |docker_bioconductor-rrvgo|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends bioconductor-gosemsim: ``>=2.16.0,<2.17.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-pheatmap: 
   :depends r-shiny: 
   :depends r-tm: 
   :depends r-treemap: 
   :depends r-wordcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrvgo

   and update with::

      conda update bioconductor-rrvgo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrvgo:<tag>

   (see `bioconductor-rrvgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrvgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrvgo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrvgo
   :alt:   (downloads)
.. |docker_bioconductor-rrvgo| image:: https://quay.io/repository/biocontainers/bioconductor-rrvgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrvgo
.. _`bioconductor-rrvgo/tags`: https://quay.io/repository/biocontainers/bioconductor-rrvgo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrvgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrvgo/README.html