:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprscoredata'
.. highlight: bash

bioconductor-crisprscoredata
============================

.. conda:recipe:: bioconductor-crisprscoredata
   :replaces_section_title:
   :noindex:

   Pre\-trained models for the crisprScore package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/crisprScoreData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprscoredata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscoredata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscoredata/meta.yaml>`_

   Provides an interface to access pre\-trained models for on\-target and off\-target gRNA activity prediction algorithms implemented in the crisprScore package. Pre\-trained model data are stored in the ExperimentHub database. Users should consider using the crisprScore package directly to use and load the pre\-trained models.


.. conda:package:: bioconductor-crisprscoredata

   |downloads_bioconductor-crisprscoredata| |docker_bioconductor-crisprscoredata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-crisprscoredata

   and update with::

      mamba update bioconductor-crisprscoredata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprscoredata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprscoredata:<tag>

   (see `bioconductor-crisprscoredata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprscoredata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprscoredata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprscoredata
   :alt:   (downloads)
.. |docker_bioconductor-crisprscoredata| image:: https://quay.io/repository/biocontainers/bioconductor-crisprscoredata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprscoredata
.. _`bioconductor-crisprscoredata/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprscoredata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprscoredata";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprscoredata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprscoredata/README.html