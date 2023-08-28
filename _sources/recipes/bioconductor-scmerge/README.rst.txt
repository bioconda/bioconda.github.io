:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmerge'
.. highlight: bash

bioconductor-scmerge
====================

.. conda:recipe:: bioconductor-scmerge
   :replaces_section_title:
   :noindex:

   scMerge\: Merging multiple batches of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scMerge.html
   :license: GPL-3
   :recipe: /`bioconductor-scmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge/meta.yaml>`_

   Like all gene expression data\, single\-cell data suffers from batch effects and other unwanted variations that makes accurate biological interpretations difficult. The scMerge method leverages factor analysis\, stably expressed genes \(SEGs\) and \(pseudo\-\) replicates to remove unwanted variations and merge multiple single\-cell data. This package contains all the necessary functions in the scMerge pipeline\, including the identification of SEGs\, replication\-identification methods\, and merging of single\-cell data.


.. conda:package:: bioconductor-scmerge

   |downloads_bioconductor-scmerge| |docker_bioconductor-scmerge|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-batchelor: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocneighbors: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-m3drop: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-cvtools: 
   :depends r-distr: 
   :depends r-igraph: 
   :depends r-proxyc: 
   :depends r-ruv: 
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

      mamba install bioconductor-scmerge

   and update with::

      mamba update bioconductor-scmerge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmerge:<tag>

   (see `bioconductor-scmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmerge
   :alt:   (downloads)
.. |docker_bioconductor-scmerge| image:: https://quay.io/repository/biocontainers/bioconductor-scmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmerge
.. _`bioconductor-scmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-scmerge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmerge";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmerge/README.html