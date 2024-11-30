:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comethdmr'
.. highlight: bash

bioconductor-comethdmr
======================

.. conda:recipe:: bioconductor-comethdmr
   :replaces_section_title:
   :noindex:

   Accurate identification of co\-methylated and differentially methylated regions in epigenome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/coMethDMR.html
   :license: GPL-3
   :recipe: /`bioconductor-comethdmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comethdmr/meta.yaml>`_

   coMethDMR identifies genomic regions associated with continuous phenotypes by optimally leverages covariations among CpGs within predefined genomic regions. Instead of testing all CpGs within a genomic region\, coMethDMR carries out an additional step that selects co\-methylated sub\-regions first without using any outcome information. Next\, coMethDMR tests association between methylation within the sub\-region and continuous phenotype using a random coefficient mixed effects model\, which models both variations between CpG sites within the region and differential methylation simultaneously.


.. conda:package:: bioconductor-comethdmr

   |downloads_bioconductor-comethdmr| |docker_bioconductor-comethdmr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-bumphunter: ``>=1.44.0,<1.45.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lmertest: 
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

      mamba install bioconductor-comethdmr

   and update with::

      mamba update bioconductor-comethdmr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-comethdmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-comethdmr:<tag>

   (see `bioconductor-comethdmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-comethdmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comethdmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comethdmr
   :alt:   (downloads)
.. |docker_bioconductor-comethdmr| image:: https://quay.io/repository/biocontainers/bioconductor-comethdmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comethdmr
.. _`bioconductor-comethdmr/tags`: https://quay.io/repository/biocontainers/bioconductor-comethdmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-comethdmr";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comethdmr/README.html