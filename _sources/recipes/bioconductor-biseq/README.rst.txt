:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biseq'
.. highlight: bash

bioconductor-biseq
==================

.. conda:recipe:: bioconductor-biseq
   :replaces_section_title:
   :noindex:

   Processing and analyzing bisulfite sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiSeq.html
   :license: LGPL-3
   :recipe: /`bioconductor-biseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq/meta.yaml>`_
   :links: biotools: :biotools:`biseq`, doi: :doi:`10.1093/bib/bbv095`

   The BiSeq package provides useful classes and functions to handle and analyze targeted bisulfite sequencing \(BS\) data such as reduced\-representation bisulfite sequencing \(RRBS\) data. In particular\, it implements an algorithm to detect differentially methylated regions \(DMRs\). The package takes already aligned BS data from one or multiple samples.


.. conda:package:: bioconductor-biseq

   |downloads_bioconductor-biseq| |docker_bioconductor-biseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-globaltest: ``>=5.60.0,<5.61.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-betareg: 
   :depends r-formula: 
   :depends r-lokern: 
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

      mamba install bioconductor-biseq

   and update with::

      mamba update bioconductor-biseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biseq:<tag>

   (see `bioconductor-biseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biseq
   :alt:   (downloads)
.. |docker_bioconductor-biseq| image:: https://quay.io/repository/biocontainers/bioconductor-biseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biseq
.. _`bioconductor-biseq/tags`: https://quay.io/repository/biocontainers/bioconductor-biseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biseq";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biseq/README.html