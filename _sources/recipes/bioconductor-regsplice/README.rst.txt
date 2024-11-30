:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regsplice'
.. highlight: bash

bioconductor-regsplice
======================

.. conda:recipe:: bioconductor-regsplice
   :replaces_section_title:
   :noindex:

   L1\-regularization based methods for detection of differential splicing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/regsplice.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-regsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regsplice/meta.yaml>`_
   :links: biotools: :biotools:`regsplice`, doi: :doi:`10.1038/nmeth.3252`

   Statistical methods for detection of differential splicing \(differential exon usage\) in RNA\-seq and exon microarray data\, using L1\-regularization \(lasso\) to improve power.


.. conda:package:: bioconductor-regsplice

   |downloads_bioconductor-regsplice| |docker_bioconductor-regsplice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
   :depends r-pbapply: 
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

      mamba install bioconductor-regsplice

   and update with::

      mamba update bioconductor-regsplice

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regsplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regsplice:<tag>

   (see `bioconductor-regsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regsplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regsplice
   :alt:   (downloads)
.. |docker_bioconductor-regsplice| image:: https://quay.io/repository/biocontainers/bioconductor-regsplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regsplice
.. _`bioconductor-regsplice/tags`: https://quay.io/repository/biocontainers/bioconductor-regsplice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regsplice";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regsplice/README.html