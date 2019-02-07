.. title:: Package Recipe 'riboseq-rust'
.. highlight: bash


riboseq-rust
============

.. conda:recipe:: riboseq-rust
   :replaces_section_title:

   Ribo\-seq Unit Step Transformation. Tools to characterise the determinants of ribosome profiling read density across mRNA. May be used to examine relative decoding rates and and for quality assessment

   :homepage: https://lapti.ucc.ie/rust/
   :license: GPL-3.0
   :recipe: /`riboseq-rust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseq-rust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseq-rust/meta.yaml>`_

   


.. conda:package:: riboseq-rust

   |downloads_riboseq-rust| |docker_riboseq-rust|

   :versions: 1.2

   :depends: :conda:package:`argparse`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7* 

   :required~by: |required_by_riboseq-rust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboseq-rust

   and update with::

      conda update riboseq-rust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/riboseq-rust


.. |required_by_riboseq-rust| conda:required_by:: riboseq-rust
.. |downloads_riboseq-rust| image:: https://img.shields.io/conda/dn/bioconda/riboseq-rust.svg?style=flat
   :alt:   (downloads)
.. |docker_riboseq-rust| image:: https://quay.io/repository/biocontainers/riboseq-rust/status
   :target: https://quay.io/repository/biocontainers/riboseq-rust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseq-rust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseq-rust/README.html

