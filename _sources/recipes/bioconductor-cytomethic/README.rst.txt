:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomethic'
.. highlight: bash

bioconductor-cytomethic
=======================

.. conda:recipe:: bioconductor-cytomethic
   :replaces_section_title:
   :noindex:

   DNA methylation\-based classification and regression

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CytoMethIC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytomethic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomethic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomethic/meta.yaml>`_

   This package provides DNA methylation\-based prediction of cancer type\, molecular signature and clinical outcomes. It provides convenience functions for missing value imputation\, probe ID conversion\, model interpretation and visualization. The package links to our models on ExperimentHub. The package currently supports HM450\, EPIC and EPICv2.


.. conda:package:: bioconductor-cytomethic

   |downloads_bioconductor-cytomethic| |docker_bioconductor-cytomethic|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-sesame: ``>=1.24.0,<1.25.0``
   :depends bioconductor-sesamedata: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-tibble: 
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

      mamba install bioconductor-cytomethic

   and update with::

      mamba update bioconductor-cytomethic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytomethic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytomethic:<tag>

   (see `bioconductor-cytomethic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytomethic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomethic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomethic
   :alt:   (downloads)
.. |docker_bioconductor-cytomethic| image:: https://quay.io/repository/biocontainers/bioconductor-cytomethic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomethic
.. _`bioconductor-cytomethic/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomethic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomethic";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomethic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomethic/README.html