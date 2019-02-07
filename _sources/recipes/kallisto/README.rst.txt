.. title:: Package Recipe 'kallisto'
.. highlight: bash


kallisto
========

.. conda:recipe:: kallisto
   :replaces_section_title:

   Quantifying abundances of transcripts from RNA\-Seq data\, or more generally of target sequences using high\-throughput sequencing reads.

   :homepage: http://pachterlab.github.io/kallisto
   :license: BSD_2_Clause
   :recipe: /`kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto/meta.yaml>`_
   :links: biotools: :biotools:`kallisto`, doi: :doi:`10.1038/nbt.3519`

   


.. conda:package:: kallisto

   |downloads_kallisto| |docker_kallisto|

   :versions: 0.45.0, 0.44.0, 0.43.1, 0.43.0, 0.42.4, 0.42.3

   :depends: :conda:package:`hdf5` >=1.10.3,<1.10.4.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_kallisto|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kallisto

   and update with::

      conda update kallisto

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kallisto


.. |required_by_kallisto| conda:required_by:: kallisto
.. |downloads_kallisto| image:: https://img.shields.io/conda/dn/bioconda/kallisto.svg?style=flat
   :alt:   (downloads)
.. |docker_kallisto| image:: https://quay.io/repository/biocontainers/kallisto/status
   :target: https://quay.io/repository/biocontainers/kallisto







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kallisto/README.html

