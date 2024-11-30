:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.ecoli.ncbi.20080805'
.. highlight: bash

bioconductor-bsgenome.ecoli.ncbi.20080805
=========================================

.. conda:recipe:: bioconductor-bsgenome.ecoli.ncbi.20080805
   :replaces_section_title:
   :noindex:

   Escherichia coli full genomes

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Ecoli.NCBI.20080805.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.ecoli.ncbi.20080805 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/meta.yaml>`_

   Escherichia coli full genomes for several strains as provided by NCBI on 2008\/08\/05 and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.ecoli.ncbi.20080805

   |downloads_bioconductor-bsgenome.ecoli.ncbi.20080805| |docker_bioconductor-bsgenome.ecoli.ncbi.20080805|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1000-17</code>,  <code>1.3.1000-16</code>,  <code>1.3.1000-15</code>,  <code>1.3.1000-14</code>,  <code>1.3.1000-13</code>,  <code>1.3.1000-12</code>,  <code>1.3.1000-11</code>,  <code>1.3.1000-10</code>,  <code>1.3.1000-9</code>,  </span></summary>
      

      ``1.3.1000-17``,  ``1.3.1000-16``,  ``1.3.1000-15``,  ``1.3.1000-14``,  ``1.3.1000-13``,  ``1.3.1000-12``,  ``1.3.1000-11``,  ``1.3.1000-10``,  ``1.3.1000-9``,  ``1.3.1000-8``,  ``1.3.1000-7``,  ``1.3.1000-5``,  ``1.3.1000-4``,  ``1.3.1000-2``,  ``1.3.1000-1``,  ``1.3.1000-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
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

      mamba install bioconductor-bsgenome.ecoli.ncbi.20080805

   and update with::

      mamba update bioconductor-bsgenome.ecoli.ncbi.20080805

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.ecoli.ncbi.20080805

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805:<tag>

   (see `bioconductor-bsgenome.ecoli.ncbi.20080805/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.ecoli.ncbi.20080805| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.ecoli.ncbi.20080805.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.ecoli.ncbi.20080805
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.ecoli.ncbi.20080805| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805
.. _`bioconductor-bsgenome.ecoli.ncbi.20080805/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.ecoli.ncbi.20080805";
        var versions = ["1.3.1000","1.3.1000","1.3.1000","1.3.1000","1.3.1000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/README.html