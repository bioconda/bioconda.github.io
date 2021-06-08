:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wppi'
.. highlight: bash

bioconductor-wppi
=================

.. conda:recipe:: bioconductor-wppi
   :replaces_section_title:
   :noindex:

   Weighting protein\-protein interactions

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/wppi.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-wppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wppi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wppi/meta.yaml>`_

   Protein\-protein interaction data is essential for omics data analysis and modeling. Database knowledge is general\, not specific for cell type\, physiological condition or any other context determining which connections are functional and contribute to the signaling. Functional annotations such as Gene Ontology and Human Phenotype Ontology might help to evaluate the relevance of interactions. This package predicts functional relevance of protein\-protein interactions based on functional annotations such as Human Protein Ontology and Gene Ontology\, and prioritizes genes based on network topology\, functional scores and a path search algorithm.


.. conda:package:: bioconductor-wppi

   |downloads_bioconductor-wppi| |docker_bioconductor-wppi|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wppi

   and update with::

      conda update bioconductor-wppi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wppi:<tag>

   (see `bioconductor-wppi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wppi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wppi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wppi
   :alt:   (downloads)
.. |docker_bioconductor-wppi| image:: https://quay.io/repository/biocontainers/bioconductor-wppi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wppi
.. _`bioconductor-wppi/tags`: https://quay.io/repository/biocontainers/bioconductor-wppi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wppi/README.html