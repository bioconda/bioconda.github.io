:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastaq'
.. highlight: bash

pyfastaq
========

.. conda:recipe:: pyfastaq
   :replaces_section_title:

   Script to manipulate FASTA and FASTQ files\, plus API for developers

   :homepage: https://github.com/sanger-pathogens/Fastaq
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`pyfastaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq/meta.yaml>`_

   


.. conda:package:: pyfastaq

   |downloads_pyfastaq| |docker_pyfastaq|

   :versions: 3.17.0-1, 3.17.0-0, 3.14.0-0, 3.11.0-1, 3.11.0-0
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfastaq

   and update with::

      conda update pyfastaq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyfastaq:<tag>

   (see `pyfastaq/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastaq| image:: https://img.shields.io/conda/dn/bioconda/pyfastaq.svg?style=flat
   :alt:   (downloads)
.. |docker_pyfastaq| image:: https://quay.io/repository/biocontainers/pyfastaq/status
   :target: https://quay.io/repository/biocontainers/pyfastaq
.. _`pyfastaq/tags`: https://quay.io/repository/biocontainers/pyfastaq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastaq/README.html