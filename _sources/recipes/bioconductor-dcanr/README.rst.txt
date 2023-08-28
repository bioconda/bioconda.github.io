:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcanr'
.. highlight: bash

bioconductor-dcanr
==================

.. conda:recipe:: bioconductor-dcanr
   :replaces_section_title:
   :noindex:

   Differential co\-expression\/association network analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dcanr.html
   :license: GPL-3
   :recipe: /`bioconductor-dcanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr/meta.yaml>`_

   This package implements methods and an evaluation framework to infer differential co\-expression\/association networks. Various methods are implemented and can be evaluated using simulated datasets. Inference of differential co\-expression networks can allow identification of networks that are altered between two conditions \(e.g.\, health and disease\).


.. conda:package:: bioconductor-dcanr

   |downloads_bioconductor-dcanr| |docker_bioconductor-dcanr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-stringr: 
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

      mamba install bioconductor-dcanr

   and update with::

      mamba update bioconductor-dcanr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dcanr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dcanr:<tag>

   (see `bioconductor-dcanr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dcanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcanr
   :alt:   (downloads)
.. |docker_bioconductor-dcanr| image:: https://quay.io/repository/biocontainers/bioconductor-dcanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcanr
.. _`bioconductor-dcanr/tags`: https://quay.io/repository/biocontainers/bioconductor-dcanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcanr";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcanr/README.html