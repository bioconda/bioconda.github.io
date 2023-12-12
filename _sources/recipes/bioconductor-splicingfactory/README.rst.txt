:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicingfactory'
.. highlight: bash

bioconductor-splicingfactory
============================

.. conda:recipe:: bioconductor-splicingfactory
   :replaces_section_title:
   :noindex:

   Splicing Diversity Analysis for Transcriptome Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SplicingFactory.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-splicingfactory <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory/meta.yaml>`_

   The SplicingFactory R package uses transcript\-level expression values to analyze splicing diversity based on various statistical measures\, like Shannon entropy or the Gini index. These measures can quantify transcript isoform diversity within samples or between conditions. Additionally\, the package analyzes the isoform diversity data\, looking for significant changes between conditions.


.. conda:package:: bioconductor-splicingfactory

   |downloads_bioconductor-splicingfactory| |docker_bioconductor-splicingfactory|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-splicingfactory

   and update with::

      mamba update bioconductor-splicingfactory

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splicingfactory

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicingfactory:<tag>

   (see `bioconductor-splicingfactory/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicingfactory| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicingfactory.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicingfactory
   :alt:   (downloads)
.. |docker_bioconductor-splicingfactory| image:: https://quay.io/repository/biocontainers/bioconductor-splicingfactory/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicingfactory
.. _`bioconductor-splicingfactory/tags`: https://quay.io/repository/biocontainers/bioconductor-splicingfactory?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splicingfactory";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html