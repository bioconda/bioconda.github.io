:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.1000genomes.hs37d5'
.. highlight: bash

bioconductor-bsgenome.hsapiens.1000genomes.hs37d5
=================================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.1000genomes.hs37d5
   :replaces_section_title:
   :noindex:

   1000genomes Reference Genome Sequence \(hs37d5\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Hsapiens.1000genomes.hs37d5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.1000genomes.hs37d5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/meta.yaml>`_

   1000genomes Phase2 Reference Genome Sequence \(hs37d5\)\, based on NCBI GRCh37.


.. conda:package:: bioconductor-bsgenome.hsapiens.1000genomes.hs37d5

   |downloads_bioconductor-bsgenome.hsapiens.1000genomes.hs37d5| |docker_bioconductor-bsgenome.hsapiens.1000genomes.hs37d5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-12</code>,  <code>0.99.1-11</code>,  <code>0.99.1-10</code>,  <code>0.99.1-9</code>,  <code>0.99.1-8</code>,  <code>0.99.1-7</code>,  <code>0.99.1-6</code>,  <code>0.99.1-5</code>,  <code>0.99.1-4</code>,  </span></summary>
      

      ``0.99.1-12``,  ``0.99.1-11``,  ``0.99.1-10``,  ``0.99.1-9``,  ``0.99.1-8``,  ``0.99.1-7``,  ``0.99.1-6``,  ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-0``

      
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

      mamba install bioconductor-bsgenome.hsapiens.1000genomes.hs37d5

   and update with::

      mamba update bioconductor-bsgenome.hsapiens.1000genomes.hs37d5

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.hsapiens.1000genomes.hs37d5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5:<tag>

   (see `bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.1000genomes.hs37d5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.1000genomes.hs37d5| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5
.. _`bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.1000genomes.hs37d5";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.1000genomes.hs37d5/README.html