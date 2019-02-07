.. title:: Package Recipe 'hap.py'
.. highlight: bash


hap.py
======

.. conda:recipe:: hap.py
   :replaces_section_title:

   Haplotype VCF comparison tools

   :homepage: https://github.com/Illumina/hap.py
   :license: BSD / BSD-2-Clause
   :recipe: /`hap.py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap.py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap.py/meta.yaml>`_

   


.. conda:package:: hap.py

   |downloads_hap.py| |docker_hap.py|

   :versions: 0.3.10, 0.3.7, 0.2.9

   :depends: :conda:package:`bcftools`  :conda:package:`bx-python`  :conda:package:`cython`  :conda:package:`libgcc`  :conda:package:`nose`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`scipy`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_hap.py|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hap.py

   and update with::

      conda update hap.py

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hap.py


.. |required_by_hap.py| conda:required_by:: hap.py
.. |downloads_hap.py| image:: https://img.shields.io/conda/dn/bioconda/hap.py.svg?style=flat
   :alt:   (downloads)
.. |docker_hap.py| image:: https://quay.io/repository/biocontainers/hap.py/status
   :target: https://quay.io/repository/biocontainers/hap.py







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hap.py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hap.py/README.html

