:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq2pathway.data'
.. highlight: bash

bioconductor-seq2pathway.data
=============================

.. conda:recipe:: bioconductor-seq2pathway.data
   :replaces_section_title:
   :noindex:

   data set for R package seq2pathway

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/seq2pathway.data.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-seq2pathway.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway.data/meta.yaml>`_

   Supporting data for the seq2patheway package. Includes modified gene sets from MsigDB and org.Hs.eg.db\; gene locus definitions from GENCODE project.


.. conda:package:: bioconductor-seq2pathway.data

   |downloads_bioconductor-seq2pathway.data| |docker_bioconductor-seq2pathway.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-seq2pathway.data

   and update with::

      mamba update bioconductor-seq2pathway.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seq2pathway.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seq2pathway.data:<tag>

   (see `bioconductor-seq2pathway.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seq2pathway.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq2pathway.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq2pathway.data
   :alt:   (downloads)
.. |docker_bioconductor-seq2pathway.data| image:: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data
.. _`bioconductor-seq2pathway.data/tags`: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seq2pathway.data";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq2pathway.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq2pathway.data/README.html