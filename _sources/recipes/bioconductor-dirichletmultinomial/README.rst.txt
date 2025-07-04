:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dirichletmultinomial'
.. highlight: bash

bioconductor-dirichletmultinomial
=================================

.. conda:recipe:: bioconductor-dirichletmultinomial
   :replaces_section_title:
   :noindex:

   Dirichlet\-Multinomial Mixture Model Machine Learning for Microbiome Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DirichletMultinomial.html
   :license: LGPL-3
   :recipe: /`bioconductor-dirichletmultinomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial/meta.yaml>`_
   :links: biotools: :biotools:`dirichletmultinomial`, doi: :doi:`10.1371/journal.pone.0030126`

   Dirichlet\-multinomial mixture models can be used to describe variability in microbial metagenomic data. This package is an interface to code originally made available by Holmes\, Harris\, and Quince\, 2012\, PLoS ONE 7\(2\)\: 1\-15\, as discussed further in the man page for this package\, \?DirichletMultinomial.


.. conda:package:: bioconductor-dirichletmultinomial

   |downloads_bioconductor-dirichletmultinomial| |docker_bioconductor-dirichletmultinomial|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-3</code>,  <code>1.36.0-2</code>,  </span></summary>
      

      ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-3``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dirichletmultinomial

   and update with::

      mamba update bioconductor-dirichletmultinomial

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dirichletmultinomial

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dirichletmultinomial:<tag>

   (see `bioconductor-dirichletmultinomial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dirichletmultinomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dirichletmultinomial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dirichletmultinomial
   :alt:   (downloads)
.. |docker_bioconductor-dirichletmultinomial| image:: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial
.. _`bioconductor-dirichletmultinomial/tags`: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dirichletmultinomial";
        var versions = ["1.48.0","1.48.0","1.44.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html