:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirit'
.. highlight: bash

bioconductor-mirit
==================

.. conda:recipe:: bioconductor-mirit
   :replaces_section_title:
   :noindex:

   Integrate microRNA and gene expression to decipher pathway complexity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MIRit.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-mirit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirit/meta.yaml>`_

   MIRit is an R package that provides several methods for investigating the relationships between miRNAs and genes in different biological conditions. In particular\, MIRit allows to explore the functions of dysregulated miRNAs\, and makes it possible to identify miRNA\-gene regulatory axes that control biological pathways\, thus enabling the users to unveil the complexity of miRNA biology. MIRit is an all\-in\-one framework that aims to help researchers in all the central aspects of an integrative miRNA\-mRNA analyses\, from differential expression analysis to network characterization.


.. conda:package:: bioconductor-mirit

   |downloads_bioconductor-mirit| |docker_bioconductor-mirit|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-mirit

   and update with::

      mamba update bioconductor-mirit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirit:<tag>

   (see `bioconductor-mirit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirit
   :alt:   (downloads)
.. |docker_bioconductor-mirit| image:: https://quay.io/repository/biocontainers/bioconductor-mirit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirit
.. _`bioconductor-mirit/tags`: https://quay.io/repository/biocontainers/bioconductor-mirit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirit";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirit/README.html