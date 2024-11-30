:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccpromise'
.. highlight: bash

bioconductor-ccpromise
======================

.. conda:recipe:: bioconductor-ccpromise
   :replaces_section_title:
   :noindex:

   PROMISE analysis with Canonical Correlation for Two Forms of High Dimensional Genetic Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CCPROMISE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ccpromise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccpromise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccpromise/meta.yaml>`_

   Perform Canonical correlation between two forms of high demensional genetic data\, and associate the first compoent of each form of data with a specific biologically interesting pattern of associations with multiple endpoints. A probe level analysis is also implemented.


.. conda:package:: bioconductor-ccpromise

   |downloads_bioconductor-ccpromise| |docker_bioconductor-ccpromise|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-promise: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ccp: 
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

      mamba install bioconductor-ccpromise

   and update with::

      mamba update bioconductor-ccpromise

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ccpromise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccpromise:<tag>

   (see `bioconductor-ccpromise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccpromise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccpromise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccpromise
   :alt:   (downloads)
.. |docker_bioconductor-ccpromise| image:: https://quay.io/repository/biocontainers/bioconductor-ccpromise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccpromise
.. _`bioconductor-ccpromise/tags`: https://quay.io/repository/biocontainers/bioconductor-ccpromise?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccpromise";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccpromise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccpromise/README.html