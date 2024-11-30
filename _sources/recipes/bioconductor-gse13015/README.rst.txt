:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse13015'
.. highlight: bash

bioconductor-gse13015
=====================

.. conda:recipe:: bioconductor-gse13015
   :replaces_section_title:
   :noindex:

   GEO accession data GSE13015\_GPL6106 as a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/GSE13015.html
   :license: MIT License
   :recipe: /`bioconductor-gse13015 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015/meta.yaml>`_

   Microarray expression matrix platform GPL6106 and clinical data for 67 septicemic patients and made them available as GEO accession \[GSE13015\]\(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE13015\). GSE13015 data have been parsed into a SummarizedExperiment object available in ExperimentHub. This data data could be used as an example supporting BloodGen3Module R package.


.. conda:package:: bioconductor-gse13015

   |downloads_bioconductor-gse13015| |docker_bioconductor-gse13015|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-gse13015

   and update with::

      mamba update bioconductor-gse13015

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gse13015

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse13015:<tag>

   (see `bioconductor-gse13015/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse13015| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse13015.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse13015
   :alt:   (downloads)
.. |docker_bioconductor-gse13015| image:: https://quay.io/repository/biocontainers/bioconductor-gse13015/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse13015
.. _`bioconductor-gse13015/tags`: https://quay.io/repository/biocontainers/bioconductor-gse13015?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse13015";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse13015/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse13015/README.html