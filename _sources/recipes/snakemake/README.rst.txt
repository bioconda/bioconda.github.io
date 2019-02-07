.. title:: Package Recipe 'snakemake'
.. highlight: bash


snakemake
=========

.. conda:recipe:: snakemake
   :replaces_section_title:

   Snakemake is a workflow management system that aims to reduce the complexity of creating workflows by providing a fast and comfortable execution environment\, together with a clean and modern specification language in python style. Snakemake workflows are essentially Python scripts extended by declarative code to define rules. Rules describe how to create output files from input files. This package provides the full installation including all optional dependencies.

   :homepage: https://snakemake.readthedocs.io
   :license: MIT
   :recipe: /`snakemake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

   


.. conda:package:: snakemake

   |downloads_snakemake| |docker_snakemake|

   :versions: 5.4.0, 5.3.1, 5.3.0, 5.2.4, 5.2.2, 5.2.1, 5.2.0, 5.1.5, 5.1.4, 5.1.3, 5.1.2, 5.1.1, 5.0.0, 4.8.1, 4.8.0, 4.7.0, 4.6.0, 4.5.1, 4.5.0, 4.4.0, 4.3.1, 4.3.0, 4.2.0, 4.1.0, 4.0.0, 3.13.3, 3.13.2, 3.13.0, 3.12.0, 3.11.2, 3.11.1, 3.11.0, 3.10.2, 3.10.1, 3.10.0, 3.9.1, 3.9.0, 3.8.2, 3.8.1, 3.8.0, 3.7.1, 3.7.0, 3.6.1, 3.6.0, 3.5.5, 3.5.4, 3.5.3, 3.5.2, 3.5.1, 3.4.2

   :depends: :conda:package:`aioeasywebdav`  :conda:package:`boto3`  :conda:package:`dropbox` >=7.2.1 :conda:package:`filechunkio` >=1.6 :conda:package:`ftputil` >=3.2 :conda:package:`google-cloud-storage`  :conda:package:`jinja2`  :conda:package:`jsonschema`  :conda:package:`networkx` >=2.0 :conda:package:`pandas`  :conda:package:`psutil`  :conda:package:`pygraphviz`  :conda:package:`pysftp` >=0.2.8 :conda:package:`python-irodsclient`  :conda:package:`snakemake-minimal` 5.4.0.* 

   :required~by: |required_by_snakemake|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake

   and update with::

      conda update snakemake

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snakemake


.. |required_by_snakemake| conda:required_by:: snakemake
.. |downloads_snakemake| image:: https://img.shields.io/conda/dn/bioconda/snakemake.svg?style=flat
   :alt:   (downloads)
.. |docker_snakemake| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake/README.html

