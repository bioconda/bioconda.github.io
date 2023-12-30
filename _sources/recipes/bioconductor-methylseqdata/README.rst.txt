:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylseqdata'
.. highlight: bash

bioconductor-methylseqdata
==========================

.. conda:recipe:: bioconductor-methylseqdata
   :replaces_section_title:
   :noindex:

   Collection of Public DNA Methylation Sequencing Datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MethylSeqData.html
   :license: CC0
   :recipe: /`bioconductor-methylseqdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseqdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseqdata/meta.yaml>`_

   Base\-level \(i.e. cytosine\-level\) counts for a collection of public bisulfite\-seq datasets \(e.g.\, WGBS and RRBS\)\, provided as SummarizedExperiment objects with sample\- and base\-level metadata.


.. conda:package:: bioconductor-methylseqdata

   |downloads_bioconductor-methylseqdata| |docker_bioconductor-methylseqdata|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-methylseqdata

   and update with::

      mamba update bioconductor-methylseqdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylseqdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylseqdata:<tag>

   (see `bioconductor-methylseqdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylseqdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylseqdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylseqdata
   :alt:   (downloads)
.. |docker_bioconductor-methylseqdata| image:: https://quay.io/repository/biocontainers/bioconductor-methylseqdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylseqdata
.. _`bioconductor-methylseqdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylseqdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylseqdata";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylseqdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylseqdata/README.html