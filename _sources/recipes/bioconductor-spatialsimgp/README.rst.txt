:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialsimgp'
.. highlight: bash

bioconductor-spatialsimgp
=========================

.. conda:recipe:: bioconductor-spatialsimgp
   :replaces_section_title:
   :noindex:

   Simulate Spatial Transcriptomics Data with the Mean\-variance Relationship

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spatialSimGP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialsimgp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialsimgp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialsimgp/meta.yaml>`_

   This packages simulates spatial transcriptomics data with the mean\- variance relationship using a Gaussian Process model per gene.


.. conda:package:: bioconductor-spatialsimgp

   |downloads_bioconductor-spatialsimgp| |docker_bioconductor-spatialsimgp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-spatialsimgp

   and update with::

      mamba update bioconductor-spatialsimgp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialsimgp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialsimgp:<tag>

   (see `bioconductor-spatialsimgp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialsimgp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialsimgp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialsimgp
   :alt:   (downloads)
.. |docker_bioconductor-spatialsimgp| image:: https://quay.io/repository/biocontainers/bioconductor-spatialsimgp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialsimgp
.. _`bioconductor-spatialsimgp/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialsimgp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialsimgp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialsimgp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialsimgp/README.html