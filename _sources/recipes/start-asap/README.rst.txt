:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'start-asap'
.. highlight: bash

start-asap
==========

.. conda:recipe:: start-asap
   :replaces_section_title:
   :noindex:

   Prepare project directory and project sheet for ASA3P

   :homepage: http://github.com/quadram-institute-bioscience/start-asap/
   :license: MIT
   :recipe: /`start-asap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap/meta.yaml>`_
   :links: biotools: :biotools:`start-asap`

   Prepare the input directory for \'ASA3P\'\, creating automatically a \_config.xls\_ file from the reads provided.
   Requires one or more reference files \(.gbk recommended\) and a directory with FASTQ files \(.fq or .fastq\, gzipped\).
   Metadata can be supplied via command line or with a JSON file.



.. conda:package:: start-asap

   |downloads_start-asap| |docker_start-asap|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends perl: 
   :depends perl-getopt-long: 
   :depends perl-json-pp: 
   :depends perl-pod-usage: 
   :depends perl-spreadsheet-writeexcel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install start-asap

   and update with::

      conda update start-asap

   or use the docker container::

      docker pull quay.io/biocontainers/start-asap:<tag>

   (see `start-asap/tags`_ for valid values for ``<tag>``)


.. |downloads_start-asap| image:: https://img.shields.io/conda/dn/bioconda/start-asap.svg?style=flat
   :target: https://anaconda.org/bioconda/start-asap
   :alt:   (downloads)
.. |docker_start-asap| image:: https://quay.io/repository/biocontainers/start-asap/status
   :target: https://quay.io/repository/biocontainers/start-asap
.. _`start-asap/tags`: https://quay.io/repository/biocontainers/start-asap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/start-asap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/start-asap/README.html