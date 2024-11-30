:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicdistributionsdata'
.. highlight: bash

bioconductor-genomicdistributionsdata
=====================================

.. conda:recipe:: bioconductor-genomicdistributionsdata
   :replaces_section_title:
   :noindex:

   Reference data for GenomicDistributions package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/GenomicDistributionsData.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-genomicdistributionsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributionsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributionsdata/meta.yaml>`_

   This package provides ready to use reference data for GenomicDistributions package. Raw data was obtained from ensembldb and processed with helper functions. Data files are available for the following genome assemblies\: hg19\, hg38\, mm9 and mm10.


.. conda:package:: bioconductor-genomicdistributionsdata

   |downloads_bioconductor-genomicdistributionsdata| |docker_bioconductor-genomicdistributionsdata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-genomicdistributionsdata

   and update with::

      mamba update bioconductor-genomicdistributionsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicdistributionsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicdistributionsdata:<tag>

   (see `bioconductor-genomicdistributionsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicdistributionsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdistributionsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicdistributionsdata
   :alt:   (downloads)
.. |docker_bioconductor-genomicdistributionsdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata
.. _`bioconductor-genomicdistributionsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicdistributionsdata";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdistributionsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdistributionsdata/README.html