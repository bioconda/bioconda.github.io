:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastseg'
.. highlight: bash

bioconductor-fastseg
====================

.. conda:recipe:: bioconductor-fastseg
   :replaces_section_title:
   :noindex:

   fastseg \- a fast segmentation algorithm

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fastseg.html
   :license: LGPL-3.0-or-later
   :recipe: /`bioconductor-fastseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg/meta.yaml>`_
   :links: biotools: :biotools:`fastseg`

   fastseg implements a very fast and efficient segmentation algorithm. It has similar functionality as DNACopy \(Olshen and Venkatraman 2004\)\, but is considerably faster and more flexible. fastseg can segment data from DNA microarrays and data from next generation sequencing for example to detect copy number segments. Further it can segment data from RNA microarrays like tiling arrays to identify transcripts. Most generally\, it can segment data given as a matrix or as a vector. Various data formats can be used as input to fastseg like expression set objects for microarrays or GRanges for sequencing data. The segmentation criterion of fastseg is based on a statistical test in a Bayesian framework\, namely the cyber t\-test \(Baldi 2001\). The speed\-up arises from the facts\, that sampling is not necessary in for fastseg and that a dynamic programming approach is used for calculation of the segments\' first and higher order moments.


.. conda:package:: bioconductor-fastseg

   |downloads_bioconductor-fastseg| |docker_bioconductor-fastseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-fastseg

   and update with::

      mamba update bioconductor-fastseg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fastseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastseg:<tag>

   (see `bioconductor-fastseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastseg
   :alt:   (downloads)
.. |docker_bioconductor-fastseg| image:: https://quay.io/repository/biocontainers/bioconductor-fastseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastseg
.. _`bioconductor-fastseg/tags`: https://quay.io/repository/biocontainers/bioconductor-fastseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fastseg";
        var versions = ["1.48.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastseg/README.html