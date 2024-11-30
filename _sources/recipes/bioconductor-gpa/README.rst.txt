:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpa'
.. highlight: bash

bioconductor-gpa
================

.. conda:recipe:: bioconductor-gpa
   :replaces_section_title:
   :noindex:

   GPA \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GPA.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-gpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa/meta.yaml>`_
   :links: biotools: :biotools:`GPA`

   This package provides functions for fitting GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy information and annotation data. In addition\, it also includes ShinyGPA\, an interactive visualization toolkit to investigate pleiotropic architecture.


.. conda:package:: bioconductor-gpa

   |downloads_bioconductor-gpa| |docker_bioconductor-gpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-vegan: 
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

      mamba install bioconductor-gpa

   and update with::

      mamba update bioconductor-gpa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpa:<tag>

   (see `bioconductor-gpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpa
   :alt:   (downloads)
.. |docker_bioconductor-gpa| image:: https://quay.io/repository/biocontainers/bioconductor-gpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpa
.. _`bioconductor-gpa/tags`: https://quay.io/repository/biocontainers/bioconductor-gpa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpa";
        var versions = ["1.14.0","1.14.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpa/README.html