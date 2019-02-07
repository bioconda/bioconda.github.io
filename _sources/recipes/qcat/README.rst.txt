.. title:: Package Recipe 'qcat'
.. highlight: bash


qcat
====

.. conda:recipe:: qcat
   :replaces_section_title:

   Qcat is Python command\-line tool for demultiplexing Oxford Nanopore reads from FASTQ files.

   :homepage: https://github.com/nanoporetech/qcat
   :license: Mozilla Public License Version 2.0
   :recipe: /`qcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat/meta.yaml>`_

   


.. conda:package:: qcat

   |downloads_qcat| |docker_qcat|

   :versions: 1.0.1, 1.0.0

   :depends: :conda:package:`biopython`  :conda:package:`mappy`  :conda:package:`pandas`  :conda:package:`parasail-python`  :conda:package:`pysam`  :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`six`  

   :required~by: |required_by_qcat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qcat

   and update with::

      conda update qcat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qcat


.. |required_by_qcat| conda:required_by:: qcat
.. |downloads_qcat| image:: https://img.shields.io/conda/dn/bioconda/qcat.svg?style=flat
   :alt:   (downloads)
.. |docker_qcat| image:: https://quay.io/repository/biocontainers/qcat/status
   :target: https://quay.io/repository/biocontainers/qcat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcat/README.html

