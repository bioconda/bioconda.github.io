:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doppelgangr'
.. highlight: bash

bioconductor-doppelgangr
========================

.. conda:recipe:: bioconductor-doppelgangr
   :replaces_section_title:
   :noindex:

   Identify likely duplicate samples from genomic or meta\-data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/doppelgangR.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-doppelgangr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr/meta.yaml>`_
   :links: biotools: :biotools:`doppelgangr`, doi: :doi:`10.1093/jnci/djw146`

   The main function is doppelgangR\(\)\, which takes as minimal input a list of ExpressionSet object\, and searches all list pairs for duplicated samples.  The search is based on the genomic data \(exprs\(eset\)\)\, phenotype\/clinical data \(pData\(eset\)\)\, and \"smoking guns\" \- supposedly unique identifiers found in pData\(eset\).


.. conda:package:: bioconductor-doppelgangr

   |downloads_bioconductor-doppelgangr| |docker_bioconductor-doppelgangr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-digest: 
   :depends r-mnormt: 
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

      mamba install bioconductor-doppelgangr

   and update with::

      mamba update bioconductor-doppelgangr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-doppelgangr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doppelgangr:<tag>

   (see `bioconductor-doppelgangr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doppelgangr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doppelgangr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doppelgangr
   :alt:   (downloads)
.. |docker_bioconductor-doppelgangr| image:: https://quay.io/repository/biocontainers/bioconductor-doppelgangr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doppelgangr
.. _`bioconductor-doppelgangr/tags`: https://quay.io/repository/biocontainers/bioconductor-doppelgangr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doppelgangr";
        var versions = ["1.34.0","1.30.0","1.28.1","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html