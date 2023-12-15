:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pairedgsea'
.. highlight: bash

bioconductor-pairedgsea
=======================

.. conda:recipe:: bioconductor-pairedgsea
   :replaces_section_title:
   :noindex:

   Paired DGE and DGS analysis for gene set enrichment analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pairedGSEA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pairedgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairedgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairedgsea/meta.yaml>`_

   pairedGSEA makes it simple to run a paired Differential Gene Expression \(DGE\) and Differencital Gene Splicing \(DGS\) analysis. The package allows you to store intermediate results for further investiation\, if desired. pairedGSEA comes with a wrapper function for running an Over\-Representation Analysis \(ORA\) and functionalities for plotting the results.


.. conda:package:: bioconductor-pairedgsea

   |downloads_bioconductor-pairedgsea| |docker_bioconductor-pairedgsea|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-dexseq: ``>=1.48.0,<1.49.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-aggregation: 
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

      mamba install bioconductor-pairedgsea

   and update with::

      mamba update bioconductor-pairedgsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pairedgsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pairedgsea:<tag>

   (see `bioconductor-pairedgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pairedgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pairedgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pairedgsea
   :alt:   (downloads)
.. |docker_bioconductor-pairedgsea| image:: https://quay.io/repository/biocontainers/bioconductor-pairedgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pairedgsea
.. _`bioconductor-pairedgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-pairedgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pairedgsea";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pairedgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pairedgsea/README.html