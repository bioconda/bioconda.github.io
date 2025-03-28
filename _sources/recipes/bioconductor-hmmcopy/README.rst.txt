:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmmcopy'
.. highlight: bash

bioconductor-hmmcopy
====================

.. conda:recipe:: bioconductor-hmmcopy
   :replaces_section_title:
   :noindex:

   Copy number prediction with correction for GC and mappability bias for HTS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HMMcopy.html
   :license: GPL-3
   :recipe: /`bioconductor-hmmcopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy/meta.yaml>`_
   :links: biotools: :biotools:`hmmcopy`, doi: :doi:`10.1038/nmeth.3252`

   Corrects GC and mappability biases for readcounts \(i.e. coverage\) in non\-overlapping windows of fixed length for single whole genome samples\, yielding a rough estimate of copy number for furthur analysis.  Designed for rapid correction of high coverage whole genome tumour and normal samples.


.. conda:package:: bioconductor-hmmcopy

   |downloads_bioconductor-hmmcopy| |docker_bioconductor-hmmcopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
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

      mamba install bioconductor-hmmcopy

   and update with::

      mamba update bioconductor-hmmcopy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hmmcopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmmcopy:<tag>

   (see `bioconductor-hmmcopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmmcopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmmcopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmmcopy
   :alt:   (downloads)
.. |docker_bioconductor-hmmcopy| image:: https://quay.io/repository/biocontainers/bioconductor-hmmcopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmmcopy
.. _`bioconductor-hmmcopy/tags`: https://quay.io/repository/biocontainers/bioconductor-hmmcopy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmmcopy";
        var versions = ["1.48.0","1.44.0","1.44.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html