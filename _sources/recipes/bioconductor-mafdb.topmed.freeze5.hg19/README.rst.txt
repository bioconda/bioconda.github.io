:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.topmed.freeze5.hg19'
.. highlight: bash

bioconductor-mafdb.topmed.freeze5.hg19
======================================

.. conda:recipe:: bioconductor-mafdb.topmed.freeze5.hg19
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from TOPMed for hg19

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/MafDb.TOPMed.freeze5.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.topmed.freeze5.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.topmed.freeze5.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.topmed.freeze5.hg19/meta.yaml>`_

   Store minor allele frequency data from NHLBI TOPMed for the human genome version hg19.


.. conda:package:: bioconductor-mafdb.topmed.freeze5.hg19

   |downloads_bioconductor-mafdb.topmed.freeze5.hg19| |docker_bioconductor-mafdb.topmed.freeze5.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-9</code>,  <code>3.10.0-8</code>,  <code>3.10.0-7</code>,  <code>3.10.0-6</code>,  <code>3.10.0-5</code>,  <code>3.10.0-4</code>,  <code>3.10.0-2</code>,  <code>3.10.0-1</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.10.0-9``,  ``3.10.0-8``,  ``3.10.0-7``,  ``3.10.0-6``,  ``3.10.0-5``,  ``3.10.0-4``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.9.0-1``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicscores: ``>=2.14.0,<2.15.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-mafdb.topmed.freeze5.hg19

   and update with::

      mamba update bioconductor-mafdb.topmed.freeze5.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mafdb.topmed.freeze5.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.topmed.freeze5.hg19:<tag>

   (see `bioconductor-mafdb.topmed.freeze5.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.topmed.freeze5.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.topmed.freeze5.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.topmed.freeze5.hg19
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.topmed.freeze5.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg19
.. _`bioconductor-mafdb.topmed.freeze5.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.topmed.freeze5.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafdb.topmed.freeze5.hg19";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.topmed.freeze5.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.topmed.freeze5.hg19/README.html