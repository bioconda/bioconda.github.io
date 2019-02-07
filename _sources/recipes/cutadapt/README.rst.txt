.. title:: Package Recipe 'cutadapt'
.. highlight: bash


cutadapt
========

.. conda:recipe:: cutadapt
   :replaces_section_title:

   trim adapters from high\-throughput sequencing reads

   :homepage: https://cutadapt.readthedocs.io/
   :license: MIT License
   :recipe: /`cutadapt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutadapt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutadapt/meta.yaml>`_
   :links: biotools: :biotools:`cutadapt`, doi: :doi:`10.14806/ej.17.1.200`

   


.. conda:package:: cutadapt

   |downloads_cutadapt| |docker_cutadapt|

   :versions: 1.18, 1.17, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.10, 1.9.1, 1.8.3, 1.8.1

   :depends: :conda:package:`pigz`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`xopen` >=0.3.2 

   :required~by: |required_by_cutadapt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cutadapt

   and update with::

      conda update cutadapt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cutadapt


.. |required_by_cutadapt| conda:required_by:: cutadapt
.. |downloads_cutadapt| image:: https://img.shields.io/conda/dn/bioconda/cutadapt.svg?style=flat
   :alt:   (downloads)
.. |docker_cutadapt| image:: https://quay.io/repository/biocontainers/cutadapt/status
   :target: https://quay.io/repository/biocontainers/cutadapt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutadapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutadapt/README.html

