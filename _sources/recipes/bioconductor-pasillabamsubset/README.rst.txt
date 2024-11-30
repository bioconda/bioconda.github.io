:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasillabamsubset'
.. highlight: bash

bioconductor-pasillabamsubset
=============================

.. conda:recipe:: bioconductor-pasillabamsubset
   :replaces_section_title:
   :noindex:

   Subset of BAM files from \"Pasilla\" experiment

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/pasillaBamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-pasillabamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillabamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillabamsubset/meta.yaml>`_

   Subset of BAM files untreated1.bam \(single\-end reads\) and untreated3.bam \(paired\-end reads\) from \"Pasilla\" experiment \(Pasilla knock\-down by Brooks et al.\, Genome Research 2011\). See the vignette in the pasilla data package for how BAM files untreated1.bam and untreated3.bam were obtained from the RNA\-Seq read sequence data that is provided by NCBI Gene Expression Omnibus under accession numbers GSM461176 to GSM461181.  Also contains the DNA sequence for fly chromosome 4 to which the reads can be mapped.


.. conda:package:: bioconductor-pasillabamsubset

   |downloads_bioconductor-pasillabamsubset| |docker_bioconductor-pasillabamsubset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.27.0-0</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-pasillabamsubset

   and update with::

      mamba update bioconductor-pasillabamsubset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pasillabamsubset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pasillabamsubset:<tag>

   (see `bioconductor-pasillabamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasillabamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasillabamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasillabamsubset
   :alt:   (downloads)
.. |docker_bioconductor-pasillabamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset
.. _`bioconductor-pasillabamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pasillabamsubset";
        var versions = ["0.40.0","0.38.0","0.35.0","0.32.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasillabamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasillabamsubset/README.html