:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mams'
.. highlight: bash

r-mams
======

.. conda:recipe:: r-mams
   :replaces_section_title:
   :noindex:

   R package for Matrix and Analysis Metadata Standards.

   :homepage: https://github.com/single-cell-mams/rmams
   :documentation: https://single-cell-mams.github.io/rmams
   
   :license: MIT / MIT
   :recipe: /`r-mams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mams/meta.yaml>`_

   


.. conda:package:: r-mams

   |downloads_r-mams| |docker_r-mams|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-dropletutils: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-scater: 
   :depends bioconductor-scran: 
   :depends bioconductor-singlecellexperiment: 
   :depends r-anndata: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-jsonlite: 
   :depends r-r.methodss3: 
   :depends r-rmdformats: 
   :depends r-seurat: 
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

      mamba install r-mams

   and update with::

      mamba update r-mams

  To create a new environment, run::

      mamba create --name myenvname r-mams

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mams:<tag>

   (see `r-mams/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mams| image:: https://img.shields.io/conda/dn/bioconda/r-mams.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mams
   :alt:   (downloads)
.. |docker_r-mams| image:: https://quay.io/repository/biocontainers/r-mams/status
   :target: https://quay.io/repository/biocontainers/r-mams
.. _`r-mams/tags`: https://quay.io/repository/biocontainers/r-mams?tab=tags


.. raw:: html

    <script>
        var package = "r-mams";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mams/README.html