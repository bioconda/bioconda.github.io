:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmdiffbamsubset'
.. highlight: bash

bioconductor-mmdiffbamsubset
============================

.. conda:recipe:: bioconductor-mmdiffbamsubset
   :replaces_section_title:
   :noindex:

   Example ChIP\-Seq data for the MMDiff package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MMDiffBamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-mmdiffbamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset/meta.yaml>`_

   Subset of BAM files\, including WT\_2.bam\, Null\_2.bam\, Resc\_2.bam\, Input.bam from the \"Cfp1\" experiment \(see Clouaire et al.\, Genes Dev. 2012\). Data is available under ArrayExpress accession numbers E\-ERAD\-79. Additionally\, corresponding subset of peaks called by MACS


.. conda:package:: bioconductor-mmdiffbamsubset

   |downloads_bioconductor-mmdiffbamsubset| |docker_bioconductor-mmdiffbamsubset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-mmdiffbamsubset

   and update with::

      mamba update bioconductor-mmdiffbamsubset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mmdiffbamsubset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmdiffbamsubset:<tag>

   (see `bioconductor-mmdiffbamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmdiffbamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiffbamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmdiffbamsubset
   :alt:   (downloads)
.. |docker_bioconductor-mmdiffbamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset
.. _`bioconductor-mmdiffbamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmdiffbamsubset";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html