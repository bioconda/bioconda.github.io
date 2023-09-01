:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfpred'
.. highlight: bash

bioconductor-rfpred
===================

.. conda:recipe:: bioconductor-rfpred
   :replaces_section_title:
   :noindex:

   Assign rfPred functional prediction scores to a missense variants list

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rfPred.html
   :license: GPL (>=2 )
   :recipe: /`bioconductor-rfpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfpred/meta.yaml>`_
   :links: biotools: :biotools:`rfpred`, doi: :doi:`10.1101/037127`

   Based on external numerous data files where rfPred scores are pre\-calculated on all genomic positions of the human exome\, the package gives rfPred scores to missense variants identified by the chromosome\, the position \(hg19 version\)\, the referent and alternative nucleotids and the uniprot identifier of the protein. Note that for using the package\, the user has to download the TabixFile and index \(approximately 3.3 Go\).


.. conda:package:: bioconductor-rfpred

   |downloads_bioconductor-rfpred| |docker_bioconductor-rfpred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-rfpred

   and update with::

      mamba update bioconductor-rfpred

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rfpred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rfpred:<tag>

   (see `bioconductor-rfpred/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rfpred| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfpred.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfpred
   :alt:   (downloads)
.. |docker_bioconductor-rfpred| image:: https://quay.io/repository/biocontainers/bioconductor-rfpred/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfpred
.. _`bioconductor-rfpred/tags`: https://quay.io/repository/biocontainers/bioconductor-rfpred?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rfpred";
        var versions = ["1.38.0","1.36.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfpred/README.html