:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ncbi.grch38'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ncbi.grch38
==========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ncbi.grch38
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(GRCh38\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Hsapiens.NCBI.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ncbi.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by NCBI \(GRCh38\, 2013\-12\-17\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.hsapiens.ncbi.grch38

   |downloads_bioconductor-bsgenome.hsapiens.ncbi.grch38| |docker_bioconductor-bsgenome.hsapiens.ncbi.grch38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1000-13</code>,  <code>1.3.1000-12</code>,  <code>1.3.1000-11</code>,  <code>1.3.1000-10</code>,  <code>1.3.1000-9</code>,  <code>1.3.1000-8</code>,  <code>1.3.1000-7</code>,  <code>1.3.1000-6</code>,  <code>1.3.1000-5</code>,  </span></summary>
      

      ``1.3.1000-13``,  ``1.3.1000-12``,  ``1.3.1000-11``,  ``1.3.1000-10``,  ``1.3.1000-9``,  ``1.3.1000-8``,  ``1.3.1000-7``,  ``1.3.1000-6``,  ``1.3.1000-5``,  ``1.3.1000-4``,  ``1.3.1000-3``,  ``1.3.1000-2``,  ``1.3.1000-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
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

      mamba install bioconductor-bsgenome.hsapiens.ncbi.grch38

   and update with::

      mamba update bioconductor-bsgenome.hsapiens.ncbi.grch38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.hsapiens.ncbi.grch38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38:<tag>

   (see `bioconductor-bsgenome.hsapiens.ncbi.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ncbi.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ncbi.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ncbi.grch38
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ncbi.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38
.. _`bioconductor-bsgenome.hsapiens.ncbi.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ncbi.grch38";
        var versions = ["1.3.1000","1.3.1000","1.3.1000","1.3.1000","1.3.1000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/README.html