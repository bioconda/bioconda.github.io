:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlhub'
.. highlight: bash

bioconductor-rlhub
==================

.. conda:recipe:: bioconductor-rlhub
   :replaces_section_title:
   :noindex:

   An ExperimentHub package for accessing processed RLSuite data sets

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RLHub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rlhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlhub/meta.yaml>`_

   \| RLHub provides a convenient interface to the processed data provided within RLSuite\, a tool\-chain for analyzing R\-loop\-mapping data sets. The primary purpose of RLHub is to serve the processed data sets required by the RLSeq R package and the RLBase web service. Additionally\, RLHub provides a stand\-alone R interface to these data\, benefiting users who are addressing questions related to R\-loop regions \(RL\-Regions\)\, R\-loop\-binding proteins \(RLBPs\)\, R\-loop co\-localizing factors\, and the differences between R\-loop\-mapping methods. The full data\-generating protocol is found here\: https\:\/\/github.com\/Bishop\-Laboratory\/RLBase\-data.


.. conda:package:: bioconductor-rlhub

   |downloads_bioconductor-rlhub| |docker_bioconductor-rlhub|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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

      mamba install bioconductor-rlhub

   and update with::

      mamba update bioconductor-rlhub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rlhub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlhub:<tag>

   (see `bioconductor-rlhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlhub
   :alt:   (downloads)
.. |docker_bioconductor-rlhub| image:: https://quay.io/repository/biocontainers/bioconductor-rlhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlhub
.. _`bioconductor-rlhub/tags`: https://quay.io/repository/biocontainers/bioconductor-rlhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlhub";
        var versions = ["1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlhub/README.html