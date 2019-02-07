.. title:: Package Recipe 'seqprep'
.. highlight: bash


seqprep
=======

.. conda:recipe:: seqprep
   :replaces_section_title:

   Tool for stripping adaptors and\/or merging paired reads with overlap into single reads.

   :homepage: https://github.com/jstjohn/SeqPrep
   :license: MIT / MIT
   :recipe: /`seqprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep/meta.yaml>`_
   :links: biotools: :biotools:`seqprep`, doi: :doi:`10.1134/S1021443716020175`

   


.. conda:package:: seqprep

   |downloads_seqprep| |docker_seqprep|

   :versions: 1.3.2, 1.2, 1.1

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_seqprep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqprep

   and update with::

      conda update seqprep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqprep


.. |required_by_seqprep| conda:required_by:: seqprep
.. |downloads_seqprep| image:: https://img.shields.io/conda/dn/bioconda/seqprep.svg?style=flat
   :alt:   (downloads)
.. |docker_seqprep| image:: https://quay.io/repository/biocontainers/seqprep/status
   :target: https://quay.io/repository/biocontainers/seqprep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqprep/README.html

