.. title:: Package Recipe 'qcumber'
.. highlight: bash


qcumber
=======

.. conda:recipe:: qcumber
   :replaces_section_title:

   Quality control\, quality trimming\, adapter removal and sequence content check of NGS data.

   :homepage: https://gitlab.com/RKIBioinformaticsPipelines/QCumber
   :license: LGPL3
   :recipe: /`qcumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber/meta.yaml>`_

   


.. conda:package:: qcumber

   |downloads_qcumber| |docker_qcumber|

   :versions: 2.0.4

   :depends: :conda:package:`bioconductor-savr`  :conda:package:`bitstring`  :conda:package:`bowtie2` 2.3.* :conda:package:`docopt`  :conda:package:`fastqc` 0.11.* :conda:package:`jinja2`  :conda:package:`kraken` 0.10.* :conda:package:`krona`  :conda:package:`matplotlib` 2.0.* :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 3.6.* :conda:package:`pyyaml` 3.12.* :conda:package:`r` 3.3.* :conda:package:`r-ggplot2` 2.2.* :conda:package:`r-quantreg`  :conda:package:`r-reshape2`  :conda:package:`r-stringi`  :conda:package:`samtools` 1.3.* :conda:package:`seaborn`  :conda:package:`setuptools`  :conda:package:`snakemake` 3.12.* :conda:package:`trimmomatic` 0.36.* :conda:package:`xmltodict`  

   :required~by: |required_by_qcumber|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qcumber

   and update with::

      conda update qcumber

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qcumber


.. |required_by_qcumber| conda:required_by:: qcumber
.. |downloads_qcumber| image:: https://img.shields.io/conda/dn/bioconda/qcumber.svg?style=flat
   :alt:   (downloads)
.. |docker_qcumber| image:: https://quay.io/repository/biocontainers/qcumber/status
   :target: https://quay.io/repository/biocontainers/qcumber







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcumber/README.html

