.. title:: Package Recipe 'toulligqc'
.. highlight: bash


toulligqc
=========

.. conda:recipe:: toulligqc
   :replaces_section_title:

   A post sequencing QC tool for Oxford Nanopore sequencers

   :homepage: https://github.com/GenomicParisCentre/toulligQC
   :license: GPL / GPL-3.0
   :recipe: /`toulligqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc/meta.yaml>`_

   


.. conda:package:: toulligqc

   |downloads_toulligqc| |docker_toulligqc|

   :versions: 1.0, 0.10, 0.9, 0.5

   :depends: :conda:package:`h5py` >=2.7,<2.8 :conda:package:`matplotlib` >=2.0,<2.1 :conda:package:`numpy` >=1.12,<1.13 :conda:package:`pandas` >=0.19,<0.20 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`seaborn` >=0.7,<0.8 

   :required~by: |required_by_toulligqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toulligqc

   and update with::

      conda update toulligqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/toulligqc


.. |required_by_toulligqc| conda:required_by:: toulligqc
.. |downloads_toulligqc| image:: https://img.shields.io/conda/dn/bioconda/toulligqc.svg?style=flat
   :alt:   (downloads)
.. |docker_toulligqc| image:: https://quay.io/repository/biocontainers/toulligqc/status
   :target: https://quay.io/repository/biocontainers/toulligqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toulligqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toulligqc/README.html

