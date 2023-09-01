:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pfp'
.. highlight: bash

bioconductor-pfp
================

.. conda:recipe:: bioconductor-pfp
   :replaces_section_title:
   :noindex:

   Pathway Fingerprint Framework in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PFP.html
   :license: GPL-2
   :recipe: /`bioconductor-pfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfp/meta.yaml>`_

   An implementation of the pathway fingerprint framework that introduced in paper \"Pathway Fingerprint\: a novel pathway knowledge and topology based method for biomarker discovery and characterization\". This method provides a systematic comparisons between a gene set \(such as a list of differentially expressed genes\) and well\-studied \"basic pathway networks\" \(KEGG pathways\)\, measuring the importance of pathways and genes for the gene set. The package is helpful for researchers to find the biomarkers and its function.


.. conda:package:: bioconductor-pfp

   |downloads_bioconductor-pfp| |docker_bioconductor-pfp|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-kegggraph: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-pfp

   and update with::

      mamba update bioconductor-pfp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pfp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pfp:<tag>

   (see `bioconductor-pfp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pfp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pfp
   :alt:   (downloads)
.. |docker_bioconductor-pfp| image:: https://quay.io/repository/biocontainers/bioconductor-pfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pfp
.. _`bioconductor-pfp/tags`: https://quay.io/repository/biocontainers/bioconductor-pfp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pfp";
        var versions = ["1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pfp/README.html