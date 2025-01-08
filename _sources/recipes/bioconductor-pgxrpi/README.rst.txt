:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pgxrpi'
.. highlight: bash

bioconductor-pgxrpi
===================

.. conda:recipe:: bioconductor-pgxrpi
   :replaces_section_title:
   :noindex:

   R wrapper for Progenetix

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pgxRpi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pgxrpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgxrpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgxrpi/meta.yaml>`_

   The package is an R wrapper for Progenetix REST API built upon the Beacon v2 protocol. Its purpose is to provide a seamless way for retrieving genomic data from Progenetix database—an open resource dedicated to curated oncogenomic profiles. Empowered by this package\, users can effortlessly access and visualize data from Progenetix.


.. conda:package:: bioconductor-pgxrpi

   |downloads_bioconductor-pgxrpi| |docker_bioconductor-pgxrpi|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-attempt: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-lubridate: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-yaml: 
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

      mamba install bioconductor-pgxrpi

   and update with::

      mamba update bioconductor-pgxrpi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pgxrpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pgxrpi:<tag>

   (see `bioconductor-pgxrpi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pgxrpi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pgxrpi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pgxrpi
   :alt:   (downloads)
.. |docker_bioconductor-pgxrpi| image:: https://quay.io/repository/biocontainers/bioconductor-pgxrpi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pgxrpi
.. _`bioconductor-pgxrpi/tags`: https://quay.io/repository/biocontainers/bioconductor-pgxrpi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pgxrpi";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pgxrpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pgxrpi/README.html