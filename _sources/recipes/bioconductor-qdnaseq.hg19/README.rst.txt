:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qdnaseq.hg19'
.. highlight: bash

bioconductor-qdnaseq.hg19
=========================

.. conda:recipe:: bioconductor-qdnaseq.hg19
   :replaces_section_title:
   :noindex:

   QDNAseq bin annotation for hg19

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/QDNAseq.hg19.html
   :license: GPL
   :recipe: /`bioconductor-qdnaseq.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq.hg19/meta.yaml>`_

   This package provides QDNAseq bin annotations for the human genome build hg19.


.. conda:package:: bioconductor-qdnaseq.hg19

   |downloads_bioconductor-qdnaseq.hg19| |docker_bioconductor-qdnaseq.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-qdnaseq: ``>=1.42.0,<1.43.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-qdnaseq.hg19

   and update with::

      mamba update bioconductor-qdnaseq.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qdnaseq.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qdnaseq.hg19:<tag>

   (see `bioconductor-qdnaseq.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qdnaseq.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qdnaseq.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qdnaseq.hg19
   :alt:   (downloads)
.. |docker_bioconductor-qdnaseq.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19
.. _`bioconductor-qdnaseq.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qdnaseq.hg19";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qdnaseq.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq.hg19/README.html