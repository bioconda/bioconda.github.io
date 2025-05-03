:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyani-plus'
.. highlight: bash

pyani-plus
==========

.. conda:recipe:: pyani-plus
   :replaces_section_title:
   :noindex:

   Whole\-genome classification of microbes using Average Nucleotide Identity and similar methods.

   :homepage: https://github.com/pyani-plus/pyani-plus
   :documentation: https://pyani-plus.github.io/pyani-plus-docs
   
   :license: MIT / MIT
   :recipe: /`pyani-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani-plus/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15005805`

   


.. conda:package:: pyani-plus

   |downloads_pyani-plus| |docker_pyani-plus|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends blast: 
   :depends fastani: 
   :depends intervaltree: 
   :depends matplotlib-base: ``>=3.10.0``
   :depends mummer: ``3.23.*``
   :depends networkx: ``>=3.4.2``
   :depends pandas: 
   :depends python: ``>=3.11``
   :depends rich: 
   :depends seaborn-base: ``>=0.13.2``
   :depends snakemake-executor-plugin-slurm: 
   :depends snakemake-minimal: ``>=8.24``
   :depends sourmash: 
   :depends sourmash_plugin_branchwater: ``>=0.9.11``
   :depends sqlalchemy: ``>=2.0``
   :depends typer: ``>=0.12``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pyani-plus

   and update with::

      mamba update pyani-plus

  To create a new environment, run::

      mamba create --name myenvname pyani-plus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyani-plus:<tag>

   (see `pyani-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_pyani-plus| image:: https://img.shields.io/conda/dn/bioconda/pyani-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/pyani-plus
   :alt:   (downloads)
.. |docker_pyani-plus| image:: https://quay.io/repository/biocontainers/pyani-plus/status
   :target: https://quay.io/repository/biocontainers/pyani-plus
.. _`pyani-plus/tags`: https://quay.io/repository/biocontainers/pyani-plus?tab=tags


.. raw:: html

    <script>
        var package = "pyani-plus";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyani-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyani-plus/README.html