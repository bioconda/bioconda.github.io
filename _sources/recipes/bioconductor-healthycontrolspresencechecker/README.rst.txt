:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-healthycontrolspresencechecker'
.. highlight: bash

bioconductor-healthycontrolspresencechecker
===========================================

.. conda:recipe:: bioconductor-healthycontrolspresencechecker
   :replaces_section_title:
   :noindex:

   Dowloads A Gene Expression Dataset From GEO And Checks If It Contains Data Of Healthy Controls Or Not

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/healthyControlsPresenceChecker.html
   :license: GPL-3
   :recipe: /`bioconductor-healthycontrolspresencechecker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker/meta.yaml>`_

   A function that reads in the GEO accession code of a gene expression dataset\, retrieves its data from GEO\, and checks if data of healthy controls are present in the dataset. It returns true if healthy controls data are found\, and false otherwise. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>.


.. conda:package:: bioconductor-healthycontrolspresencechecker

   |downloads_bioconductor-healthycontrolspresencechecker| |docker_bioconductor-healthycontrolspresencechecker|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-geneexpressionfromgeo: 
   :depends r-magrittr: 
   :depends r-xml2: 
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

      mamba install bioconductor-healthycontrolspresencechecker

   and update with::

      mamba update bioconductor-healthycontrolspresencechecker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-healthycontrolspresencechecker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-healthycontrolspresencechecker:<tag>

   (see `bioconductor-healthycontrolspresencechecker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-healthycontrolspresencechecker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-healthycontrolspresencechecker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-healthycontrolspresencechecker
   :alt:   (downloads)
.. |docker_bioconductor-healthycontrolspresencechecker| image:: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker
.. _`bioconductor-healthycontrolspresencechecker/tags`: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-healthycontrolspresencechecker";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html