:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vcfarray'
.. highlight: bash

bioconductor-vcfarray
=====================

.. conda:recipe:: bioconductor-vcfarray
   :replaces_section_title:
   :noindex:

   Representing on\-disk \/ remote VCF files as array\-like objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VCFArray.html
   :license: GPL-3
   :recipe: /`bioconductor-vcfarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vcfarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vcfarray/meta.yaml>`_

   VCFArray extends the DelayedArray to represent VCF data entries as array\-like objects with on\-disk \/ remote VCF file as backend. Data entries from VCF files\, including info fields\, FORMAT fields\, and the fixed columns \(REF\, ALT\, QUAL\, FILTER\) could be converted into VCFArray instances with different dimensions.


.. conda:package:: bioconductor-vcfarray

   |downloads_bioconductor-vcfarray| |docker_bioconductor-vcfarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-genomicfiles: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
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

      mamba install bioconductor-vcfarray

   and update with::

      mamba update bioconductor-vcfarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vcfarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vcfarray:<tag>

   (see `bioconductor-vcfarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vcfarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vcfarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vcfarray
   :alt:   (downloads)
.. |docker_bioconductor-vcfarray| image:: https://quay.io/repository/biocontainers/bioconductor-vcfarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vcfarray
.. _`bioconductor-vcfarray/tags`: https://quay.io/repository/biocontainers/bioconductor-vcfarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vcfarray";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vcfarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vcfarray/README.html