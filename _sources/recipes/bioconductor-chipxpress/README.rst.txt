:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipxpress'
.. highlight: bash

bioconductor-chipxpress
=======================

.. conda:recipe:: bioconductor-chipxpress
   :replaces_section_title:
   :noindex:

   ChIPXpress\: enhanced transcription factor target gene identification from ChIP\-seq and ChIP\-chip data using publicly available gene expression profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ChIPXpress.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-chipxpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpress/meta.yaml>`_
   :links: biotools: :biotools:`chipxpress`, doi: :doi:`10.1186/1471-2105-14-188`

   ChIPXpress takes as input predicted TF bound genes from ChIPx data and uses a corresponding database of gene expression profiles downloaded from NCBI GEO to rank the TF bound targets in order of which gene is most likely to be functional TF target.


.. conda:package:: bioconductor-chipxpress

   |downloads_bioconductor-chipxpress| |docker_bioconductor-chipxpress|

   :versions:
      
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-chipxpressdata: ``>=1.36.0,<1.37.0``
   :depends bioconductor-frma: ``>=1.50.0,<1.51.0``
   :depends bioconductor-geoquery: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biganalytics: 
   :depends r-bigmemory: 
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

      mamba install bioconductor-chipxpress

   and update with::

      mamba update bioconductor-chipxpress

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipxpress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipxpress:<tag>

   (see `bioconductor-chipxpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipxpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipxpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipxpress
   :alt:   (downloads)
.. |docker_bioconductor-chipxpress| image:: https://quay.io/repository/biocontainers/bioconductor-chipxpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipxpress
.. _`bioconductor-chipxpress/tags`: https://quay.io/repository/biocontainers/bioconductor-chipxpress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipxpress";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipxpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipxpress/README.html