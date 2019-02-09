.. title:: Package Recipe 'dsrc'
.. highlight: bash


dsrc
====

.. conda:recipe:: dsrc
   :replaces_section_title:

   high\-performance compression of sequencing reads stored in FASTQ format

   :homepage: https://github.com/refresh-bio/DSRC
   :license: GNU GPL 2
   :recipe: /`dsrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc/meta.yaml>`_
   :links: biotools: :biotools:`dsrc`

   


.. conda:package:: dsrc

   |downloads_dsrc| |docker_dsrc|

   :versions: 2015.06.04, 2014.12.17

   :depends: :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_dsrc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dsrc

   and update with::

      conda update dsrc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dsrc


.. |required_by_dsrc| conda:required_by:: dsrc
.. |downloads_dsrc| image:: https://img.shields.io/conda/dn/bioconda/dsrc.svg?style=flat
   :alt:   (downloads)
.. |docker_dsrc| image:: https://quay.io/repository/biocontainers/dsrc/status
   :target: https://quay.io/repository/biocontainers/dsrc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsrc/README.html

