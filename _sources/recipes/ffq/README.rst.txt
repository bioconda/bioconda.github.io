:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffq'
.. highlight: bash

ffq
===

.. conda:recipe:: ffq
   :replaces_section_title:
   :noindex:

   A command line tool that makes it easier to find sequencing data from the SRA \/ GEO \/ ENA.

   :homepage: https://github.com/pachterlab/ffq
   :license: MIT / MIT
   :recipe: /`ffq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffq/meta.yaml>`_

   


.. conda:package:: ffq

   |downloads_ffq| |docker_ffq|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends beautifulsoup4: ``>=4.8.2``
   :depends lxml: ``>=4.5.0``
   :depends python: ``>=3``
   :depends requests: ``>=2.23.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ffq

   and update with::

      conda update ffq

   or use the docker container::

      docker pull quay.io/biocontainers/ffq:<tag>

   (see `ffq/tags`_ for valid values for ``<tag>``)


.. |downloads_ffq| image:: https://img.shields.io/conda/dn/bioconda/ffq.svg?style=flat
   :target: https://anaconda.org/bioconda/ffq
   :alt:   (downloads)
.. |docker_ffq| image:: https://quay.io/repository/biocontainers/ffq/status
   :target: https://quay.io/repository/biocontainers/ffq
.. _`ffq/tags`: https://quay.io/repository/biocontainers/ffq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffq/README.html