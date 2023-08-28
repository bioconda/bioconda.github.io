:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscdata'
.. highlight: bash

bioconductor-muscdata
=====================

.. conda:recipe:: bioconductor-muscdata
   :replaces_section_title:
   :noindex:

   Multi\-sample multi\-group scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/muscData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-muscdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscdata/meta.yaml>`_

   Data package containing a collection of multi\-sample multi\-group scRNA\-seq datasets in SingleCellExperiment Bioconductor object format.


.. conda:package:: bioconductor-muscdata

   |downloads_bioconductor-muscdata| |docker_bioconductor-muscdata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-muscdata

   and update with::

      mamba update bioconductor-muscdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-muscdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscdata:<tag>

   (see `bioconductor-muscdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscdata
   :alt:   (downloads)
.. |docker_bioconductor-muscdata| image:: https://quay.io/repository/biocontainers/bioconductor-muscdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscdata
.. _`bioconductor-muscdata/tags`: https://quay.io/repository/biocontainers/bioconductor-muscdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-muscdata";
        var versions = ["1.14.0","1.12.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscdata/README.html