:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.ucsc.snp135common.hg19'
.. highlight: bash

bioconductor-fdb.ucsc.snp135common.hg19
=======================================

.. conda:recipe:: bioconductor-fdb.ucsc.snp135common.hg19
   :replaces_section_title:
   :noindex:

   UCSC common SNPs track for dbSNP build 135

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/FDb.UCSC.snp135common.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.snp135common.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.snp135common.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.snp135common.hg19/meta.yaml>`_

   makeFeatureDbFromUCSC cannot cope with this track\, hence a package


.. conda:package:: bioconductor-fdb.ucsc.snp135common.hg19

   |downloads_bioconductor-fdb.ucsc.snp135common.hg19| |docker_bioconductor-fdb.ucsc.snp135common.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-11</code>,  <code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  </span></summary>
      

      ``1.0.0-11``,  ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-fdb.ucsc.snp135common.hg19

   and update with::

      mamba update bioconductor-fdb.ucsc.snp135common.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fdb.ucsc.snp135common.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19:<tag>

   (see `bioconductor-fdb.ucsc.snp135common.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.ucsc.snp135common.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.snp135common.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.ucsc.snp135common.hg19
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.snp135common.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19
.. _`bioconductor-fdb.ucsc.snp135common.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.ucsc.snp135common.hg19";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.snp135common.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.snp135common.hg19/README.html