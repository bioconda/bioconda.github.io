:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-schot'
.. highlight: bash

bioconductor-schot
==================

.. conda:recipe:: bioconductor-schot
   :replaces_section_title:
   :noindex:

   single\-cell higher order testing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scHOT.html
   :license: GPL-3
   :recipe: /`bioconductor-schot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schot/meta.yaml>`_

   Single cell Higher Order Testing \(scHOT\) is an R package that facilitates testing changes in higher order structure of gene expression along either a developmental trajectory or across space. scHOT is general and modular in nature\, can be run in multiple data contexts such as along a continuous trajectory\, between discrete groups\, and over spatial orientations\; as well as accommodate any higher order measurement such as variability or correlation. scHOT meaningfully adds to first order effect testing\, such as differential expression\, and provides a framework for interrogating higher order interactions from single cell data.


.. conda:package:: bioconductor-schot

   |downloads_bioconductor-schot| |docker_bioconductor-schot|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-reshape: 
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

      mamba install bioconductor-schot

   and update with::

      mamba update bioconductor-schot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-schot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-schot:<tag>

   (see `bioconductor-schot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-schot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-schot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-schot
   :alt:   (downloads)
.. |docker_bioconductor-schot| image:: https://quay.io/repository/biocontainers/bioconductor-schot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-schot
.. _`bioconductor-schot/tags`: https://quay.io/repository/biocontainers/bioconductor-schot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-schot";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-schot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-schot/README.html