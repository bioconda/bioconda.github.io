.. title:: Package Recipe 'cnvkit'
.. highlight: bash


cnvkit
======

.. conda:recipe:: cnvkit
   :replaces_section_title:

   Copy number variant detection from high\-throughput sequencing

   :homepage: https://github.com/etal/cnvkit
   :license: Apache License 2.0
   :recipe: /`cnvkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit/meta.yaml>`_
   :links: biotools: :biotools:`cnvkit`, doi: :doi:`10.1371/journal.pcbi.1004873`

   


.. conda:package:: cnvkit

   |downloads_cnvkit| |docker_cnvkit|

   :versions: 0.9.6a0, 0.9.5, 0.9.4a0, 0.9.3, 0.9.2, 0.9.2a0, 0.9.1, 0.9.1a0, 0.9.0, 0.8.6a0, 0.8.5, 0.8.5dev0, 0.8.4, 0.8.3a0, 0.8.2, 0.8.1, 0.8.0, 0.7.11, 0.7.10, 0.7.9, 0.7.8, 0.7.7, 0.7.6, 0.7.5, 0.7.4, 0.7.3

   :depends: :conda:package:`bioconductor-dnacopy`  :conda:package:`biopython` >=1.62 :conda:package:`future` >=0.15.2 :conda:package:`futures` >=3.0 :conda:package:`matplotlib` >=1.3.1 :conda:package:`numpy` >=1.9 :conda:package:`pandas` >=0.18.1 :conda:package:`pyfaidx` >=0.4.7 :conda:package:`pysam` >=0.10.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-dateutil` >=2.5.0 :conda:package:`r-base` >=3.4.1 :conda:package:`r-cghflasso`  :conda:package:`reportlab` >=3.0 :conda:package:`scipy` >=0.15.0 

   :required~by: |required_by_cnvkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnvkit

   and update with::

      conda update cnvkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cnvkit


.. |required_by_cnvkit| conda:required_by:: cnvkit
.. |downloads_cnvkit| image:: https://img.shields.io/conda/dn/bioconda/cnvkit.svg?style=flat
   :alt:   (downloads)
.. |docker_cnvkit| image:: https://quay.io/repository/biocontainers/cnvkit/status
   :target: https://quay.io/repository/biocontainers/cnvkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvkit/README.html

