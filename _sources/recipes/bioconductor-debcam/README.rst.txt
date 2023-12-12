:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-debcam'
.. highlight: bash

bioconductor-debcam
===================

.. conda:recipe:: bioconductor-debcam
   :replaces_section_title:
   :noindex:

   Deconvolution by Convex Analysis of Mixtures

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/debCAM.html
   :license: GPL-2
   :recipe: /`bioconductor-debcam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam/meta.yaml>`_

   An R package for fully unsupervised deconvolution of complex tissues. It provides basic functions to perform unsupervised deconvolution on mixture expression profiles by Convex Analysis of Mixtures \(CAM\) and some auxiliary functions to help understand the subpopulation\-specific results. It also implements functions to perform supervised deconvolution based on prior knowledge of molecular markers\, S matrix or A matrix. Combining molecular markers from CAM and from prior knowledge can achieve semi\-supervised deconvolution of mixtures.


.. conda:package:: bioconductor-debcam

   |downloads_bioconductor-debcam| |docker_bioconductor-debcam|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends openjdk: 
   :depends r-apcluster: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-dmwr2: 
   :depends r-geometry: 
   :depends r-nmf: 
   :depends r-nnls: 
   :depends r-pcapp: 
   :depends r-rjava: 
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

      mamba install bioconductor-debcam

   and update with::

      mamba update bioconductor-debcam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-debcam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-debcam:<tag>

   (see `bioconductor-debcam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-debcam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-debcam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-debcam
   :alt:   (downloads)
.. |docker_bioconductor-debcam| image:: https://quay.io/repository/biocontainers/bioconductor-debcam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-debcam
.. _`bioconductor-debcam/tags`: https://quay.io/repository/biocontainers/bioconductor-debcam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-debcam";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-debcam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-debcam/README.html