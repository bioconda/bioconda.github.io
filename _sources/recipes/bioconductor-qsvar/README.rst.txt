:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsvar'
.. highlight: bash

bioconductor-qsvar
==================

.. conda:recipe:: bioconductor-qsvar
   :replaces_section_title:
   :noindex:

   Generate Quality Surrogate Variable Analysis for Degradation Correction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/qsvaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qsvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsvar/meta.yaml>`_

   The qsvaR package contains functions for removing the effect of degration in rna\-seq data from postmortem brain tissue. The package is equipped to help users generate principal components associated with degradation. The components can be used in differential expression analysis to remove the effects of degradation.


.. conda:package:: bioconductor-qsvar

   |downloads_bioconductor-qsvar| |docker_bioconductor-qsvar|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
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

      mamba install bioconductor-qsvar

   and update with::

      mamba update bioconductor-qsvar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qsvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsvar:<tag>

   (see `bioconductor-qsvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsvar
   :alt:   (downloads)
.. |docker_bioconductor-qsvar| image:: https://quay.io/repository/biocontainers/bioconductor-qsvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsvar
.. _`bioconductor-qsvar/tags`: https://quay.io/repository/biocontainers/bioconductor-qsvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsvar";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsvar/README.html