:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthub'
.. highlight: bash

bioconductor-experimenthub
==========================

.. conda:recipe:: bioconductor-experimenthub
   :replaces_section_title:
   :noindex:

   Client to access ExperimentHub resources

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ExperimentHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub/meta.yaml>`_

   This package provides a client for the Bioconductor ExperimentHub web resource. ExperimentHub provides a central location where curated data from experiments\, publications or training courses can be accessed. Each resource has associated metadata\, tags and date of modification. The client creates and manages a local cache of files retrieved enabling quick and reproducible access.


.. conda:package:: bioconductor-experimenthub

   |downloads_bioconductor-experimenthub| |docker_bioconductor-experimenthub|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=2.20.0,<2.21.0``
   :depends bioconductor-biocfilecache: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthub

   and update with::

      conda update bioconductor-experimenthub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthub:<tag>

   (see `bioconductor-experimenthub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthub
   :alt:   (downloads)
.. |docker_bioconductor-experimenthub| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthub
.. _`bioconductor-experimenthub/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html