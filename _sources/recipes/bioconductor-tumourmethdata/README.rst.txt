:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tumourmethdata'
.. highlight: bash

bioconductor-tumourmethdata
===========================

.. conda:recipe:: bioconductor-tumourmethdata
   :replaces_section_title:
   :noindex:

   A Collection of DNA Methylation Datasets for Human Tumour Samples and Matching Normal Samples

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/TumourMethData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tumourmethdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tumourmethdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tumourmethdata/meta.yaml>`_

   TumourMethData collects tumour methylation data from a variety of different tumour types \(and also matching normal samples where available\) and produced with different technologies \(e.g. WGBS\, RRBS and methylation arrays\) and provides them as RangedSummarizedExperiments. This facilitates easy extraction of methylation data for regions of interest across different tumour types and studies.


.. conda:package:: bioconductor-tumourmethdata

   |downloads_bioconductor-tumourmethdata| |docker_bioconductor-tumourmethdata|

   :versions:
      
      

      ``1.3.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r.utils: 
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

      mamba install bioconductor-tumourmethdata

   and update with::

      mamba update bioconductor-tumourmethdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tumourmethdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tumourmethdata:<tag>

   (see `bioconductor-tumourmethdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tumourmethdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tumourmethdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tumourmethdata
   :alt:   (downloads)
.. |docker_bioconductor-tumourmethdata| image:: https://quay.io/repository/biocontainers/bioconductor-tumourmethdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tumourmethdata
.. _`bioconductor-tumourmethdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tumourmethdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tumourmethdata";
        var versions = ["1.3.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tumourmethdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tumourmethdata/README.html