:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellitac'
.. highlight: bash

cellitac
========

.. conda:recipe:: cellitac
   :replaces_section_title:
   :noindex:

   Cell type identification using Transcription factor Analysis and Chromatin accessibility

   :homepage: https://github.com/omicscodeathon/cellitac
   :license: MIT
   :recipe: /`cellitac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellitac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellitac/meta.yaml>`_

   


.. conda:package:: cellitac

   |downloads_cellitac| |docker_cellitac|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends bioconductor-celldex: 
   :depends bioconductor-ensdb.hsapiens.v75: 
   :depends bioconductor-singler: 
   :depends imbalanced-learn: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.9,<3.13``
   :depends r-base: ``>=4.3``
   :depends r-hdf5r: 
   :depends r-matrix: 
   :depends r-seurat: 
   :depends r-signac: 
   :depends rpy2: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends xgboost: 
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

      mamba install cellitac

   and update with::

      mamba update cellitac

  To create a new environment, run::

      mamba create --name myenvname cellitac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellitac:<tag>

   (see `cellitac/tags`_ for valid values for ``<tag>``)


.. |downloads_cellitac| image:: https://img.shields.io/conda/dn/bioconda/cellitac.svg?style=flat
   :target: https://anaconda.org/bioconda/cellitac
   :alt:   (downloads)
.. |docker_cellitac| image:: https://quay.io/repository/biocontainers/cellitac/status
   :target: https://quay.io/repository/biocontainers/cellitac
.. _`cellitac/tags`: https://quay.io/repository/biocontainers/cellitac?tab=tags


.. raw:: html

    <script>
        var package = "cellitac";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellitac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellitac/README.html