:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nipalsmcia'
.. highlight: bash

bioconductor-nipalsmcia
=======================

.. conda:recipe:: bioconductor-nipalsmcia
   :replaces_section_title:
   :noindex:

   Multiple Co\-Inertia Analysis via the NIPALS Method

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/nipalsMCIA.html
   :license: GPL-3
   :recipe: /`bioconductor-nipalsmcia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nipalsmcia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nipalsmcia/meta.yaml>`_

   Computes Multiple Co\-Inertia Analysis \(MCIA\)\, a dimensionality reduction \(jDR\) algorithm\, for a multi\-block dataset using a modification to the Nonlinear Iterative Partial Least Squares method \(NIPALS\) proposed in \(Hanafi et. al\, 2010\). Allows multiple options for row\- and table\-level preprocessing\, and speeds up computation of variance explained. Vignettes detail application to bulk\- and single cell\- multi\-omics studies.


.. conda:package:: bioconductor-nipalsmcia

   |downloads_bioconductor-nipalsmcia| |docker_bioconductor-nipalsmcia|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-pracma: 
   :depends r-rlang: 
   :depends r-rspectra: 
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

      mamba install bioconductor-nipalsmcia

   and update with::

      mamba update bioconductor-nipalsmcia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nipalsmcia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nipalsmcia:<tag>

   (see `bioconductor-nipalsmcia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nipalsmcia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nipalsmcia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nipalsmcia
   :alt:   (downloads)
.. |docker_bioconductor-nipalsmcia| image:: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia
.. _`bioconductor-nipalsmcia/tags`: https://quay.io/repository/biocontainers/bioconductor-nipalsmcia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nipalsmcia";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nipalsmcia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nipalsmcia/README.html