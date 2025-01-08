:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrtestdata'
.. highlight: bash

bioconductor-gdrtestdata
========================

.. conda:recipe:: bioconductor-gdrtestdata
   :replaces_section_title:
   :noindex:

   gDRtestData \- R data package with testing dose response data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/gDRtestData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrtestdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrtestdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrtestdata/meta.yaml>`_

   R package with internal dose\-response test data. Package provides functions to generate input testing data that can be used as the input for gDR pipeline. It also contains qs files with MAE data processed by gDR.


.. conda:package:: bioconductor-gdrtestdata

   |downloads_bioconductor-gdrtestdata| |docker_bioconductor-gdrtestdata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
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

      mamba install bioconductor-gdrtestdata

   and update with::

      mamba update bioconductor-gdrtestdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdrtestdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdrtestdata:<tag>

   (see `bioconductor-gdrtestdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdrtestdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrtestdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrtestdata
   :alt:   (downloads)
.. |docker_bioconductor-gdrtestdata| image:: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata
.. _`bioconductor-gdrtestdata/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrtestdata";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrtestdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrtestdata/README.html