:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-target'
.. highlight: bash

bioconductor-target
===================

.. conda:recipe:: bioconductor-target
   :replaces_section_title:
   :noindex:

   Predict Combined Function of Transcription Factors

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/target.html
   :license: GPL-3
   :recipe: /`bioconductor-target <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target/meta.yaml>`_

   Implement the BETA algorithm for infering direct target genes from DNA\-binding and perturbation expression data Wang et al. \(2013\) \<doi\: 10.1038\/nprot.2013.150\>. Extend the algorithm to predict the combined function of two DNA\-binding elements from comprable binding and expression data.


.. conda:package:: bioconductor-target

   |downloads_bioconductor-target| |docker_bioconductor-target|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :depends r-shiny: 
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

      mamba install bioconductor-target

   and update with::

      mamba update bioconductor-target

  To create a new environment, run::

      mamba create --name myenvname bioconductor-target

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-target:<tag>

   (see `bioconductor-target/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-target| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-target.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-target
   :alt:   (downloads)
.. |docker_bioconductor-target| image:: https://quay.io/repository/biocontainers/bioconductor-target/status
   :target: https://quay.io/repository/biocontainers/bioconductor-target
.. _`bioconductor-target/tags`: https://quay.io/repository/biocontainers/bioconductor-target?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-target";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-target/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-target/README.html