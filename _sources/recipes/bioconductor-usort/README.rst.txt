:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-usort'
.. highlight: bash

bioconductor-usort
==================

.. conda:recipe:: bioconductor-usort
   :replaces_section_title:
   :noindex:

   uSORT\: A self\-refining ordering pipeline for gene selection

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/uSORT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-usort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-usort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-usort/meta.yaml>`_

   This package is designed to uncover the intrinsic cell progression path from single\-cell RNA\-seq data. It incorporates data pre\-processing\, preliminary PCA gene selection\, preliminary cell ordering\, feature selection\, refined cell ordering\, and post\-analysis interpretation and visualization.


.. conda:package:: bioconductor-usort

   |downloads_bioconductor-usort| |docker_bioconductor-usort|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-monocle: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-fpc: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rann: 
   :depends r-rspectra: 
   :depends r-vgam: 
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

      mamba install bioconductor-usort

   and update with::

      mamba update bioconductor-usort

  To create a new environment, run::

      mamba create --name myenvname bioconductor-usort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-usort:<tag>

   (see `bioconductor-usort/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-usort| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-usort.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-usort
   :alt:   (downloads)
.. |docker_bioconductor-usort| image:: https://quay.io/repository/biocontainers/bioconductor-usort/status
   :target: https://quay.io/repository/biocontainers/bioconductor-usort
.. _`bioconductor-usort/tags`: https://quay.io/repository/biocontainers/bioconductor-usort?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-usort";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-usort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-usort/README.html