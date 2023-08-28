:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstats'
.. highlight: bash

bioconductor-msstats
====================

.. conda:recipe:: bioconductor-msstats
   :replaces_section_title:
   :noindex:

   Protein Significance Analysis in DDA\, SRM and DIA for Label\-free or Label\-based Proteomics Experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstats/meta.yaml>`_
   :links: biotools: :biotools:`msstats`

   A set of tools for statistical relative protein significance analysis in DDA\, SRM and DIA experiments.


.. conda:package:: bioconductor-msstats

   |downloads_bioconductor-msstats| |docker_bioconductor-msstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.8.3-0</code>,  <code>4.6.0-1</code>,  <code>4.6.0-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.22.1-1</code>,  <code>3.22.1-0</code>,  </span></summary>
      

      ``4.8.3-0``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.22.1-1``,  ``3.22.1-0``,  ``3.22.0-0``,  ``3.20.1-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.14.1-0``,  ``3.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-marray: ``>=1.78.0,<1.79.0``
   :depends bioconductor-msstatsconvert: ``>=1.10.0,<1.11.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-lme4: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-statmod: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-msstats

   and update with::

      mamba update bioconductor-msstats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstats:<tag>

   (see `bioconductor-msstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstats
   :alt:   (downloads)
.. |docker_bioconductor-msstats| image:: https://quay.io/repository/biocontainers/bioconductor-msstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstats
.. _`bioconductor-msstats/tags`: https://quay.io/repository/biocontainers/bioconductor-msstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstats";
        var versions = ["4.8.3","4.6.0","4.6.0","4.2.0","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstats/README.html