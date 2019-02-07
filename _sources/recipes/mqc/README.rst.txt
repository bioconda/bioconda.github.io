.. title:: Package Recipe 'mqc'
.. highlight: bash


mqc
===

.. conda:recipe:: mqc
   :replaces_section_title:

   qualtiy control tool to assess the mapping quality of a ribosome profiling experiment

   :homepage: https://github.com/Biobix/mQC
   :license: GNU General Public License v3.0
   :recipe: /`mqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc/meta.yaml>`_

   


.. conda:package:: mqc

   |downloads_mqc| |docker_mqc|

   :versions: 1.10, 1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-dbd-sqlite`  :conda:package:`perl-dbi`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`plastid`  :conda:package:`pysam` 0.11* :conda:package:`python` 2.7* :conda:package:`r-base` 3.4.1* :conda:package:`samtools`  :conda:package:`seaborn`  

   :required~by: |required_by_mqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mqc

   and update with::

      conda update mqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mqc


.. |required_by_mqc| conda:required_by:: mqc
.. |downloads_mqc| image:: https://img.shields.io/conda/dn/bioconda/mqc.svg?style=flat
   :alt:   (downloads)
.. |docker_mqc| image:: https://quay.io/repository/biocontainers/mqc/status
   :target: https://quay.io/repository/biocontainers/mqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mqc/README.html

