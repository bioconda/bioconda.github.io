:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scpdata'
.. highlight: bash

bioconductor-scpdata
====================

.. conda:recipe:: bioconductor-scpdata
   :replaces_section_title:
   :noindex:

   Single\-Cell Proteomics Data Package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/scpdata.html
   :license: GPL-2
   :recipe: /`bioconductor-scpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpdata/meta.yaml>`_

   The package disseminates mass spectrometry \(MS\)\-based single\-cell proteomics \(SCP\) datasets. The data were collected from published work and formatted using the \`scp\` data structure. The data sets contain quantitative information at spectrum\, peptide and\/or protein level for single cells or minute sample amounts.


.. conda:package:: bioconductor-scpdata

   |downloads_bioconductor-scpdata| |docker_bioconductor-scpdata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-qfeatures: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-scpdata

   and update with::

      mamba update bioconductor-scpdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scpdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scpdata:<tag>

   (see `bioconductor-scpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scpdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scpdata
   :alt:   (downloads)
.. |docker_bioconductor-scpdata| image:: https://quay.io/repository/biocontainers/bioconductor-scpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scpdata
.. _`bioconductor-scpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-scpdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scpdata";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scpdata/README.html