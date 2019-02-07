.. title:: Package Recipe 'slamdunk'
.. highlight: bash


slamdunk
========

.. conda:recipe:: slamdunk
   :replaces_section_title:

   SlamDunk is a novel\, fully automated software tool for automated\, robust\, scalable and reproducible SLAMseq data analysis.

   :homepage: http://t-neumann.github.io/slamdunk
   :license: GNU Affero General Public License v3 (AGPLv3)
   :recipe: /`slamdunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk/meta.yaml>`_

   


.. conda:package:: slamdunk

   |downloads_slamdunk| |docker_slamdunk|

   :versions: 0.3.3, 0.3.2

   :depends: :conda:package:`biopython` >=1.63 :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`cython` >=0.20.1 :conda:package:`intervaltree` >=2.1.0 :conda:package:`joblib` >=0.9.4 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`openjdk`  :conda:package:`pandas` >=0.13.1 :conda:package:`pybedtools` >=0.6.4 :conda:package:`pysam` >=0.8.3 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-tidyverse`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_slamdunk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slamdunk

   and update with::

      conda update slamdunk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/slamdunk


.. |required_by_slamdunk| conda:required_by:: slamdunk
.. |downloads_slamdunk| image:: https://img.shields.io/conda/dn/bioconda/slamdunk.svg?style=flat
   :alt:   (downloads)
.. |docker_slamdunk| image:: https://quay.io/repository/biocontainers/slamdunk/status
   :target: https://quay.io/repository/biocontainers/slamdunk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slamdunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slamdunk/README.html

