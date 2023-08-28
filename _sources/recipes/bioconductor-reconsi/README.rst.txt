:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reconsi'
.. highlight: bash

bioconductor-reconsi
====================

.. conda:recipe:: bioconductor-reconsi
   :replaces_section_title:
   :noindex:

   Resampling Collapsed Null Distributions for Simultaneous Inference

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/reconsi.html
   :license: GPL-2
   :recipe: /`bioconductor-reconsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reconsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reconsi/meta.yaml>`_

   Improves simultaneous inference under dependence of tests by estimating a collapsed null distribution through resampling. Accounting for the dependence between tests increases the power while reducing the variability of the false discovery proportion. This dependence is common in genomics applications\, e.g. when combining flow cytometry measurements with microbiome sequence counts.


.. conda:package:: bioconductor-reconsi

   |downloads_bioconductor-reconsi| |docker_bioconductor-reconsi|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ks: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
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

      mamba install bioconductor-reconsi

   and update with::

      mamba update bioconductor-reconsi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reconsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reconsi:<tag>

   (see `bioconductor-reconsi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reconsi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reconsi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reconsi
   :alt:   (downloads)
.. |docker_bioconductor-reconsi| image:: https://quay.io/repository/biocontainers/bioconductor-reconsi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reconsi
.. _`bioconductor-reconsi/tags`: https://quay.io/repository/biocontainers/bioconductor-reconsi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reconsi";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reconsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reconsi/README.html