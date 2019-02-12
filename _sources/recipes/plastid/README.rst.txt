.. title:: Package Recipe 'plastid'
.. highlight: bash


plastid
=======

.. conda:recipe:: plastid
   :replaces_section_title:

   plastid is a Python library for genomic analysis \-\- in particular\, high\-throughput sequencing data

   :homepage: http://plastid.readthedocs.io/en/latest/
   :license: BSD 3-Clause
   :recipe: /`plastid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid/meta.yaml>`_

   


.. conda:package:: plastid

   |downloads_plastid| |docker_plastid|

   :versions: 0.4.8, 0.4.7

   :depends: :conda:package:`biopython` >=1.64 :conda:package:`bowtie`  :conda:package:`cython` >=0.22.0 :conda:package:`fastx_toolkit`  :conda:package:`libgcc`  :conda:package:`matplotlib` >=1.4.0 :conda:package:`numpy` >=1.9.0 :conda:package:`pandas` >=0.17.0 :conda:package:`pysam` >=0.8.4 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.15.1 :conda:package:`termcolor`  :conda:package:`twobitreader` >=3.0.0 :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_plastid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plastid

   and update with::

      conda update plastid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plastid


.. |required_by_plastid| conda:required_by:: plastid
.. |downloads_plastid| image:: https://img.shields.io/conda/dn/bioconda/plastid.svg?style=flat
   :alt:   (downloads)
.. |docker_plastid| image:: https://quay.io/repository/biocontainers/plastid/status
   :target: https://quay.io/repository/biocontainers/plastid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plastid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plastid/README.html

