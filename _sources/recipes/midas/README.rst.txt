.. title:: Package Recipe 'midas'
.. highlight: bash


midas
=====

.. conda:recipe:: midas
   :replaces_section_title:

   An integrated pipeline for estimating strain\-level genomic variation from metagenomic data

   :homepage: https://github.com/snayfach/MIDAS
   :license: GPL / GPL-3.0
   :recipe: /`midas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas/meta.yaml>`_

   


.. conda:package:: midas

   |downloads_midas| |docker_midas|

   :versions: 1.3.2, 1.3.1, 1.3.0

   :depends: :conda:package:`biopython`  :conda:package:`bowtie2`  :conda:package:`hs-blastn`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`samtools` >=1.4.0 

   :required~by: |required_by_midas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install midas

   and update with::

      conda update midas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/midas


.. |required_by_midas| conda:required_by:: midas
.. |downloads_midas| image:: https://img.shields.io/conda/dn/bioconda/midas.svg?style=flat
   :alt:   (downloads)
.. |docker_midas| image:: https://quay.io/repository/biocontainers/midas/status
   :target: https://quay.io/repository/biocontainers/midas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midas/README.html

