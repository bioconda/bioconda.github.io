:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pengls'
.. highlight: bash

bioconductor-pengls
===================

.. conda:recipe:: bioconductor-pengls
   :replaces_section_title:
   :noindex:

   Fit Penalised Generalised Least Squares models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pengls.html
   :license: GPL-2
   :recipe: /`bioconductor-pengls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pengls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pengls/meta.yaml>`_

   Combine generalised least squares methodology from the nlme package for dealing with autocorrelation with penalised least squares methods from the glmnet package to deal with high dimensionality. This pengls packages glues them together through an iterative loop. The resulting method is applicable to high dimensional datasets that exhibit autocorrelation\, such as spatial or temporal data.


.. conda:package:: bioconductor-pengls

   |downloads_bioconductor-pengls| |docker_bioconductor-pengls|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
   :depends r-nlme: 
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

      mamba install bioconductor-pengls

   and update with::

      mamba update bioconductor-pengls

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pengls

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pengls:<tag>

   (see `bioconductor-pengls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pengls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pengls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pengls
   :alt:   (downloads)
.. |docker_bioconductor-pengls| image:: https://quay.io/repository/biocontainers/bioconductor-pengls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pengls
.. _`bioconductor-pengls/tags`: https://quay.io/repository/biocontainers/bioconductor-pengls?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pengls";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pengls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pengls/README.html