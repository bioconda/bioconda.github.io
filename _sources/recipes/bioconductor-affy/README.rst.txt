:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affy'
.. highlight: bash

bioconductor-affy
=================

.. conda:recipe:: bioconductor-affy
   :replaces_section_title:
   :noindex:

   Methods for Affymetrix Oligonucleotide Arrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/affy.html
   :license: LGPL-3-only
   :recipe: /`bioconductor-affy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy/meta.yaml>`_
   :links: biotools: :biotools:`affy`

   The package contains functions for exploratory oligonucleotide array analysis. The dependence on tkWidgets only concerns few convenience functions. \'affy\' is fully functional without it.


.. conda:package:: bioconductor-affy

   |downloads_bioconductor-affy| |docker_bioconductor-affy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.78.0-1</code>,  <code>1.78.0-0</code>,  <code>1.76.0-2</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  </span></summary>
      

      ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-1``,  ``1.78.0-0``,  ``1.76.0-2``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affyio: ``>=1.72.0,<1.73.0``
   :depends bioconductor-affyio: ``>=1.72.0,<1.73.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-affy

   and update with::

      mamba update bioconductor-affy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affy:<tag>

   (see `bioconductor-affy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affy
   :alt:   (downloads)
.. |docker_bioconductor-affy| image:: https://quay.io/repository/biocontainers/bioconductor-affy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affy
.. _`bioconductor-affy/tags`: https://quay.io/repository/biocontainers/bioconductor-affy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affy";
        var versions = ["1.80.0","1.80.0","1.78.0","1.78.0","1.76.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affy/README.html