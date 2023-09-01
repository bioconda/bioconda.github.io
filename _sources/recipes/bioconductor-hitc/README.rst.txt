:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hitc'
.. highlight: bash

bioconductor-hitc
=================

.. conda:recipe:: bioconductor-hitc
   :replaces_section_title:
   :noindex:

   High Throughput Chromosome Conformation Capture analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HiTC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hitc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc/meta.yaml>`_
   :links: biotools: :biotools:`hitc`

   The HiTC package was developed to explore high\-throughput \'C\' data such as 5C or Hi\-C. Dedicated R classes as well as standard methods for quality controls\, normalization\, visualization\, and further analysis are also provided.


.. conda:package:: bioconductor-hitc

   |downloads_bioconductor-hitc| |docker_bioconductor-hitc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-hitc

   and update with::

      mamba update bioconductor-hitc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hitc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hitc:<tag>

   (see `bioconductor-hitc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hitc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hitc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hitc
   :alt:   (downloads)
.. |docker_bioconductor-hitc| image:: https://quay.io/repository/biocontainers/bioconductor-hitc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hitc
.. _`bioconductor-hitc/tags`: https://quay.io/repository/biocontainers/bioconductor-hitc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hitc";
        var versions = ["1.44.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hitc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hitc/README.html