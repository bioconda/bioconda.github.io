.. title:: Package Recipe 'vsearch'
.. highlight: bash


vsearch
=======

.. conda:recipe:: vsearch
   :replaces_section_title:

   a versatile open source tool for metagenomics \(USEARCH alternative\)

   :homepage: https://github.com/torognes/vsearch
   :license: GPL / dual-licensed under GPL-3.0+ or BSD 2-clause
   :recipe: /`vsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch/meta.yaml>`_
   :links: biotools: :biotools:`vsearch`, doi: :doi:`10.7717/peerj.2584`

   


.. conda:package:: vsearch

   |downloads_vsearch| |docker_vsearch|

   :versions: 2.10.4, 2.10.3, 2.10.2, 2.10.1, 2.10.0, 2.9.1, 2.9.0, 2.8.5, 2.8.3, 2.8.2, 2.8.1, 2.8.0, 2.7.0, 2.6.0, 2.5.0, 2.4.4, 2.4.3, 2.4.0, 2.3.4, 2.3.2, 2.0.3, 2.0.2, 2.0.0, 1.11.1, 1.10.2, 1.9.7, 1.9.5, 1.1.3

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_vsearch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vsearch

   and update with::

      conda update vsearch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vsearch


.. |required_by_vsearch| conda:required_by:: vsearch
.. |downloads_vsearch| image:: https://img.shields.io/conda/dn/bioconda/vsearch.svg?style=flat
   :alt:   (downloads)
.. |docker_vsearch| image:: https://quay.io/repository/biocontainers/vsearch/status
   :target: https://quay.io/repository/biocontainers/vsearch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsearch/README.html

