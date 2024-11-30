:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcore'
.. highlight: bash

bioconductor-xcore
==================

.. conda:recipe:: bioconductor-xcore
   :replaces_section_title:
   :noindex:

   xcore expression regulators inference

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/xcore.html
   :license: GPL-2
   :recipe: /`bioconductor-xcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcore/meta.yaml>`_

   xcore is an R package for transcription factor activity modeling based on known molecular signatures and user\'s gene expression data. Accompanying xcoredata package provides a collection of molecular signatures\, constructed from publicly available ChiP\-seq experiments. xcore use ridge regression to model changes in expression as a linear combination of molecular signatures and find their unknown activities. Obtained\, estimates can be further tested for significance to select molecular signatures with the highest predicted effect on the observed expression changes.


.. conda:package:: bioconductor-xcore

   |downloads_bioconductor-xcore| |docker_bioconductor-xcore|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-foreach: ``>=1.5.1``
   :depends r-glmnet: ``>=4.1.2``
   :depends r-iterators: ``>=1.0.13``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-matrix: ``>=1.3.4``
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

      mamba install bioconductor-xcore

   and update with::

      mamba update bioconductor-xcore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xcore:<tag>

   (see `bioconductor-xcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcore
   :alt:   (downloads)
.. |docker_bioconductor-xcore| image:: https://quay.io/repository/biocontainers/bioconductor-xcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcore
.. _`bioconductor-xcore/tags`: https://quay.io/repository/biocontainers/bioconductor-xcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcore";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcore/README.html