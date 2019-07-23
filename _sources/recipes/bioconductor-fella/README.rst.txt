:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fella'
.. highlight: bash

bioconductor-fella
==================

.. conda:recipe:: bioconductor-fella
   :replaces_section_title:

   Enrichment of metabolomics data using KEGG entries. Given a set of affected compounds\, FELLA suggests affected reactions\, enzymes\, modules and pathways using label propagation in a knowledge model network. The resulting subnetwork can be visualised and exported.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/FELLA.html
   :license: GPL-3
   :recipe: /`bioconductor-fella <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fella>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fella/meta.yaml>`_

   


.. conda:package:: bioconductor-fella

   |downloads_bioconductor-fella| |docker_bioconductor-fella|

   :versions: 1.4.0-1, 1.2.0-1, 1.2.0-0
   
   :depends bioconductor-keggrest: >=1.24.0,<1.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fella

   and update with::

      conda update bioconductor-fella

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fella:<tag>

   (see `bioconductor-fella/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fella| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fella.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fella
   :alt:   (downloads)
.. |docker_bioconductor-fella| image:: https://quay.io/repository/biocontainers/bioconductor-fella/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fella
.. _`bioconductor-fella/tags`: https://quay.io/repository/biocontainers/bioconductor-fella?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fella/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fella/README.html