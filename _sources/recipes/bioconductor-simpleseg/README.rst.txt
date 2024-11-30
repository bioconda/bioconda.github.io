:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpleseg'
.. highlight: bash

bioconductor-simpleseg
======================

.. conda:recipe:: bioconductor-simpleseg
   :replaces_section_title:
   :noindex:

   A package to perform simple cell segmentation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/simpleSeg.html
   :license: GPL-3
   :recipe: /`bioconductor-simpleseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleseg/meta.yaml>`_

   Image segmentation is the process of identifying the borders of individual objects \(in this case cells\) within an image. This allows for the features of cells such as marker expression and morphology to be extracted\, stored and analysed. simpleSeg provides functionality for user friendly\, watershed based segmentation on multiplexed cellular images in R based on the intensity of user specified protein marker channels. simpleSeg can also be used for the normalization of single cell data obtained from multiple images.


.. conda:package:: bioconductor-simpleseg

   |downloads_bioconductor-simpleseg| |docker_bioconductor-simpleseg|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-cytomapper: ``>=1.14.0,<1.15.0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-spatstat.geom: 
   :depends r-terra: 
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

      mamba install bioconductor-simpleseg

   and update with::

      mamba update bioconductor-simpleseg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simpleseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simpleseg:<tag>

   (see `bioconductor-simpleseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simpleseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpleseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simpleseg
   :alt:   (downloads)
.. |docker_bioconductor-simpleseg| image:: https://quay.io/repository/biocontainers/bioconductor-simpleseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpleseg
.. _`bioconductor-simpleseg/tags`: https://quay.io/repository/biocontainers/bioconductor-simpleseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simpleseg";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpleseg/README.html