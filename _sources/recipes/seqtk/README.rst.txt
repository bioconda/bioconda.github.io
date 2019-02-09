.. title:: Package Recipe 'seqtk'
.. highlight: bash


seqtk
=====

.. conda:recipe:: seqtk
   :replaces_section_title:

   Seqtk is a fast and lightweight tool for processing sequences in the FASTA or FASTQ format

   :homepage: https://github.com/lh3/seqtk
   :license: MIT
   :recipe: /`seqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk/meta.yaml>`_
   :links: biotools: :biotools:`seqtk`

   


.. conda:package:: seqtk

   |downloads_seqtk| |docker_seqtk|

   :versions: 1.3, 1.2, r93, r82, r75

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_seqtk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqtk

   and update with::

      conda update seqtk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqtk


.. |required_by_seqtk| conda:required_by:: seqtk
.. |downloads_seqtk| image:: https://img.shields.io/conda/dn/bioconda/seqtk.svg?style=flat
   :alt:   (downloads)
.. |docker_seqtk| image:: https://quay.io/repository/biocontainers/seqtk/status
   :target: https://quay.io/repository/biocontainers/seqtk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqtk/README.html

