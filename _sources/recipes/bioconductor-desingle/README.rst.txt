:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desingle'
.. highlight: bash

bioconductor-desingle
=====================

.. conda:recipe:: bioconductor-desingle
   :replaces_section_title:
   :noindex:

   DEsingle for detecting three types of differential expression in single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEsingle.html
   :license: GPL-2
   :recipe: /`bioconductor-desingle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle/meta.yaml>`_

   DEsingle is an R package for differential expression \(DE\) analysis of single\-cell RNA\-seq \(scRNA\-seq\) data. It defines and detects 3 types of differentially expressed genes between two groups of single cells\, with regard to different expression status \(DEs\)\, differential expression abundance \(DEa\)\, and general differential expression \(DEg\). DEsingle employs Zero\-Inflated Negative Binomial model to estimate the proportion of real and dropout zeros and to define and detect the 3 types of DE genes. Results showed that DEsingle outperforms existing methods for scRNA\-seq DE analysis\, and can reveal different types of DE genes that are enriched in different biological functions.


.. conda:package:: bioconductor-desingle

   |downloads_bioconductor-desingle| |docker_bioconductor-desingle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bbmle: ``>=1.0.18``
   :depends r-gamlss: ``>=4.4-0``
   :depends r-mass: ``>=7.3-45``
   :depends r-matrix: ``>=1.2-14``
   :depends r-maxlik: ``>=1.3-4``
   :depends r-pscl: ``>=1.4.9``
   :depends r-vgam: ``>=1.0-2``
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

      mamba install bioconductor-desingle

   and update with::

      mamba update bioconductor-desingle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-desingle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-desingle:<tag>

   (see `bioconductor-desingle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-desingle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desingle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desingle
   :alt:   (downloads)
.. |docker_bioconductor-desingle| image:: https://quay.io/repository/biocontainers/bioconductor-desingle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desingle
.. _`bioconductor-desingle/tags`: https://quay.io/repository/biocontainers/bioconductor-desingle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-desingle";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desingle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desingle/README.html