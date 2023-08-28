:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbomic'
.. highlight: bash

bioconductor-mbomic
===================

.. conda:recipe:: bioconductor-mbomic
   :replaces_section_title:
   :noindex:

   Integrative analysis of the microbiome and metabolome

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mbOmic.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbomic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbomic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbomic/meta.yaml>`_

   The mbOmic package contains a set of analysis functions for microbiomics and metabolomics data\, designed to analyze the inter\-omic correlation between microbiology and metabolites. Integrative analysis of the microbiome and metabolome is the aim of mbOmic. Additionally\, the identification of enterotype using the gut microbiota abundance is preliminaryimplemented.


.. conda:package:: bioconductor-mbomic

   |downloads_bioconductor-mbomic| |docker_bioconductor-mbomic|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-clustersim: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-igraph: 
   :depends r-psych: 
   :depends r-visnetwork: 
   :depends r-wgcna: 
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

      mamba install bioconductor-mbomic

   and update with::

      mamba update bioconductor-mbomic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbomic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbomic:<tag>

   (see `bioconductor-mbomic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbomic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbomic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbomic
   :alt:   (downloads)
.. |docker_bioconductor-mbomic| image:: https://quay.io/repository/biocontainers/bioconductor-mbomic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbomic
.. _`bioconductor-mbomic/tags`: https://quay.io/repository/biocontainers/bioconductor-mbomic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbomic";
        var versions = ["1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbomic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbomic/README.html