.. title:: Package Recipe 'guidescan'
.. highlight: bash


guidescan
=========

.. conda:recipe:: guidescan
   :replaces_section_title:

   Tools to create and interface genome\-wide CRISPR guideRNA databases

   :homepage: https://bitbucket.org/arp2012/guidescan_public
   :license: Unknown
   :recipe: /`guidescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan/meta.yaml>`_

   


.. conda:package:: guidescan

   |downloads_guidescan| |docker_guidescan|

   :versions: 1.2, 1.0

   :depends: :conda:package:`biopython` >=1.66 :conda:package:`bx-python` ==0.7.3 :conda:package:`coreutils`  :conda:package:`numpy`  :conda:package:`openblas`  :conda:package:`pandas`  :conda:package:`psutil`  :conda:package:`pyfaidx` ==0.4.7.1 :conda:package:`pysam` ==0.8.3 :conda:package:`python` >=2.7.13 :conda:package:`python-dateutil` >=2.5.0 :conda:package:`rename`  :conda:package:`samtools` ==1.3.1 :conda:package:`scikit-learn` >=0.16.1 :conda:package:`xlwt`  

   :required~by: |required_by_guidescan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guidescan

   and update with::

      conda update guidescan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/guidescan


.. |required_by_guidescan| conda:required_by:: guidescan
.. |downloads_guidescan| image:: https://img.shields.io/conda/dn/bioconda/guidescan.svg?style=flat
   :alt:   (downloads)
.. |docker_guidescan| image:: https://quay.io/repository/biocontainers/guidescan/status
   :target: https://quay.io/repository/biocontainers/guidescan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidescan/README.html

