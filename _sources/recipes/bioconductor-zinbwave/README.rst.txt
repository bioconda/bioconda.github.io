:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zinbwave'
.. highlight: bash

bioconductor-zinbwave
=====================

.. conda:recipe:: bioconductor-zinbwave
   :replaces_section_title:
   :noindex:

   Zero\-Inflated Negative Binomial Model for RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/zinbwave.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zinbwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zinbwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zinbwave/meta.yaml>`_
   :links: biotools: :biotools:`zinbwave`, doi: :doi:`10.1038/s41467-017-02554-5`

   Implements a general and flexible zero\-inflated negative binomial model that can be used to provide a low\-dimensional representations of single\-cell RNA\-seq data. The model accounts for zero inflation \(dropouts\)\, over\-dispersion\, and the count nature of the data. The model also accounts for the difference in library sizes and optionally for batch effects and\/or other covariates\, avoiding the need for pre\-normalize the data.


.. conda:package:: bioconductor-zinbwave

   |downloads_bioconductor-zinbwave| |docker_bioconductor-zinbwave|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-softimpute: 
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

      mamba install bioconductor-zinbwave

   and update with::

      mamba update bioconductor-zinbwave

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zinbwave

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zinbwave:<tag>

   (see `bioconductor-zinbwave/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zinbwave| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zinbwave.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zinbwave
   :alt:   (downloads)
.. |docker_bioconductor-zinbwave| image:: https://quay.io/repository/biocontainers/bioconductor-zinbwave/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zinbwave
.. _`bioconductor-zinbwave/tags`: https://quay.io/repository/biocontainers/bioconductor-zinbwave?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zinbwave";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html