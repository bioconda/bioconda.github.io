:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'switchtfi'
.. highlight: bash

switchtfi
=========

.. conda:recipe:: switchtfi
   :replaces_section_title:
   :noindex:

   Implementation of the SwitchTFI method as presented in\: https\:\/\/doi.org\/10.1101\/2025.01.20.633856

   :homepage: https://github.com/bionetslab/SwitchTFI
   :documentation: https://github.com/bionetslab/SwitchTFI#readme
   
   :license: GPL-3.0-only
   :recipe: /`switchtfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/switchtfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/switchtfi/meta.yaml>`_

   


.. conda:package:: switchtfi

   |downloads_switchtfi| |docker_switchtfi|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends anndata: ``>=0.8``
   :depends graph-tool: ``>=2.45``
   :depends leidenalg: ``>=0.10``
   :depends magic-impute: ``>=3.0.0``
   :depends matplotlib-base: ``>=3.5``
   :depends networkx: ``>=3.0``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=2.1``
   :depends pillow: ``>=9.0``
   :depends pymupdf: ``>=1.20``
   :depends python: ``>=3.9,<3.13``
   :depends python-igraph: ``>=0.10``
   :depends scanpy: ``>=1.9``
   :depends scikit-learn: ``>=1.5``
   :depends scipy: ``>=1.10``
   :depends seaborn: ``>=0.12``
   :depends statsmodels: ``>=0.13``
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

      mamba install switchtfi

   and update with::

      mamba update switchtfi

  To create a new environment, run::

      mamba create --name myenvname switchtfi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/switchtfi:<tag>

   (see `switchtfi/tags`_ for valid values for ``<tag>``)


.. |downloads_switchtfi| image:: https://img.shields.io/conda/dn/bioconda/switchtfi.svg?style=flat
   :target: https://anaconda.org/bioconda/switchtfi
   :alt:   (downloads)
.. |docker_switchtfi| image:: https://quay.io/repository/biocontainers/switchtfi/status
   :target: https://quay.io/repository/biocontainers/switchtfi
.. _`switchtfi/tags`: https://quay.io/repository/biocontainers/switchtfi?tab=tags


.. raw:: html

    <script>
        var package = "switchtfi";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/switchtfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/switchtfi/README.html