:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratatoskr'
.. highlight: bash

ratatoskr
=========

.. conda:recipe:: ratatoskr
   :replaces_section_title:
   :noindex:

   Tool for collecting and downloading taxonomic type strain data.

   :homepage: https://github.com/Fabian-Bastiaanssen/Ratatoskr
   :license: MIT
   :recipe: /`ratatoskr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatoskr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatoskr/meta.yaml>`_

   


.. conda:package:: ratatoskr

   |downloads_ratatoskr| |docker_ratatoskr|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends async-dsmz: ``>=2025.0.5``
   :depends bacdive: ``1.0.0``
   :depends biopython: ``>=1.86``
   :depends loguru: ``>=0.7.2``
   :depends lpsn: ``1.0.0``
   :depends ncbi-datasets-cli: ``>=18.10.2``
   :depends polars: ``>=1.32.2``
   :depends pyarrow: ``>=13.0.0``
   :depends python: ``>=3.12``
   :depends rich-click: ``>=1.8.8``
   :depends tqdm: ``>=4.66.1``
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

      mamba install ratatoskr

   and update with::

      mamba update ratatoskr

  To create a new environment, run::

      mamba create --name myenvname ratatoskr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ratatoskr:<tag>

   (see `ratatoskr/tags`_ for valid values for ``<tag>``)


.. |downloads_ratatoskr| image:: https://img.shields.io/conda/dn/bioconda/ratatoskr.svg?style=flat
   :target: https://anaconda.org/bioconda/ratatoskr
   :alt:   (downloads)
.. |docker_ratatoskr| image:: https://quay.io/repository/biocontainers/ratatoskr/status
   :target: https://quay.io/repository/biocontainers/ratatoskr
.. _`ratatoskr/tags`: https://quay.io/repository/biocontainers/ratatoskr?tab=tags


.. raw:: html

    <script>
        var package = "ratatoskr";
        var versions = ["1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratatoskr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratatoskr/README.html