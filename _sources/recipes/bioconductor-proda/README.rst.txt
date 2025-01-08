:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proda'
.. highlight: bash

bioconductor-proda
==================

.. conda:recipe:: bioconductor-proda
   :replaces_section_title:
   :noindex:

   Differential Abundance Analysis of Label\-Free Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/proDA.html
   :license: GPL-3
   :recipe: /`bioconductor-proda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proda/meta.yaml>`_

   Account for missing values in label\-free mass spectrometry data without imputation. The package implements a probabilistic dropout model that ensures that the information from observed and missing values are properly combined. It adds empirical Bayesian priors to increase power to detect differentially abundant proteins.


.. conda:package:: bioconductor-proda

   |downloads_bioconductor-proda| |docker_bioconductor-proda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-extradistr: 
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

      mamba install bioconductor-proda

   and update with::

      mamba update bioconductor-proda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-proda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proda:<tag>

   (see `bioconductor-proda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proda
   :alt:   (downloads)
.. |docker_bioconductor-proda| image:: https://quay.io/repository/biocontainers/bioconductor-proda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proda
.. _`bioconductor-proda/tags`: https://quay.io/repository/biocontainers/bioconductor-proda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proda";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proda/README.html