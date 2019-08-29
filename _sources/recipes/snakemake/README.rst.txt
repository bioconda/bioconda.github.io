:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake'
.. highlight: bash

snakemake
=========

.. conda:recipe:: snakemake
   :replaces_section_title:

   A popular workflow management system aiming at full in\-silico reproducibility.

   :homepage: https://snakemake.readthedocs.io
   :license: MIT
   :recipe: /`snakemake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

   Snakemake is a workflow management system that aims to reduce the complexity of creating 
   workflows by providing a fast and comfortable execution environment\, together with a clean 
   and modern specification language in python style. Snakemake workflows are essentially Python 
   scripts extended by declarative code to define rules. Rules describe how to create output 
   files from input files.



.. conda:package:: snakemake

   |downloads_snakemake| |docker_snakemake|

   :versions: 5.5.4-2, 5.5.4-1, 5.5.4-0, 5.5.3-0, 5.5.2-0, 5.5.1-0, 5.5.0-0, 5.4.5-0, 5.4.4-0, 5.4.3-0, 5.4.2-0, 5.4.1-0, 5.4.0-0, 5.3.1-0, 5.3.0-2, 5.3.0-1, 5.2.4-1, 5.2.2-1, 5.2.1-0, 5.2.0-0, 5.1.5-0, 5.1.4-2, 5.1.4-0, 5.1.3-0, 5.1.2-0, 5.1.1-0, 5.0.0-0, 4.8.1-0, 4.8.0-0, 4.7.0-0, 4.6.0-0, 4.5.1-0, 4.5.0-0, 4.4.0-0, 4.3.1-0, 4.3.0-0, 4.2.0-0, 4.1.0-0, 4.0.0-1, 4.0.0-0, 3.13.3-0, 3.13.2-0, 3.13.0-1, 3.12.0-1, 3.11.2-1, 3.11.2-0, 3.11.1-1, 3.11.1-0, 3.11.0-1, 3.10.2-1, 3.10.1-1, 3.10.1-0, 3.10.0-0, 3.9.1-0, 3.9.0-0, 3.8.2-0, 3.8.1-0, 3.8.0-0, 3.7.1-0, 3.7.0-0, 3.6.1-0, 3.6.0-0, 3.5.5-1, 3.5.4-1, 3.5.3-1, 3.5.2-1, 3.5.1-1, 3.4.2-1
   
   :depends aioeasywebdav: 
   :depends boto3: 
   :depends dropbox: >=7.2.1
   :depends filechunkio: >=1.6
   :depends ftputil: >=3.2
   :depends google-cloud-storage: 
   :depends imagemagick: >=7.0
   :depends jinja2: 
   :depends jsonschema: 
   :depends networkx: >=2.0
   :depends pandas: 
   :depends psutil: 
   :depends pygments: 
   :depends pygraphviz: 
   :depends pysftp: >=0.2.8
   :depends python-irodsclient: 
   :depends snakemake-minimal: 5.5.4.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake

   and update with::

      conda update snakemake

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake:<tag>

   (see `snakemake/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake| image:: https://img.shields.io/conda/dn/bioconda/snakemake.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake
   :alt:   (downloads)
.. |docker_snakemake| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake/tags`: https://quay.io/repository/biocontainers/snakemake?tab=tags



.. conda:package:: snakemake-minimal

   |downloads_snakemake-minimal| |docker_snakemake-minimal|

   :versions: 5.5.4-2, 5.5.4-1, 5.5.4-0, 5.5.3-0, 5.5.2-0, 5.5.1-0, 5.5.0-0, 5.4.5-0, 5.4.4-1, 5.4.3-1, 5.4.3-0, 5.4.2-1, 5.4.2-0, 5.4.1-0, 5.4.0-0, 5.3.1-0, 5.3.0-2, 5.3.0-1, 5.3.0-0, 5.2.4-0, 5.2.2-1, 5.2.2-0, 5.2.1-0
   
   :depends appdirs: 
   :depends configargparse: 
   :depends datrie: 
   :depends docutils: 
   :depends gitpython: 
   :depends jsonschema: 
   :depends psutil: 
   :depends python: >=3.5
   :depends pyyaml: 
   :depends ratelimiter: 
   :depends requests: >=2.8.1
   :depends setuptools: 
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake-minimal

   and update with::

      conda update snakemake-minimal

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake-minimal:<tag>

   (see `snakemake-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-minimal| image:: https://img.shields.io/conda/dn/bioconda/snakemake-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-minimal
   :alt:   (downloads)
.. |docker_snakemake-minimal| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake-minimal/tags`: https://quay.io/repository/biocontainers/snakemake-minimal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake/README.html