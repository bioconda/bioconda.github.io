:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mipp'
.. highlight: bash

bioconductor-mipp
=================

.. conda:recipe:: bioconductor-mipp
   :replaces_section_title:
   :noindex:

   Misclassification Penalized Posterior Classification

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MiPP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mipp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mipp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mipp/meta.yaml>`_
   :links: biotools: :biotools:`mipp`, doi: :doi:`10.1093/bioinformatics/bti1020`

   This package finds optimal sets of genes that seperate samples into two or more classes.


.. conda:package:: bioconductor-mipp

   |downloads_bioconductor-mipp| |docker_bioconductor-mipp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-mass: 
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

      mamba install bioconductor-mipp

   and update with::

      mamba update bioconductor-mipp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mipp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mipp:<tag>

   (see `bioconductor-mipp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mipp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mipp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mipp
   :alt:   (downloads)
.. |docker_bioconductor-mipp| image:: https://quay.io/repository/biocontainers/bioconductor-mipp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mipp
.. _`bioconductor-mipp/tags`: https://quay.io/repository/biocontainers/bioconductor-mipp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mipp";
        var versions = ["1.78.0","1.74.0","1.72.0","1.70.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mipp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mipp/README.html