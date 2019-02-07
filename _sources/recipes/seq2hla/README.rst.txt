.. title:: Package Recipe 'seq2hla'
.. highlight: bash


seq2hla
=======

.. conda:recipe:: seq2hla
   :replaces_section_title:

   Precision HLA typing and expression from next\-generation RNA sequencing data

   :homepage: https://bitbucket.org/sebastian_boegel/seq2hla
   :license: MIT
   :recipe: /`seq2hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla/meta.yaml>`_
   :links: biotools: :biotools:`seq2hla`

   


.. conda:package:: seq2hla

   |downloads_seq2hla| |docker_seq2hla|

   :versions: 2.2

   :depends: :conda:package:`biopython` >=1.58 :conda:package:`bowtie` ==1.1.2 :conda:package:`python` 2.7* :conda:package:`r` >=2.12.2 

   :required~by: |required_by_seq2hla|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq2hla

   and update with::

      conda update seq2hla

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seq2hla


.. |required_by_seq2hla| conda:required_by:: seq2hla
.. |downloads_seq2hla| image:: https://img.shields.io/conda/dn/bioconda/seq2hla.svg?style=flat
   :alt:   (downloads)
.. |docker_seq2hla| image:: https://quay.io/repository/biocontainers/seq2hla/status
   :target: https://quay.io/repository/biocontainers/seq2hla







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2hla/README.html

