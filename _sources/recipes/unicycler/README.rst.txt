.. title:: Package Recipe 'unicycler'
.. highlight: bash


unicycler
=========

.. conda:recipe:: unicycler
   :replaces_section_title:

   Hybrid assembly pipeline for bacterial genomes

   :homepage: https://github.com/rrwick/Unicycler
   :license: GPL / GPL-3.0
   :recipe: /`unicycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler/meta.yaml>`_

   


.. conda:package:: unicycler

   |downloads_unicycler| |docker_unicycler|

   :versions: 0.4.7, 0.4.6, 0.4.4, 0.4.1, 0.3.0b, 0.2.0

   :depends: :conda:package:`blast`  :conda:package:`bowtie2`  :conda:package:`freebayes`  :conda:package:`libcxx` >=4.0.1 :conda:package:`miniasm`  :conda:package:`openjdk`  :conda:package:`pilon`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`racon`  :conda:package:`samtools` >=1.0 :conda:package:`spades` >=3.6.2 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_unicycler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unicycler

   and update with::

      conda update unicycler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/unicycler


.. |required_by_unicycler| conda:required_by:: unicycler
.. |downloads_unicycler| image:: https://img.shields.io/conda/dn/bioconda/unicycler.svg?style=flat
   :alt:   (downloads)
.. |docker_unicycler| image:: https://quay.io/repository/biocontainers/unicycler/status
   :target: https://quay.io/repository/biocontainers/unicycler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicycler/README.html

