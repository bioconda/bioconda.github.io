:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chromium'
.. highlight: bash

r-chromium
==========

.. conda:recipe:: r-chromium
   :replaces_section_title:
   :noindex:

   Toolkit for 10X Genomics Chromium single cell data.

   :homepage: https://r.acidgenomics.com/packages/chromium/
   :developer docs: https://github.com/acidgenomics/r-chromium
   :license: GPL / AGPL-3.0
   :recipe: /`r-chromium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromium/meta.yaml>`_

   


.. conda:package:: r-chromium

   |downloads_r-chromium| |docker_r-chromium|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.42.0``
   :depends bioconductor-s4vectors: ``>=0.36.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0``
   :depends r-acidbase: ``>=0.6.12``
   :depends r-acidcli: ``>=0.2.7``
   :depends r-acidexperiment: ``>=0.4.5``
   :depends r-acidgenerics: ``>=0.6.6``
   :depends r-acidgenomes: ``>=0.4.7``
   :depends r-acidplyr: ``>=0.3.6``
   :depends r-acidsinglecell: ``>=0.3.4``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.8``
   :depends r-matrix: ``>=1.5.1``
   :depends r-pipette: ``>=0.10.3``
   :depends r-stringi: ``>=1.7.12``
   :depends r-syntactic: ``>=0.6.4``
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

      mamba install r-chromium

   and update with::

      mamba update r-chromium

  To create a new environment, run::

      mamba create --name myenvname r-chromium

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-chromium:<tag>

   (see `r-chromium/tags`_ for valid values for ``<tag>``)


.. |downloads_r-chromium| image:: https://img.shields.io/conda/dn/bioconda/r-chromium.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chromium
   :alt:   (downloads)
.. |docker_r-chromium| image:: https://quay.io/repository/biocontainers/r-chromium/status
   :target: https://quay.io/repository/biocontainers/r-chromium
.. _`r-chromium/tags`: https://quay.io/repository/biocontainers/r-chromium?tab=tags


.. raw:: html

    <script>
        var package = "r-chromium";
        var versions = ["0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chromium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chromium/README.html