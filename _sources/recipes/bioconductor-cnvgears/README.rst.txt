:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvgears'
.. highlight: bash

bioconductor-cnvgears
=====================

.. conda:recipe:: bioconductor-cnvgears
   :replaces_section_title:
   :noindex:

   A Framework of Functions to Combine\, Analize and Interpret CNVs Calling Results

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CNVgears.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvgears <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgears>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgears/meta.yaml>`_

   This package contains a set of functions to perform several type of processing and analysis on CNVs calling pipelines\/algorithms results in an integrated manner and regardless of the raw data type \(SNPs array or NGS\). It provides functions to combine multiple CNV calling results into a single object\, filter them\, compute CNVRs \(CNV Regions\) and inheritance patterns\, detect genic load\, and more. The package is best suited for studies in human family\-based cohorts.


.. conda:package:: bioconductor-cnvgears

   |downloads_bioconductor-cnvgears| |docker_bioconductor-cnvgears|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-cnvgears

   and update with::

      mamba update bioconductor-cnvgears

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnvgears

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvgears:<tag>

   (see `bioconductor-cnvgears/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvgears| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgears.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvgears
   :alt:   (downloads)
.. |docker_bioconductor-cnvgears| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgears/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgears
.. _`bioconductor-cnvgears/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvgears?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvgears";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgears/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgears/README.html