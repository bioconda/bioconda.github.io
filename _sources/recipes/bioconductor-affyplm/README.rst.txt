:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyplm'
.. highlight: bash

bioconductor-affyplm
====================

.. conda:recipe:: bioconductor-affyplm
   :replaces_section_title:
   :noindex:

   Methods for fitting probe\-level models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/affyPLM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affyplm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm/meta.yaml>`_
   :links: biotools: :biotools:`affyplm`

   A package that extends and improves the functionality of the base affy package. Routines that make heavy use of compiled code for speed. Central focus is on implementation of methods for fitting probe\-level models and tools using these models. PLM based quality assessment tools.


.. conda:package:: bioconductor-affyplm

   |downloads_bioconductor-affyplm| |docker_bioconductor-affyplm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.76.1-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.76.1-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-gcrma: ``>=2.74.0,<2.75.0``
   :depends bioconductor-gcrma: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-affyplm

   and update with::

      mamba update bioconductor-affyplm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affyplm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyplm:<tag>

   (see `bioconductor-affyplm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyplm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyplm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyplm
   :alt:   (downloads)
.. |docker_bioconductor-affyplm| image:: https://quay.io/repository/biocontainers/bioconductor-affyplm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyplm
.. _`bioconductor-affyplm/tags`: https://quay.io/repository/biocontainers/bioconductor-affyplm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyplm";
        var versions = ["1.78.0","1.76.1","1.74.0","1.74.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyplm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyplm/README.html