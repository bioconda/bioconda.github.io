:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustirr'
.. highlight: bash

bioconductor-clustirr
=====================

.. conda:recipe:: bioconductor-clustirr
   :replaces_section_title:
   :noindex:

   Clustering of immune receptor repertoires

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ClustIRR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-clustirr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr/meta.yaml>`_

   ClustIRR is a quantitative method for clustering of immune receptor repertoires \(IRRs\). The algorithm identifies groups of T or B cell receptors \(TCRs or BCRs\) with similar specificity by comparing their sequences. ClustIRR uses graphs to visualize the specificity structures of IRRs.


.. conda:package:: bioconductor-clustirr

   |downloads_bioconductor-clustirr| |docker_bioconductor-clustirr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-igraph: 
   :depends r-stringdist: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-clustirr

   and update with::

      mamba update bioconductor-clustirr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clustirr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustirr:<tag>

   (see `bioconductor-clustirr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustirr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustirr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustirr
   :alt:   (downloads)
.. |docker_bioconductor-clustirr| image:: https://quay.io/repository/biocontainers/bioconductor-clustirr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustirr
.. _`bioconductor-clustirr/tags`: https://quay.io/repository/biocontainers/bioconductor-clustirr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustirr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustirr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustirr/README.html