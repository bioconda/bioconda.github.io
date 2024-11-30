:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvseq'
.. highlight: bash

bioconductor-ruvseq
===================

.. conda:recipe:: bioconductor-ruvseq
   :replaces_section_title:
   :noindex:

   Remove Unwanted Variation from RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RUVSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ruvseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq/meta.yaml>`_
   :links: biotools: :biotools:`ruvseq`

   This package implements the remove unwanted variation \(RUV\) methods of Risso et al. \(2014\) for the normalization of RNA\-Seq read counts between samples.


.. conda:package:: bioconductor-ruvseq

   |downloads_bioconductor-ruvseq| |docker_bioconductor-ruvseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-edaseq: ``>=2.36.0,<2.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-ruvseq

   and update with::

      mamba update bioconductor-ruvseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ruvseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvseq:<tag>

   (see `bioconductor-ruvseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvseq
   :alt:   (downloads)
.. |docker_bioconductor-ruvseq| image:: https://quay.io/repository/biocontainers/bioconductor-ruvseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvseq
.. _`bioconductor-ruvseq/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvseq";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html