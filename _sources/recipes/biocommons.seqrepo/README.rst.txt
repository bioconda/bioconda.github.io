:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocommons.seqrepo'
.. highlight: bash

biocommons.seqrepo
==================

.. conda:recipe:: biocommons.seqrepo
   :replaces_section_title:
   :noindex:

   Python package for writing and reading a local collection of biological sequences.

   :homepage: https://github.com/biocommons/biocommons.seqrepo
   :license: Apache-2.0
   :recipe: /`biocommons.seqrepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo/meta.yaml>`_

   


.. conda:package:: biocommons.seqrepo

   |downloads_biocommons.seqrepo| |docker_biocommons.seqrepo|

   :versions:
      
      

      ``0.6.4-0``,  ``0.6.3-0``

      

   
   :depends bioutils: ``>0.4``
   :depends coloredlogs: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends requests-html: 
   :depends six: 
   :depends tqdm: 
   :depends yoyo-migrations: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biocommons.seqrepo

   and update with::

      conda update biocommons.seqrepo

   or use the docker container::

      docker pull quay.io/biocontainers/biocommons.seqrepo:<tag>

   (see `biocommons.seqrepo/tags`_ for valid values for ``<tag>``)


.. |downloads_biocommons.seqrepo| image:: https://img.shields.io/conda/dn/bioconda/biocommons.seqrepo.svg?style=flat
   :target: https://anaconda.org/bioconda/biocommons.seqrepo
   :alt:   (downloads)
.. |docker_biocommons.seqrepo| image:: https://quay.io/repository/biocontainers/biocommons.seqrepo/status
   :target: https://quay.io/repository/biocontainers/biocommons.seqrepo
.. _`biocommons.seqrepo/tags`: https://quay.io/repository/biocontainers/biocommons.seqrepo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocommons.seqrepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocommons.seqrepo/README.html