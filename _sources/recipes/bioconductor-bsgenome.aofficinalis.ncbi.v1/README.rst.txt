:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.aofficinalis.ncbi.v1'
.. highlight: bash

bioconductor-bsgenome.aofficinalis.ncbi.v1
==========================================

.. conda:recipe:: bioconductor-bsgenome.aofficinalis.ncbi.v1
   :replaces_section_title:
   :noindex:

   Asparagus officinalis \(Garden asparagus\) full genome \(NCBI version Aspof.V1\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Aofficinalis.NCBI.V1.html
   :license: GPL-3
   :recipe: /`bioconductor-bsgenome.aofficinalis.ncbi.v1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.aofficinalis.ncbi.v1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.aofficinalis.ncbi.v1/meta.yaml>`_

   Full genome sequences for Asparagus officinalis \(Garden asparagus\) as provided by NCBI \(Aspof.V1\, Feb. 2017\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.aofficinalis.ncbi.v1

   |downloads_bioconductor-bsgenome.aofficinalis.ncbi.v1| |docker_bioconductor-bsgenome.aofficinalis.ncbi.v1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-13</code>,  <code>1.0.0-12</code>,  <code>1.0.0-11</code>,  <code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  <code>1.0.0-5</code>,  </span></summary>
      

      ``1.0.0-13``,  ``1.0.0-12``,  ``1.0.0-11``,  ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      
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

      mamba install bioconductor-bsgenome.aofficinalis.ncbi.v1

   and update with::

      mamba update bioconductor-bsgenome.aofficinalis.ncbi.v1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.aofficinalis.ncbi.v1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.aofficinalis.ncbi.v1:<tag>

   (see `bioconductor-bsgenome.aofficinalis.ncbi.v1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.aofficinalis.ncbi.v1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.aofficinalis.ncbi.v1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.aofficinalis.ncbi.v1
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.aofficinalis.ncbi.v1| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.aofficinalis.ncbi.v1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.aofficinalis.ncbi.v1
.. _`bioconductor-bsgenome.aofficinalis.ncbi.v1/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.aofficinalis.ncbi.v1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.aofficinalis.ncbi.v1";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.aofficinalis.ncbi.v1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.aofficinalis.ncbi.v1/README.html