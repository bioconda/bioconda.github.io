:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chetah'
.. highlight: bash

bioconductor-chetah
===================

.. conda:recipe:: bioconductor-chetah
   :replaces_section_title:
   :noindex:

   Fast and accurate scRNA\-seq cell type identification

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CHETAH.html
   :license: file LICENSE
   :recipe: /`bioconductor-chetah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chetah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chetah/meta.yaml>`_

   CHETAH \(CHaracterization of cEll Types Aided by Hierarchical classification\) is an accurate\, selective and fast scRNA\-seq classifier. Classification is guided by a reference dataset\, preferentially also a scRNA\-seq dataset. By hierarchical clustering of the reference data\, CHETAH creates a classification tree that enables a step\-wise\, top\-to\-bottom classification. Using a novel stopping rule\, CHETAH classifies the input cells to the cell types of the references and to \"intermediate types\"\: more general classifications that ended in an intermediate node of the tree.


.. conda:package:: bioconductor-chetah

   |downloads_bioconductor-chetah| |docker_bioconductor-chetah|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.4-0``

      

   
   :depends bioconductor-biodist: ``>=1.72.0,<1.73.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corrplot: 
   :depends r-cowplot: 
   :depends r-dendextend: 
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-shiny: 
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

      mamba install bioconductor-chetah

   and update with::

      mamba update bioconductor-chetah

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chetah

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chetah:<tag>

   (see `bioconductor-chetah/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chetah| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chetah.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chetah
   :alt:   (downloads)
.. |docker_bioconductor-chetah| image:: https://quay.io/repository/biocontainers/bioconductor-chetah/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chetah
.. _`bioconductor-chetah/tags`: https://quay.io/repository/biocontainers/bioconductor-chetah?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chetah";
        var versions = ["1.16.0","1.14.0","1.9.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chetah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chetah/README.html