:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dune'
.. highlight: bash

bioconductor-dune
=================

.. conda:recipe:: bioconductor-dune
   :replaces_section_title:
   :noindex:

   Improving replicability in single\-cell RNA\-Seq cell type discovery

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Dune.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dune/meta.yaml>`_

   Given a set of clustering labels\, Dune merges pairs of clusters to increase mean ARI between labels\, improving replicability.


.. conda:package:: bioconductor-dune

   |downloads_bioconductor-dune| |docker_bioconductor-dune|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-aricode: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-gganimate: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dune

   and update with::

      mamba update bioconductor-dune

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dune

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dune:<tag>

   (see `bioconductor-dune/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dune| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dune.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dune
   :alt:   (downloads)
.. |docker_bioconductor-dune| image:: https://quay.io/repository/biocontainers/bioconductor-dune/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dune
.. _`bioconductor-dune/tags`: https://quay.io/repository/biocontainers/bioconductor-dune?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dune";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dune/README.html