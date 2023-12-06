:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimodalexperiment'
.. highlight: bash

bioconductor-multimodalexperiment
=================================

.. conda:recipe:: bioconductor-multimodalexperiment
   :replaces_section_title:
   :noindex:

   Integrative Bulk and Single\-Cell Experiment Container

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MultimodalExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-multimodalexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimodalexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimodalexperiment/meta.yaml>`_

   MultimodalExperiment is an S4 class that integrates bulk and single\-cell experiment data\; it is optimally storage\-efficient\, and its methods are exceptionally fast. It effortlessly represents multimodal data of any nature and features normalized experiment\, subject\, sample\, and cell annotations\, which are related to underlying biological experiments through maps. Its coordination methods are opt\-in and employ database\-like join operations internally to deliver fast and flexible management of multimodal data.


.. conda:package:: bioconductor-multimodalexperiment

   |downloads_bioconductor-multimodalexperiment| |docker_bioconductor-multimodalexperiment|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-multimodalexperiment

   and update with::

      mamba update bioconductor-multimodalexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multimodalexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multimodalexperiment:<tag>

   (see `bioconductor-multimodalexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multimodalexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimodalexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimodalexperiment
   :alt:   (downloads)
.. |docker_bioconductor-multimodalexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment
.. _`bioconductor-multimodalexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimodalexperiment";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimodalexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimodalexperiment/README.html