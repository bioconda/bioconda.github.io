.. title:: Package Recipe 'dsh-bio'
.. highlight: bash


dsh-bio
=======

.. conda:recipe:: dsh-bio
   :replaces_section_title:

   Tools for BED\, FASTA\, FASTQ\, GFA1\/2\, GFF3\, and VCF files

   :homepage: https://github.com/heuermh/dishevelled-bio
   :license: LGPL version 3 or later
   :recipe: /`dsh-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio/meta.yaml>`_

   


.. conda:package:: dsh-bio

   |downloads_dsh-bio| |docker_dsh-bio|

   :versions: 1.0.1, 1.0

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_dsh-bio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dsh-bio

   and update with::

      conda update dsh-bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dsh-bio


.. |required_by_dsh-bio| conda:required_by:: dsh-bio
.. |downloads_dsh-bio| image:: https://img.shields.io/conda/dn/bioconda/dsh-bio.svg?style=flat
   :alt:   (downloads)
.. |docker_dsh-bio| image:: https://quay.io/repository/biocontainers/dsh-bio/status
   :target: https://quay.io/repository/biocontainers/dsh-bio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsh-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsh-bio/README.html

