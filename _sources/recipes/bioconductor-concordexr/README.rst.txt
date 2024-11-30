:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-concordexr'
.. highlight: bash

bioconductor-concordexr
=======================

.. conda:recipe:: bioconductor-concordexr
   :replaces_section_title:
   :noindex:

   Calculate the concordex coefficient

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/concordexR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-concordexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr/meta.yaml>`_

   Many analysis workflows include approximation of a nearest neighbors graph followed by clustering of the graph structure. The concordex coefficient estimates the concordance between the graph and clustering results. The package \'concordexR\' is an R implementation of the original concordex Python\-based command line tool.


.. conda:package:: bioconductor-concordexr

   |downloads_bioconductor-concordexr| |docker_bioconductor-concordexr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-rlang: 
   :depends r-scales: 
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

      mamba install bioconductor-concordexr

   and update with::

      mamba update bioconductor-concordexr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-concordexr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-concordexr:<tag>

   (see `bioconductor-concordexr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-concordexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-concordexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-concordexr
   :alt:   (downloads)
.. |docker_bioconductor-concordexr| image:: https://quay.io/repository/biocontainers/bioconductor-concordexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-concordexr
.. _`bioconductor-concordexr/tags`: https://quay.io/repository/biocontainers/bioconductor-concordexr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-concordexr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-concordexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-concordexr/README.html