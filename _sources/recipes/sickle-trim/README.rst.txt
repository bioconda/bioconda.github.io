:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sickle-trim'
.. highlight: bash

sickle-trim
===========

.. conda:recipe:: sickle-trim
   :replaces_section_title:

   Windowed Adaptive Trimming for fastq files using quality

   :homepage: https://github.com/najoshi/sickle
   :license: MIT
   :recipe: /`sickle-trim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle-trim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle-trim/meta.yaml>`_

   


.. conda:package:: sickle-trim

   |downloads_sickle-trim| |docker_sickle-trim|

   :versions: 1.33-4, 1.33-3, 1.33-2, 1.33-1, 1.33-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sickle-trim

   and update with::

      conda update sickle-trim

   or use the docker container::

      docker pull quay.io/biocontainers/sickle-trim:<tag>

   (see `sickle-trim/tags`_ for valid values for ``<tag>``)


.. |downloads_sickle-trim| image:: https://img.shields.io/conda/dn/bioconda/sickle-trim.svg?style=flat
   :alt:   (downloads)
.. |docker_sickle-trim| image:: https://quay.io/repository/biocontainers/sickle-trim/status
   :target: https://quay.io/repository/biocontainers/sickle-trim
.. _`sickle-trim/tags`: https://quay.io/repository/biocontainers/sickle-trim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sickle-trim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sickle-trim/README.html