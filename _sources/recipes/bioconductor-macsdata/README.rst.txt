:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsdata'
.. highlight: bash

bioconductor-macsdata
=====================

.. conda:recipe:: bioconductor-macsdata
   :replaces_section_title:
   :noindex:

   Test datasets for the MACSr package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MACSdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-macsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsdata/meta.yaml>`_

   Test datasets from the MACS3 test examples are use in the examples of the \`MACSr\` package. All 9 datasets are uploaded to the \`ExperimentHub\`. The original data can be found at\: https\:\/\/github.com\/macs3\-project\/MACS\/.


.. conda:package:: bioconductor-macsdata

   |downloads_bioconductor-macsdata| |docker_bioconductor-macsdata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-macsdata

   and update with::

      mamba update bioconductor-macsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macsdata:<tag>

   (see `bioconductor-macsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsdata
   :alt:   (downloads)
.. |docker_bioconductor-macsdata| image:: https://quay.io/repository/biocontainers/bioconductor-macsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsdata
.. _`bioconductor-macsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-macsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macsdata";
        var versions = ["1.14.0","1.10.0","1.8.0","1.5.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsdata/README.html