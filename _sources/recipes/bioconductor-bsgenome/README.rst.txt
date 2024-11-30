:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome'
.. highlight: bash

bioconductor-bsgenome
=====================

.. conda:recipe:: bioconductor-bsgenome
   :replaces_section_title:
   :noindex:

   Software infrastructure for efficient representation of full genomes and their SNPs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BSgenome.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome/meta.yaml>`_
   :links: biotools: :biotools:`bsgenome`, doi: :doi:`10.1038/nmeth.3252`

   Infrastructure shared by all the Biostrings\-based genome data packages.


.. conda:package:: bioconductor-bsgenome

   |downloads_bioconductor-bsgenome| |docker_bioconductor-bsgenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.1-0</code>,  <code>1.68.0-0</code>,  <code>1.66.3-0</code>,  <code>1.66.1-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.70.1-0``,  ``1.68.0-0``,  ``1.66.3-0``,  ``1.66.1-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.2-0``,  ``1.42.0-0``,  ``1.40.1-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocio: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
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

      mamba install bioconductor-bsgenome

   and update with::

      mamba update bioconductor-bsgenome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome:<tag>

   (see `bioconductor-bsgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome
.. _`bioconductor-bsgenome/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome";
        var versions = ["1.70.1","1.68.0","1.66.3","1.66.1","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome/README.html