:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-minimal'
.. highlight: bash

snakemake-minimal
=================

.. conda:recipe:: snakemake-minimal
   :replaces_section_title:

   Snakemake is a workflow management system that aims to reduce the complexity of creating workflows by providing a fast and comfortable execution environment\, together with a clean and modern specification language in python style. Snakemake workflows are essentially Python scripts extended by declarative code to define rules. Rules describe how to create output files from input files. This package provides the core snakemake functionility. For features like reports and remote files\, check out the snakemake package which provides all optional dependencies.

   :homepage: https://snakemake.readthedocs.io
   :license: MIT
   :recipe: /`snakemake-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-minimal/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

   


.. conda:package:: snakemake-minimal

   |downloads_snakemake-minimal| |docker_snakemake-minimal|

   :versions: 5.4.1-0, 5.4.0-0, 5.3.1-0, 5.3.0-2, 5.3.0-1, 5.3.0-0, 5.2.4-0, 5.2.2-1, 5.2.2-0, 5.2.1-0
   
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

      docker pull quay.io/repository/biocontainers/snakemake-minimal:<tag>

   (see `snakemake-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-minimal| image:: https://img.shields.io/conda/dn/bioconda/snakemake-minimal.svg?style=flat
   :alt:   (downloads)
.. |docker_snakemake-minimal| image:: https://quay.io/repository/biocontainers/snakemake-minimal/status
   :target: https://quay.io/repository/biocontainers/snakemake-minimal
.. _`snakemake-minimal/tags`: https://quay.io/repository/biocontainers/snakemake-minimal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-minimal/README.html