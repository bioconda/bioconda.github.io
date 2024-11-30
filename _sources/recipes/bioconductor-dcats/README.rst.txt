:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcats'
.. highlight: bash

bioconductor-dcats
==================

.. conda:recipe:: bioconductor-dcats
   :replaces_section_title:
   :noindex:

   Differential Composition Analysis Transformed by a Similarity matrix

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DCATS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dcats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcats/meta.yaml>`_

   Methods to detect the differential composition abundances between conditions in singel\-cell RNA\-seq experiments\, with or without replicates. It aims to correct bias introduced by missclaisification and enable controlling of confounding covariates. To avoid the influence of proportion change from big cell types\, DCATS can use either total cell number or specific reference group as normalization term.


.. conda:package:: bioconductor-dcats

   |downloads_bioconductor-dcats| |docker_bioconductor-dcats|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-aod: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-matrixstats: 
   :depends r-mcmcpack: 
   :depends r-robustbase: 
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

      mamba install bioconductor-dcats

   and update with::

      mamba update bioconductor-dcats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dcats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dcats:<tag>

   (see `bioconductor-dcats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dcats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcats
   :alt:   (downloads)
.. |docker_bioconductor-dcats| image:: https://quay.io/repository/biocontainers/bioconductor-dcats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcats
.. _`bioconductor-dcats/tags`: https://quay.io/repository/biocontainers/bioconductor-dcats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcats";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcats/README.html