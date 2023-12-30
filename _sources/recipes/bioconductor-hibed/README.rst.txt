:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hibed'
.. highlight: bash

bioconductor-hibed
==================

.. conda:recipe:: bioconductor-hibed
   :replaces_section_title:
   :noindex:

   HiBED

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HiBED.html
   :license: GPL-3
   :recipe: /`bioconductor-hibed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hibed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hibed/meta.yaml>`_

   Hierarchical deconvolution for extensive cell type resolution in the human brain using DNA methylation. The HiBED deconvolution estimates proportions up to 7 cell types \(GABAergic neurons\, glutamatergic neurons\, astrocytes\, microglial cells\, oligodendrocytes\, endothelial cells\, and stromal cells\) in bulk brain tissues.


.. conda:package:: bioconductor-hibed

   |downloads_bioconductor-hibed| |docker_bioconductor-hibed|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-flowsorted.blood.epic: ``>=2.6.0,<2.7.0``
   :depends bioconductor-flowsorted.dlpfc.450k: ``>=1.38.0,<1.39.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-tibble: 
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

      mamba install bioconductor-hibed

   and update with::

      mamba update bioconductor-hibed

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hibed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hibed:<tag>

   (see `bioconductor-hibed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hibed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hibed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hibed
   :alt:   (downloads)
.. |docker_bioconductor-hibed| image:: https://quay.io/repository/biocontainers/bioconductor-hibed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hibed
.. _`bioconductor-hibed/tags`: https://quay.io/repository/biocontainers/bioconductor-hibed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hibed";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hibed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hibed/README.html