:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanometa-live'
.. highlight: bash

nanometa-live
=============

.. conda:recipe:: nanometa-live
   :replaces_section_title:
   :noindex:

   Workflow and GUI for real\-time species classification and pathogen characterization of nanopore sequence reads.

   :homepage: https://github.com/FOI-Bioinformatics/nanometa_live
   :documentation: https://github.com/FOI-Bioinformatics/nanometa_live/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanometa-live <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanometa-live>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanometa-live/meta.yaml>`_

   


.. conda:package:: nanometa-live

   |downloads_nanometa-live| |docker_nanometa-live|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.13.0``
   :depends dash: ``>=2.8.1``
   :depends dash-bootstrap-components: ``>=1.3.1``
   :depends dash-daq: ``>=0.5.0``
   :depends fastp: ``>=0.23.2``
   :depends gzip: ``>=1.10``
   :depends kraken2: ``>=2.1.2``
   :depends ncbi-datasets-cli: ``>=15.20.0``
   :depends numpy: ``>=1.24.1``
   :depends pandas: ``>=1.5.3``
   :depends plotly: ``>=5.13.0``
   :depends pytest: ``>=7.2.1``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=6.0``
   :depends ruamel.yaml: ``>=0.17.32``
   :depends snakemake-minimal: ``>=7.20.0``
   :depends tqdm: ``>=4.62.3``
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

      mamba install nanometa-live

   and update with::

      mamba update nanometa-live

  To create a new environment, run::

      mamba create --name myenvname nanometa-live

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanometa-live:<tag>

   (see `nanometa-live/tags`_ for valid values for ``<tag>``)


.. |downloads_nanometa-live| image:: https://img.shields.io/conda/dn/bioconda/nanometa-live.svg?style=flat
   :target: https://anaconda.org/bioconda/nanometa-live
   :alt:   (downloads)
.. |docker_nanometa-live| image:: https://quay.io/repository/biocontainers/nanometa-live/status
   :target: https://quay.io/repository/biocontainers/nanometa-live
.. _`nanometa-live/tags`: https://quay.io/repository/biocontainers/nanometa-live?tab=tags


.. raw:: html

    <script>
        var package = "nanometa-live";
        var versions = ["0.4.3","0.4.2","0.4.1","0.4.0","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanometa-live/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanometa-live/README.html