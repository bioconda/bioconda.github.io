:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uniprot.ws'
.. highlight: bash

bioconductor-uniprot.ws
=======================

.. conda:recipe:: bioconductor-uniprot.ws
   :replaces_section_title:
   :noindex:

   R Interface to UniProt Web Services

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/UniProt.ws.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-uniprot.ws <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws/meta.yaml>`_
   :links: biotools: :biotools:`uniprot.ws`, doi: :doi:`10.1038/nmeth.3252`

   A collection of functions for retrieving\, processing and repackaging the UniProt web services.


.. conda:package:: bioconductor-uniprot.ws

   |downloads_bioconductor-uniprot.ws| |docker_bioconductor-uniprot.ws|

   :versions:
      
      

      ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.4-0``,  ``2.18.0-0``,  ``2.16.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biocfilecache: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rappdirs: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-uniprot.ws

   and update with::

      conda update bioconductor-uniprot.ws

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-uniprot.ws:<tag>

   (see `bioconductor-uniprot.ws/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-uniprot.ws| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniprot.ws.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uniprot.ws
   :alt:   (downloads)
.. |docker_bioconductor-uniprot.ws| image:: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws
.. _`bioconductor-uniprot.ws/tags`: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uniprot.ws/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uniprot.ws/README.html