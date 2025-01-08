:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-squallms'
.. highlight: bash

bioconductor-squallms
=====================

.. conda:recipe:: bioconductor-squallms
   :replaces_section_title:
   :noindex:

   Speedy quality assurance via lasso labeling for LC\-MS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/squallms.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-squallms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squallms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squallms/meta.yaml>`_

   squallms is a Bioconductor R package that implements a \"semi\-labeled\" approach to untargeted mass spectrometry data. It pulls in raw data from mass\-spec files to calculate several metrics that are then used to label MS features in bulk as high or low quality. These metrics of peak quality are then passed to a simple logistic model that produces a fully\-labeled dataset suitable for downstream analysis.


.. conda:package:: bioconductor-squallms

   |downloads_bioconductor-squallms| |docker_bioconductor-squallms|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-squallms

   and update with::

      mamba update bioconductor-squallms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-squallms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-squallms:<tag>

   (see `bioconductor-squallms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-squallms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-squallms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-squallms
   :alt:   (downloads)
.. |docker_bioconductor-squallms| image:: https://quay.io/repository/biocontainers/bioconductor-squallms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-squallms
.. _`bioconductor-squallms/tags`: https://quay.io/repository/biocontainers/bioconductor-squallms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-squallms";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-squallms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-squallms/README.html