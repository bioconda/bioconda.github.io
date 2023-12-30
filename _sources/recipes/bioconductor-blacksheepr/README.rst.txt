:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blacksheepr'
.. highlight: bash

bioconductor-blacksheepr
========================

.. conda:recipe:: bioconductor-blacksheepr
   :replaces_section_title:
   :noindex:

   Outlier Analysis for pairwise differential comparison

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/blacksheepr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-blacksheepr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blacksheepr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blacksheepr/meta.yaml>`_

   Blacksheep is a tool designed for outlier analysis in the context of pairwise comparisons in an effort to find distinguishing characteristics from two groups. This tool was designed to be applied for biological applications such as phosphoproteomics or transcriptomics\, but it can be used for any data that can be represented by a 2D table\, and has two sub populations within the table to compare.


.. conda:package:: bioconductor-blacksheepr

   |downloads_bioconductor-blacksheepr| |docker_bioconductor-blacksheepr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-pasilla: ``>=1.30.0,<1.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-rcolorbrewer: 
   :depends r-viridis: 
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

      mamba install bioconductor-blacksheepr

   and update with::

      mamba update bioconductor-blacksheepr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-blacksheepr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blacksheepr:<tag>

   (see `bioconductor-blacksheepr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blacksheepr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blacksheepr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blacksheepr
   :alt:   (downloads)
.. |docker_bioconductor-blacksheepr| image:: https://quay.io/repository/biocontainers/bioconductor-blacksheepr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blacksheepr
.. _`bioconductor-blacksheepr/tags`: https://quay.io/repository/biocontainers/bioconductor-blacksheepr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-blacksheepr";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blacksheepr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blacksheepr/README.html