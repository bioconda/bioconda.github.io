:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-river'
.. highlight: bash

bioconductor-river
==================

.. conda:recipe:: bioconductor-river
   :replaces_section_title:
   :noindex:

   R package for RIVER \(RNA\-Informed Variant Effect on Regulation\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RIVER.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-river <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river/meta.yaml>`_

   An implementation of a probabilistic modeling framework that jointly analyzes personal genome and transcriptome data to estimate the probability that a variant has regulatory impact in that individual. It is based on a generative model that assumes that genomic annotations\, such as the location of a variant with respect to regulatory elements\, determine the prior probability that variant is a functional regulatory variant\, which is an unobserved variable. The functional regulatory variant status then influences whether nearby genes are likely to display outlier levels of gene expression in that person. See the RIVER website for more information\, documentation and examples.


.. conda:package:: bioconductor-river

   |downloads_bioconductor-river| |docker_bioconductor-river|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-proc: 
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

      mamba install bioconductor-river

   and update with::

      mamba update bioconductor-river

  To create a new environment, run::

      mamba create --name myenvname bioconductor-river

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-river:<tag>

   (see `bioconductor-river/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-river| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-river.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-river
   :alt:   (downloads)
.. |docker_bioconductor-river| image:: https://quay.io/repository/biocontainers/bioconductor-river/status
   :target: https://quay.io/repository/biocontainers/bioconductor-river
.. _`bioconductor-river/tags`: https://quay.io/repository/biocontainers/bioconductor-river?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-river";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-river/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-river/README.html