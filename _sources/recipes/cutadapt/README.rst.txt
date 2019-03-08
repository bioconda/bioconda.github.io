:orphan:  .. only available via index, not via toctree

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

   :versions: 2.0-0, 1.18-1, 1.18-0, 1.17-0, 1.16-2, 1.16-1, 1.16-0, 1.15-0, 1.14-0, 1.13-0, 1.12-1, 1.12-0, 1.11-0, 1.10-0, 1.9.1-0, 1.8.3-0, 1.8.1-0
   
   :depends dnaio: >=0.3
   
   :depends pigz: 
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends xopen: >=0.5.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cutadapt

   and update with::

      conda update cutadapt

   or use the docker container::

      docker pull quay.io/biocontainers/cutadapt:<tag>

   (see `cutadapt/tags`_ for valid values for ``<tag>``)


.. |downloads_cutadapt| image:: https://img.shields.io/conda/dn/bioconda/cutadapt.svg?style=flat
   :alt:   (downloads)
.. |docker_cutadapt| image:: https://quay.io/repository/biocontainers/cutadapt/status
   :target: https://quay.io/repository/biocontainers/cutadapt
.. _`cutadapt/tags`: https://quay.io/repository/biocontainers/cutadapt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutadapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutadapt/README.html