:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geuvadistranscriptexpr'
.. highlight: bash

bioconductor-geuvadistranscriptexpr
===================================

.. conda:recipe:: bioconductor-geuvadistranscriptexpr
   :replaces_section_title:
   :noindex:

   Data package with transcript expression and bi\-allelic genotypes from the GEUVADIS project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/GeuvadisTranscriptExpr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-geuvadistranscriptexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvadistranscriptexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvadistranscriptexpr/meta.yaml>`_

   Provides transcript expression and bi\-allelic genotypes corresponding to the chromosome 19 for CEU individuals from the GEUVADIS project\, Lappalainen et al.


.. conda:package:: bioconductor-geuvadistranscriptexpr

   |downloads_bioconductor-geuvadistranscriptexpr| |docker_bioconductor-geuvadistranscriptexpr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-geuvadistranscriptexpr

   and update with::

      mamba update bioconductor-geuvadistranscriptexpr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geuvadistranscriptexpr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geuvadistranscriptexpr:<tag>

   (see `bioconductor-geuvadistranscriptexpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geuvadistranscriptexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geuvadistranscriptexpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geuvadistranscriptexpr
   :alt:   (downloads)
.. |docker_bioconductor-geuvadistranscriptexpr| image:: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr
.. _`bioconductor-geuvadistranscriptexpr/tags`: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geuvadistranscriptexpr";
        var versions = ["1.30.0","1.28.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geuvadistranscriptexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geuvadistranscriptexpr/README.html