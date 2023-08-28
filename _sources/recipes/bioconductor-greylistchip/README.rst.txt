:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-greylistchip'
.. highlight: bash

bioconductor-greylistchip
=========================

.. conda:recipe:: bioconductor-greylistchip
   :replaces_section_title:
   :noindex:

   Grey Lists \-\- Mask Artefact Regions Based on ChIP Inputs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GreyListChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-greylistchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-greylistchip/meta.yaml>`_

   Identify regions of ChIP experiments with high signal in the input\, that lead to spurious peaks during peak calling. Remove reads aligning to these regions prior to peak calling\, for cleaner ChIP analysis.


.. conda:package:: bioconductor-greylistchip

   |downloads_bioconductor-greylistchip| |docker_bioconductor-greylistchip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-greylistchip

   and update with::

      mamba update bioconductor-greylistchip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-greylistchip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-greylistchip:<tag>

   (see `bioconductor-greylistchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-greylistchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-greylistchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-greylistchip
   :alt:   (downloads)
.. |docker_bioconductor-greylistchip| image:: https://quay.io/repository/biocontainers/bioconductor-greylistchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-greylistchip
.. _`bioconductor-greylistchip/tags`: https://quay.io/repository/biocontainers/bioconductor-greylistchip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-greylistchip";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-greylistchip/README.html