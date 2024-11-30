:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sift.hsapiens.dbsnp137'
.. highlight: bash

bioconductor-sift.hsapiens.dbsnp137
===================================

.. conda:recipe:: bioconductor-sift.hsapiens.dbsnp137
   :replaces_section_title:
   :noindex:

   PROVEAN\/SIFT Predictions for Homo sapiens dbSNP build 137

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/SIFT.Hsapiens.dbSNP137.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sift.hsapiens.dbsnp137 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp137>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp137/meta.yaml>`_

   Database of PROVEAN\/SIFT predictions for Homo sapiens dbSNP build 137


.. conda:package:: bioconductor-sift.hsapiens.dbsnp137

   |downloads_bioconductor-sift.hsapiens.dbsnp137| |docker_bioconductor-sift.hsapiens.dbsnp137|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-12</code>,  <code>1.0.0-11</code>,  <code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  </span></summary>
      

      ``1.0.0-12``,  ``1.0.0-11``,  ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rsqlite: ``>=0.11.0``
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

      mamba install bioconductor-sift.hsapiens.dbsnp137

   and update with::

      mamba update bioconductor-sift.hsapiens.dbsnp137

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sift.hsapiens.dbsnp137

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sift.hsapiens.dbsnp137:<tag>

   (see `bioconductor-sift.hsapiens.dbsnp137/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sift.hsapiens.dbsnp137| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sift.hsapiens.dbsnp137.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sift.hsapiens.dbsnp137
   :alt:   (downloads)
.. |docker_bioconductor-sift.hsapiens.dbsnp137| image:: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137
.. _`bioconductor-sift.hsapiens.dbsnp137/tags`: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp137?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sift.hsapiens.dbsnp137";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp137/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp137/README.html