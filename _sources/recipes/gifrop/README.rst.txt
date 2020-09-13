:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gifrop'
.. highlight: bash

gifrop
======

.. conda:recipe:: gifrop
   :replaces_section_title:
   :noindex:

   Identify\, classify\, and cluster genomic islands from roary pangenomes

   :homepage: https://github.com/jtrachsel/gifrop
   :license: GPL2
   :recipe: /`gifrop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gifrop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gifrop/meta.yaml>`_

   


.. conda:package:: gifrop

   |downloads_gifrop| |docker_gifrop|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.1-0``

      

   
   :depends abricate: ``>=1.0.0``
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends parallel: 
   :depends prokka: ``>=1.14.6``
   :depends r-base: ``>=3.6``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends roary: ``>=3.13.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gifrop

   and update with::

      conda update gifrop

   or use the docker container::

      docker pull quay.io/biocontainers/gifrop:<tag>

   (see `gifrop/tags`_ for valid values for ``<tag>``)


.. |downloads_gifrop| image:: https://img.shields.io/conda/dn/bioconda/gifrop.svg?style=flat
   :target: https://anaconda.org/bioconda/gifrop
   :alt:   (downloads)
.. |docker_gifrop| image:: https://quay.io/repository/biocontainers/gifrop/status
   :target: https://quay.io/repository/biocontainers/gifrop
.. _`gifrop/tags`: https://quay.io/repository/biocontainers/gifrop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gifrop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gifrop/README.html