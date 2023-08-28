:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iaseq'
.. highlight: bash

bioconductor-iaseq
==================

.. conda:recipe:: bioconductor-iaseq
   :replaces_section_title:
   :noindex:

   iASeq\: integrating multiple sequencing datasets for detecting allele\-specific events

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/iASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-iaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq/meta.yaml>`_
   :links: biotools: :biotools:`iaseq`, doi: :doi:`10.1186/1471-2164-13-681`

   It fits correlation motif model to multiple RNAseq or ChIPseq studies to improve detection of allele\-specific events and describe correlation patterns across studies.


.. conda:package:: bioconductor-iaseq

   |downloads_bioconductor-iaseq| |docker_bioconductor-iaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-iaseq

   and update with::

      mamba update bioconductor-iaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iaseq:<tag>

   (see `bioconductor-iaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iaseq
   :alt:   (downloads)
.. |docker_bioconductor-iaseq| image:: https://quay.io/repository/biocontainers/bioconductor-iaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iaseq
.. _`bioconductor-iaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-iaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iaseq";
        var versions = ["1.44.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iaseq/README.html