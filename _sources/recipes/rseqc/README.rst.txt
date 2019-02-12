.. title:: Package Recipe 'rseqc'
.. highlight: bash


rseqc
=====

.. conda:recipe:: rseqc
   :replaces_section_title:

   RNA\-seq QC Package

   :homepage: http://rseqc.sourceforge.net/
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`rseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc/meta.yaml>`_
   :links: biotools: :biotools:`rseqc`, doi: :doi:`10.1093/bioinformatics/bts356`

   


.. conda:package:: rseqc

   |downloads_rseqc| |docker_rseqc|

   :versions: 3.0.0, 2.6.4, 2.6.2

   :depends: :conda:package:`bx-python`  :conda:package:`cython` >=0.17 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`r-base`  

   :required~by: |required_by_rseqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rseqc

   and update with::

      conda update rseqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rseqc


.. |required_by_rseqc| conda:required_by:: rseqc
.. |downloads_rseqc| image:: https://img.shields.io/conda/dn/bioconda/rseqc.svg?style=flat
   :alt:   (downloads)
.. |docker_rseqc| image:: https://quay.io/repository/biocontainers/rseqc/status
   :target: https://quay.io/repository/biocontainers/rseqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseqc/README.html

