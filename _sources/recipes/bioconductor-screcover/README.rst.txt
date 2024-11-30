:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screcover'
.. highlight: bash

bioconductor-screcover
======================

.. conda:recipe:: bioconductor-screcover
   :replaces_section_title:
   :noindex:

   scRecover for imputation of single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scRecover.html
   :license: GPL
   :recipe: /`bioconductor-screcover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover/meta.yaml>`_

   scRecover is an R package for imputation of single\-cell RNA\-seq \(scRNA\-seq\) data. It will detect and impute dropout values in a scRNA\-seq raw read counts matrix while keeping the real zeros unchanged\, since there are both dropout zeros and real zeros in scRNA\-seq data. By combination with scImpute\, SAVER and MAGIC\, scRecover not only detects dropout and real zeros at higher accuracy\, but also improve the downstream clustering and visualization results.


.. conda:package:: bioconductor-screcover

   |downloads_bioconductor-screcover| |docker_bioconductor-screcover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bbmle: ``>=1.0.18``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-gamlss: ``>=4.4-0``
   :depends r-kernlab: 
   :depends r-mass: ``>=7.3-45``
   :depends r-matrix: ``>=1.2-14``
   :depends r-penalized: 
   :depends r-preseqr: ``>=4.0.0``
   :depends r-pscl: ``>=1.4.9``
   :depends r-rsvd: 
   :depends r-saver: ``>=1.1.1``
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

      mamba install bioconductor-screcover

   and update with::

      mamba update bioconductor-screcover

  To create a new environment, run::

      mamba create --name myenvname bioconductor-screcover

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screcover:<tag>

   (see `bioconductor-screcover/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screcover| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screcover.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screcover
   :alt:   (downloads)
.. |docker_bioconductor-screcover| image:: https://quay.io/repository/biocontainers/bioconductor-screcover/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screcover
.. _`bioconductor-screcover/tags`: https://quay.io/repository/biocontainers/bioconductor-screcover?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screcover";
        var versions = ["1.18.0","1.16.0","1.13.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screcover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screcover/README.html