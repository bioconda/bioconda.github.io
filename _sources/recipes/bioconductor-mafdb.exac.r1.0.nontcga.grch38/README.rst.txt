:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.exac.r1.0.nontcga.grch38'
.. highlight: bash

bioconductor-mafdb.exac.r1.0.nontcga.grch38
===========================================

.. conda:recipe:: bioconductor-mafdb.exac.r1.0.nontcga.grch38
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from ExAC release 1.0 subset of nonTCGA exomes for GRCh38

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/MafDb.ExAC.r1.0.nonTCGA.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.exac.r1.0.nontcga.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.exac.r1.0.nontcga.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.exac.r1.0.nontcga.grch38/meta.yaml>`_

   Store minor allele frequency data from the Exome Aggregation Consortium \(ExAC release 1.0 subset of nonTCGA exomes\) for the human genome version GRCh38.


.. conda:package:: bioconductor-mafdb.exac.r1.0.nontcga.grch38

   |downloads_bioconductor-mafdb.exac.r1.0.nontcga.grch38| |docker_bioconductor-mafdb.exac.r1.0.nontcga.grch38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-10</code>,  <code>3.10.0-9</code>,  <code>3.10.0-8</code>,  <code>3.10.0-7</code>,  <code>3.10.0-6</code>,  <code>3.10.0-5</code>,  <code>3.10.0-4</code>,  <code>3.10.0-3</code>,  <code>3.10.0-2</code>,  </span></summary>
      

      ``3.10.0-10``,  ``3.10.0-9``,  ``3.10.0-8``,  ``3.10.0-7``,  ``3.10.0-6``,  ``3.10.0-5``,  ``3.10.0-4``,  ``3.10.0-3``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.7.0-2``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicscores: ``>=2.18.0,<2.19.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
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

      mamba install bioconductor-mafdb.exac.r1.0.nontcga.grch38

   and update with::

      mamba update bioconductor-mafdb.exac.r1.0.nontcga.grch38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mafdb.exac.r1.0.nontcga.grch38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.exac.r1.0.nontcga.grch38:<tag>

   (see `bioconductor-mafdb.exac.r1.0.nontcga.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.exac.r1.0.nontcga.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.exac.r1.0.nontcga.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.exac.r1.0.nontcga.grch38
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.exac.r1.0.nontcga.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.nontcga.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.nontcga.grch38
.. _`bioconductor-mafdb.exac.r1.0.nontcga.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.exac.r1.0.nontcga.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafdb.exac.r1.0.nontcga.grch38";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.exac.r1.0.nontcga.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.exac.r1.0.nontcga.grch38/README.html