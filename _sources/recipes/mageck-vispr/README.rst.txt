:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mageck-vispr'
.. highlight: bash

mageck-vispr
============

.. conda:recipe:: mageck-vispr
   :replaces_section_title:

   MAGeCK\-VISPR is a comprehensive quality control\, analysis and visualization workflow for CRISPR\/Cas9 screens based on MAGeCK\, VISPR\, Snakemake\, FastQC and cutadapt.

   :homepage: https://bitbucket.org/liulab/mageck-vispr
   :license: MIT License
   :recipe: /`mageck-vispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr/meta.yaml>`_

   


.. conda:package:: mageck-vispr

   |downloads_mageck-vispr| |docker_mageck-vispr|

   :versions: 0.5.4-1, 0.5.4-0, 0.5.3-0, 0.5.2-0, 0.4.7-0, 0.4.6-0, 0.4.5-0
   
   :depends bioconductor-sva: >=3.15.0
   
   :depends cutadapt: >=1.9.1
   
   :depends fastqc: >=0.11.4
   
   :depends jinja2: >=2.8
   
   :depends mageck: >=0.5.3
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends rpy2: >=2.9.4
   
   :depends setuptools: 
   
   :depends snakemake: >=3.6.0
   
   :depends vispr: >=0.4.4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mageck-vispr

   and update with::

      conda update mageck-vispr

   or use the docker container::

      docker pull quay.io/biocontainers/mageck-vispr:<tag>

   (see `mageck-vispr/tags`_ for valid values for ``<tag>``)


.. |downloads_mageck-vispr| image:: https://img.shields.io/conda/dn/bioconda/mageck-vispr.svg?style=flat
   :alt:   (downloads)
.. |docker_mageck-vispr| image:: https://quay.io/repository/biocontainers/mageck-vispr/status
   :target: https://quay.io/repository/biocontainers/mageck-vispr
.. _`mageck-vispr/tags`: https://quay.io/repository/biocontainers/mageck-vispr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck-vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck-vispr/README.html