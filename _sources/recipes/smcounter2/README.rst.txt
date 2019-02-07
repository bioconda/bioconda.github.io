.. title:: Package Recipe 'smcounter2'
.. highlight: bash


smcounter2
==========

.. conda:recipe:: smcounter2
   :replaces_section_title:

   smCounter2\: an accurate low\-frequency variant caller for targeted sequencing data with unique molecular identifiers

   :homepage: https://github.com/qiaseq/qiaseq-smcounter-v2
   :license: MIT
   :recipe: /`smcounter2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2/meta.yaml>`_

   


.. conda:package:: smcounter2

   |downloads_smcounter2| |docker_smcounter2|

   :versions: 0.1.2018.08.28

   :depends: :conda:package:`bedtools`  :conda:package:`openpyxl`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-plyr`  :conda:package:`scipy`  :conda:package:`statistics`  

   :required~by: |required_by_smcounter2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smcounter2

   and update with::

      conda update smcounter2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smcounter2


.. |required_by_smcounter2| conda:required_by:: smcounter2
.. |downloads_smcounter2| image:: https://img.shields.io/conda/dn/bioconda/smcounter2.svg?style=flat
   :alt:   (downloads)
.. |docker_smcounter2| image:: https://quay.io/repository/biocontainers/smcounter2/status
   :target: https://quay.io/repository/biocontainers/smcounter2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcounter2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcounter2/README.html

