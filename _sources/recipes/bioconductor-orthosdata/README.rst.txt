:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orthosdata'
.. highlight: bash

bioconductor-orthosdata
=======================

.. conda:recipe:: bioconductor-orthosdata
   :replaces_section_title:
   :noindex:

   Data for the orthos package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/orthosData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orthosdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthosdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthosdata/meta.yaml>`_

   \`orthosData\` is the companion ExperimentData package to the \`orthos\` R package for mechanistic studies using differential gene expression experiments. It provides functions for retrieval from ExperimentHub and local caching of the models and datasets used internally in orthos.


.. conda:package:: bioconductor-orthosdata

   |downloads_bioconductor-orthosdata| |docker_bioconductor-orthosdata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-orthosdata

   and update with::

      mamba update bioconductor-orthosdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orthosdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orthosdata:<tag>

   (see `bioconductor-orthosdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orthosdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orthosdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orthosdata
   :alt:   (downloads)
.. |docker_bioconductor-orthosdata| image:: https://quay.io/repository/biocontainers/bioconductor-orthosdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orthosdata
.. _`bioconductor-orthosdata/tags`: https://quay.io/repository/biocontainers/bioconductor-orthosdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orthosdata";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orthosdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orthosdata/README.html