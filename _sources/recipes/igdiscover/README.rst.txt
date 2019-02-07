.. title:: Package Recipe 'igdiscover'
.. highlight: bash


igdiscover
==========

.. conda:recipe:: igdiscover
   :replaces_section_title:

   Analyze antibody repertoires and discover new V genes

   :homepage: https://igdiscover.se/
   :license: MIT
   :recipe: /`igdiscover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover/meta.yaml>`_
   :links: biotools: :biotools:`igdiscover`, doi: :doi:`10.1038/ncomms13642`

   


.. conda:package:: igdiscover

   |downloads_igdiscover| |docker_igdiscover|

   :versions: 0.11, 0.10, 0.9, 0.8.0, 0.7.0, 0.6.0, 0.5, 0.4, 0.3

   :depends: :conda:package:`cutadapt` 1.18 :conda:package:`flash` 1.2.* :conda:package:`igblast` 1.7.* :conda:package:`matplotlib-base` 3.0.* :conda:package:`muscle` 3.8.* :conda:package:`numpy` >=1.15 :conda:package:`pandas` 0.23.* :conda:package:`pear` 0.9.6.* :conda:package:`pip`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`ruamel.yaml` 0.15.* :conda:package:`scipy` >=1.1 :conda:package:`seaborn` 0.9.* :conda:package:`snakemake-minimal` 5.3.* :conda:package:`sqt` 0.8.* :conda:package:`xopen` >=0.3.5 

   :required~by: |required_by_igdiscover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igdiscover

   and update with::

      conda update igdiscover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/igdiscover


.. |required_by_igdiscover| conda:required_by:: igdiscover
.. |downloads_igdiscover| image:: https://img.shields.io/conda/dn/bioconda/igdiscover.svg?style=flat
   :alt:   (downloads)
.. |docker_igdiscover| image:: https://quay.io/repository/biocontainers/igdiscover/status
   :target: https://quay.io/repository/biocontainers/igdiscover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdiscover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdiscover/README.html

