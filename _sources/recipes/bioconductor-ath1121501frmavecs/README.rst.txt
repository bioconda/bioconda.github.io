:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ath1121501frmavecs'
.. highlight: bash

bioconductor-ath1121501frmavecs
===============================

.. conda:recipe:: bioconductor-ath1121501frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type ath1121501

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ath1121501frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ath1121501frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ath1121501frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ath1121501frmavecs/meta.yaml>`_

   Annotation package for the implementation of the frozen Robust Multiarray Analysis procedure for Arabidopsis thaliana. This package was generated on the basis of frmaTools version 1.52.0.


.. conda:package:: bioconductor-ath1121501frmavecs

   |downloads_bioconductor-ath1121501frmavecs| |docker_bioconductor-ath1121501frmavecs|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install bioconductor-ath1121501frmavecs

   and update with::

      mamba update bioconductor-ath1121501frmavecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ath1121501frmavecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ath1121501frmavecs:<tag>

   (see `bioconductor-ath1121501frmavecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ath1121501frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ath1121501frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ath1121501frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-ath1121501frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-ath1121501frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ath1121501frmavecs
.. _`bioconductor-ath1121501frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-ath1121501frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ath1121501frmavecs";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ath1121501frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ath1121501frmavecs/README.html