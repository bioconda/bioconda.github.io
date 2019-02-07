.. title:: Package Recipe 'blast'
.. highlight: bash


blast
=====

.. conda:recipe:: blast
   :replaces_section_title:

   BLAST\+ is a new suite of BLAST tools that utilizes the NCBI C\+\+ Toolkit.

   :homepage: http://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs
   :license: Public Domain
   :recipe: /`blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1016/S0022-2836(05)80360-2`

   


.. conda:package:: blast

   |downloads_blast| |docker_blast|

   :versions: 2.7.1, 2.6.0, 2.5.0, 2.2.31, 2.2.21

   :depends: :conda:package:`boost` 1.64* :conda:package:`bzip2` 1.0* :conda:package:`gnutls`  :conda:package:`libgcc`  :conda:package:`nettle` 3.3|3.3.* :conda:package:`pcre`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_blast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blast

   and update with::

      conda update blast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blast


.. |required_by_blast| conda:required_by:: blast
.. |downloads_blast| image:: https://img.shields.io/conda/dn/bioconda/blast.svg?style=flat
   :alt:   (downloads)
.. |docker_blast| image:: https://quay.io/repository/biocontainers/blast/status
   :target: https://quay.io/repository/biocontainers/blast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast/README.html

