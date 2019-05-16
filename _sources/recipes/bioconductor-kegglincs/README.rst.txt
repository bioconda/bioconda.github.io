:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kegglincs'
.. highlight: bash

bioconductor-kegglincs
======================

.. conda:recipe:: bioconductor-kegglincs
   :replaces_section_title:

   See what is going on \'under the hood\' of KEGG pathways by explicitly re\-creating the pathway maps from information obtained from KGML files.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/KEGGlincs.html
   :license: GPL-3
   :recipe: /`bioconductor-kegglincs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegglincs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegglincs/meta.yaml>`_
   :links: biotools: :biotools:`kegglincs`, doi: :doi:`10.7490/f1000research.1113436.1`

   


.. conda:package:: bioconductor-kegglincs

   |downloads_bioconductor-kegglincs| |docker_bioconductor-kegglincs|

   :versions: 1.8.0-0, 1.6.2-0, 1.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-hgu133a.db: >=3.2.0,<3.3.0
   :depends bioconductor-kegggraph: >=1.42.0,<1.43.0
   :depends bioconductor-keggrest: >=1.22.0,<1.23.0
   :depends bioconductor-kodata: >=1.8.0,<1.9.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gtools: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-plyr: 
   :depends r-rjsonio: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kegglincs

   and update with::

      conda update bioconductor-kegglincs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kegglincs:<tag>

   (see `bioconductor-kegglincs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kegglincs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegglincs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kegglincs
   :alt:   (downloads)
.. |docker_bioconductor-kegglincs| image:: https://quay.io/repository/biocontainers/bioconductor-kegglincs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegglincs
.. _`bioconductor-kegglincs/tags`: https://quay.io/repository/biocontainers/bioconductor-kegglincs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegglincs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegglincs/README.html