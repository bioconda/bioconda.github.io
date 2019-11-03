:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationhub'
.. highlight: bash

bioconductor-annotationhub
==========================

.. conda:recipe:: bioconductor-annotationhub
   :replaces_section_title:

   This package provides a client for the Bioconductor AnnotationHub web resource. The AnnotationHub web resource provides a central location where genomic files \(e.g.\, VCF\, bed\, wig\) and other resources from standard locations \(e.g.\, UCSC\, Ensembl\) can be discovered. The resource includes metadata about each resource\, e.g.\, a textual description\, tags\, and date of modification. The client creates and manages a local cache of files retrieved by the user\, helping with quick and reproducible access.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AnnotationHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub/meta.yaml>`_
   :links: biotools: :biotools:`annotationhub`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-annotationhub

   |downloads_bioconductor-annotationhub| |docker_bioconductor-annotationhub|

   :versions: 2.18.0-0, 2.16.0-1, 2.14.5-0, 2.14.2-0, 2.12.1-0, 2.10.1-0, 2.10.0-0, 2.8.2-0, 2.6.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biocfilecache: >=1.10.0,<1.11.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocversion: >=3.10.0,<3.11.0
   :depends bioconductor-interactivedisplaybase: >=1.24.0,<1.25.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-rappdirs: 
   :depends r-rsqlite: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationhub

   and update with::

      conda update bioconductor-annotationhub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationhub:<tag>

   (see `bioconductor-annotationhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationhub
   :alt:   (downloads)
.. |docker_bioconductor-annotationhub| image:: https://quay.io/repository/biocontainers/bioconductor-annotationhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationhub
.. _`bioconductor-annotationhub/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationhub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html