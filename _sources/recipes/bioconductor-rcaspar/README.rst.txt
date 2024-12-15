:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcaspar'
.. highlight: bash

bioconductor-rcaspar
====================

.. conda:recipe:: bioconductor-rcaspar
   :replaces_section_title:
   :noindex:

   A package for survival time prediction based on a piecewise baseline hazard Cox regression model.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RCASPAR.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-rcaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar/meta.yaml>`_
   :links: biotools: :biotools:`rcaspar`, doi: :doi:`10.1038/nmeth.3252`

   The package is the R\-version of the C\-based software \\bold\{CASPAR\} \(Kaderali\,2006\: \\url\{http\:\/\/bioinformatics.oxfordjournals.org\/content\/22\/12\/1495\}\). It is meant to help predict survival times in the presence of high\-dimensional explanatory covariates. The model is a piecewise baseline hazard Cox regression model with an Lq\-norm based prior that selects for the most important regression coefficients\, and in turn the most relevant covariates for survival analysis. It was primarily tried on gene expression and aCGH data\, but can be used on any other type of high\-dimensional data and in disciplines other than biology and medicine.


.. conda:package:: bioconductor-rcaspar

   |downloads_bioconductor-rcaspar| |docker_bioconductor-rcaspar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rcaspar

   and update with::

      mamba update bioconductor-rcaspar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcaspar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcaspar:<tag>

   (see `bioconductor-rcaspar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcaspar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcaspar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcaspar
   :alt:   (downloads)
.. |docker_bioconductor-rcaspar| image:: https://quay.io/repository/biocontainers/bioconductor-rcaspar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcaspar
.. _`bioconductor-rcaspar/tags`: https://quay.io/repository/biocontainers/bioconductor-rcaspar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcaspar";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html