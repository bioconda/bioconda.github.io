:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roc'
.. highlight: bash

bioconductor-roc
================

.. conda:recipe:: bioconductor-roc
   :replaces_section_title:
   :noindex:

   utilities for ROC\, with microarray focus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ROC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-roc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc/meta.yaml>`_
   :links: biotools: :biotools:`roc`, doi: :doi:`10.1038/nmeth.3252`

   Provide utilities for ROC\, with microarray focus.


.. conda:package:: bioconductor-roc

   |downloads_bioconductor-roc| |docker_bioconductor-roc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.78.0-2</code>,  <code>1.78.0-1</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-2</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.78.0-2``,  ``1.78.0-1``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-2``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-knitr: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-roc

   and update with::

      mamba update bioconductor-roc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-roc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roc:<tag>

   (see `bioconductor-roc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roc
   :alt:   (downloads)
.. |docker_bioconductor-roc| image:: https://quay.io/repository/biocontainers/bioconductor-roc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roc
.. _`bioconductor-roc/tags`: https://quay.io/repository/biocontainers/bioconductor-roc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-roc";
        var versions = ["1.82.0","1.78.0","1.78.0","1.78.0","1.76.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roc/README.html