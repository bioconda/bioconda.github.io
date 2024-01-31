:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellqc'
.. highlight: bash

cellqc
======

.. conda:recipe:: cellqc
   :replaces_section_title:
   :noindex:

   Cellqc standardizes the qualiy control of single\-cell RNA\-Seq \(scRNA\) data to render clean feature count matrices.

   :homepage: https://github.com/lijinbio/cellqc
   :license: MIT / MIT
   :recipe: /`cellqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc/meta.yaml>`_

   


.. conda:package:: cellqc

   |downloads_cellqc| |docker_cellqc|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends anndata: ``0.7.8.*``
   :depends bioconductor-dropletutils: 
   :depends click: 
   :depends graphviz: ``>=9.0.0,<10.0a0``
   :depends numpy: 
   :depends pygraphviz: 
   :depends python: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-harmony: 
   :depends r-remotes: 
   :depends r-scpred: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-soupx: ``>=1.6.2``
   :depends scanpy: ``>=1.9.1``
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cellqc

   and update with::

      mamba update cellqc

  To create a new environment, run::

      mamba create --name myenvname cellqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellqc:<tag>

   (see `cellqc/tags`_ for valid values for ``<tag>``)


.. |downloads_cellqc| image:: https://img.shields.io/conda/dn/bioconda/cellqc.svg?style=flat
   :target: https://anaconda.org/bioconda/cellqc
   :alt:   (downloads)
.. |docker_cellqc| image:: https://quay.io/repository/biocontainers/cellqc/status
   :target: https://quay.io/repository/biocontainers/cellqc
.. _`cellqc/tags`: https://quay.io/repository/biocontainers/cellqc?tab=tags


.. raw:: html

    <script>
        var package = "cellqc";
        var versions = ["0.0.7","0.0.6","0.0.6","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellqc/README.html