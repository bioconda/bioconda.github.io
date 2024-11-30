:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spqn'
.. highlight: bash

bioconductor-spqn
=================

.. conda:recipe:: bioconductor-spqn
   :replaces_section_title:
   :noindex:

   Spatial quantile normalization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/spqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn/meta.yaml>`_

   The spqn package implements spatial quantile normalization \(SpQN\). This method was developed to remove a mean\-correlation relationship in correlation matrices built from gene expression data. It can serve as pre\-processing step prior to a co\-expression analysis.


.. conda:package:: bioconductor-spqn

   |downloads_bioconductor-spqn| |docker_bioconductor-spqn|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-spqn

   and update with::

      mamba update bioconductor-spqn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spqn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spqn:<tag>

   (see `bioconductor-spqn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spqn
   :alt:   (downloads)
.. |docker_bioconductor-spqn| image:: https://quay.io/repository/biocontainers/bioconductor-spqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spqn
.. _`bioconductor-spqn/tags`: https://quay.io/repository/biocontainers/bioconductor-spqn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spqn";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spqn/README.html