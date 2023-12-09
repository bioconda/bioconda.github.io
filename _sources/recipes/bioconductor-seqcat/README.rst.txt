:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcat'
.. highlight: bash

bioconductor-seqcat
===================

.. conda:recipe:: bioconductor-seqcat
   :replaces_section_title:
   :noindex:

   High Throughput Sequencing Cell Authentication Toolkit

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/seqCAT.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-seqcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcat/meta.yaml>`_

   The seqCAT package uses variant calling data \(in the form of VCF files\) from high throughput sequencing technologies to authenticate and validate the source\, function and characteristics of biological samples used in scientific endeavours.


.. conda:package:: bioconductor-seqcat

   |downloads_bioconductor-seqcat| |docker_bioconductor-seqcat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.5.0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-rlang: 
   :depends r-scales: ``>=0.4.1``
   :depends r-tidyr: ``>=0.6.1``
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

      mamba install bioconductor-seqcat

   and update with::

      mamba update bioconductor-seqcat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqcat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcat:<tag>

   (see `bioconductor-seqcat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcat
   :alt:   (downloads)
.. |docker_bioconductor-seqcat| image:: https://quay.io/repository/biocontainers/bioconductor-seqcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcat
.. _`bioconductor-seqcat/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqcat";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.1","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcat/README.html