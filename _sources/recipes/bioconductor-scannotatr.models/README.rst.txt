:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scannotatr.models'
.. highlight: bash

bioconductor-scannotatr.models
==============================

.. conda:recipe:: bioconductor-scannotatr.models
   :replaces_section_title:
   :noindex:

   Pretrained models for scAnnotatR package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/scAnnotatR.models.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scannotatr.models <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr.models>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr.models/meta.yaml>`_

   Pretrained models for scAnnotatR package. These models can be used to automatically classify several \(immune\) cell types in human scRNA\-seq data.


.. conda:package:: bioconductor-scannotatr.models

   |downloads_bioconductor-scannotatr.models| |docker_bioconductor-scannotatr.models|

   :versions:
      
      

      ``0.99.10-3``,  ``0.99.10-2``,  ``0.99.10-1``,  ``0.99.10-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-scannotatr.models

   and update with::

      mamba update bioconductor-scannotatr.models

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scannotatr.models

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scannotatr.models:<tag>

   (see `bioconductor-scannotatr.models/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scannotatr.models| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scannotatr.models.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scannotatr.models
   :alt:   (downloads)
.. |docker_bioconductor-scannotatr.models| image:: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models
.. _`bioconductor-scannotatr.models/tags`: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scannotatr.models";
        var versions = ["0.99.10","0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scannotatr.models/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scannotatr.models/README.html