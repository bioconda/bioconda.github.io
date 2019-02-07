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

   :versions: 0.5.4, 0.5.3, 0.5.2, 0.4.7, 0.4.6, 0.4.5

   :depends: :conda:package:`bioconductor-sva` >=3.15.0 :conda:package:`cutadapt` >=1.9.1 :conda:package:`fastqc` >=0.11.4 :conda:package:`jinja2` >=2.8 :conda:package:`mageck` >=0.5.3 :conda:package:`python` 3.5* :conda:package:`rpy2` >=0.7.4 :conda:package:`setuptools`  :conda:package:`snakemake` >=3.6.0 :conda:package:`vispr` >=0.4.4 

   :required~by: |required_by_mageck-vispr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mageck-vispr

   and update with::

      conda update mageck-vispr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mageck-vispr


.. |required_by_mageck-vispr| conda:required_by:: mageck-vispr
.. |downloads_mageck-vispr| image:: https://img.shields.io/conda/dn/bioconda/mageck-vispr.svg?style=flat
   :alt:   (downloads)
.. |docker_mageck-vispr| image:: https://quay.io/repository/biocontainers/mageck-vispr/status
   :target: https://quay.io/repository/biocontainers/mageck-vispr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck-vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck-vispr/README.html

