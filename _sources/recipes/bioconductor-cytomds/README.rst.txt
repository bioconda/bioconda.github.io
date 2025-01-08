:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomds'
.. highlight: bash

bioconductor-cytomds
====================

.. conda:recipe:: bioconductor-cytomds
   :replaces_section_title:
   :noindex:

   Low Dimensions projection of cytometry samples

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CytoMDS.html
   :license: GPL-3
   :recipe: /`bioconductor-cytomds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomds/meta.yaml>`_

   This package implements a low dimensional visualization of a set of cytometry samples\, in order to visually assess the \'distances\' between them. This\, in turn\, can greatly help the user to identify quality issues like batch effects or outlier samples\, and\/or check the presence of potential sample clusters that might align with the exeprimental design. The CytoMDS algorithm combines\, on the one hand\, the concept of Earth Mover\'s Distance \(EMD\)\, a.k.a. Wasserstein metric and\, on the other hand\, the Multi Dimensional Scaling \(MDS\) algorithm for the low dimensional projection. Also\, the package provides some diagnostic tools for both checking the quality of the MDS projection\, as well as tools to help with the interpretation of the axes of the projection.


.. conda:package:: bioconductor-cytomds

   |downloads_bioconductor-cytomds| |docker_bioconductor-cytomds|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-cytopipeline: ``>=1.6.0,<1.7.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-patchwork: 
   :depends r-pracma: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-smacof: 
   :depends r-transport: 
   :depends r-withr: 
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

      mamba install bioconductor-cytomds

   and update with::

      mamba update bioconductor-cytomds

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytomds

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytomds:<tag>

   (see `bioconductor-cytomds/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytomds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomds
   :alt:   (downloads)
.. |docker_bioconductor-cytomds| image:: https://quay.io/repository/biocontainers/bioconductor-cytomds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomds
.. _`bioconductor-cytomds/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomds";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomds/README.html