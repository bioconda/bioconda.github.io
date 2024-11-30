:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcsscore'
.. highlight: bash

bioconductor-gcsscore
=====================

.. conda:recipe:: bioconductor-gcsscore
   :replaces_section_title:
   :noindex:

   GCSscore\: an R package for microarray analysis for Affymetrix\/Thermo Fisher arrays

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GCSscore.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-gcsscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsscore/meta.yaml>`_

   For differential expression analysis of 3\'IVT and WT\-style microarrays from Affymetrix\/Thermo\-Fisher.  Based on S\-score algorithm originally described by Zhang et al 2002.


.. conda:package:: bioconductor-gcsscore

   |downloads_bioconductor-gcsscore| |docker_bioconductor-gcsscore|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-affxparser: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dplr: 
   :depends r-rsqlite: 
   :depends r-stringr: 
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

      mamba install bioconductor-gcsscore

   and update with::

      mamba update bioconductor-gcsscore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gcsscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcsscore:<tag>

   (see `bioconductor-gcsscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcsscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcsscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcsscore
   :alt:   (downloads)
.. |docker_bioconductor-gcsscore| image:: https://quay.io/repository/biocontainers/bioconductor-gcsscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcsscore
.. _`bioconductor-gcsscore/tags`: https://quay.io/repository/biocontainers/bioconductor-gcsscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gcsscore";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcsscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcsscore/README.html