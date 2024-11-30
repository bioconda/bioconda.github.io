:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdmelxsim'
.. highlight: bash

bioconductor-spatialdmelxsim
============================

.. conda:recipe:: bioconductor-spatialdmelxsim
   :replaces_section_title:
   :noindex:

   Spatial allelic expression counts for fly cross embryo

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/spatialDmelxsim.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialdmelxsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdmelxsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdmelxsim/meta.yaml>`_

   Spatial allelic expression counts from Combs \& Fraser \(2018\)\, compiled into a SummarizedExperiment object. This package contains data of allelic expression counts of spatial slices of a fly embryo\, a Drosophila melanogaster x Drosophila simulans cross. See the CITATION file for the data source\, and the associated script for how the object was constructed from publicly available data.


.. conda:package:: bioconductor-spatialdmelxsim

   |downloads_bioconductor-spatialdmelxsim| |docker_bioconductor-spatialdmelxsim|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-spatialdmelxsim

   and update with::

      mamba update bioconductor-spatialdmelxsim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialdmelxsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialdmelxsim:<tag>

   (see `bioconductor-spatialdmelxsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialdmelxsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdmelxsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdmelxsim
   :alt:   (downloads)
.. |docker_bioconductor-spatialdmelxsim| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim
.. _`bioconductor-spatialdmelxsim/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialdmelxsim";
        var versions = ["1.8.0","1.6.1","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdmelxsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdmelxsim/README.html