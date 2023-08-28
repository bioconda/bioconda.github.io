:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhisat2'
.. highlight: bash

bioconductor-rhisat2
====================

.. conda:recipe:: bioconductor-rhisat2
   :replaces_section_title:
   :noindex:

   R Wrapper for HISAT2 Aligner

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rhisat2.html
   :license: GPL-3
   :recipe: /`bioconductor-rhisat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhisat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhisat2/meta.yaml>`_

   An R interface to the HISAT2 spliced short\-read aligner by Kim et al. \(2015\). The package contains wrapper functions to create a genome index and to perform the read alignment to the generated index.


.. conda:package:: bioconductor-rhisat2

   |downloads_bioconductor-rhisat2| |docker_bioconductor-rhisat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-sgseq: ``>=1.34.0,<1.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install bioconductor-rhisat2

   and update with::

      mamba update bioconductor-rhisat2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rhisat2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhisat2:<tag>

   (see `bioconductor-rhisat2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhisat2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhisat2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhisat2
   :alt:   (downloads)
.. |docker_bioconductor-rhisat2| image:: https://quay.io/repository/biocontainers/bioconductor-rhisat2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhisat2
.. _`bioconductor-rhisat2/tags`: https://quay.io/repository/biocontainers/bioconductor-rhisat2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhisat2";
        var versions = ["1.16.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhisat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhisat2/README.html