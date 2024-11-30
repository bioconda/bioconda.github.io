:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensdb.hsapiens.v79'
.. highlight: bash

bioconductor-ensdb.hsapiens.v79
===============================

.. conda:recipe:: bioconductor-ensdb.hsapiens.v79
   :replaces_section_title:
   :noindex:

   Ensembl based annotation package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/EnsDb.Hsapiens.v79.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensdb.hsapiens.v79 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v79>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v79/meta.yaml>`_

   Exposes an annotation databases generated from Ensembl.


.. conda:package:: bioconductor-ensdb.hsapiens.v79

   |downloads_bioconductor-ensdb.hsapiens.v79| |docker_bioconductor-ensdb.hsapiens.v79|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.99.0-12</code>,  <code>2.99.0-11</code>,  <code>2.99.0-10</code>,  <code>2.99.0-9</code>,  <code>2.99.0-8</code>,  <code>2.99.0-7</code>,  <code>2.99.0-6</code>,  <code>2.99.0-5</code>,  <code>2.99.0-4</code>,  </span></summary>
      

      ``2.99.0-12``,  ``2.99.0-11``,  ``2.99.0-10``,  ``2.99.0-9``,  ``2.99.0-8``,  ``2.99.0-7``,  ``2.99.0-6``,  ``2.99.0-5``,  ``2.99.0-4``,  ``2.99.0-3``,  ``2.99.0-2``,  ``2.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
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

      mamba install bioconductor-ensdb.hsapiens.v79

   and update with::

      mamba update bioconductor-ensdb.hsapiens.v79

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ensdb.hsapiens.v79

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensdb.hsapiens.v79:<tag>

   (see `bioconductor-ensdb.hsapiens.v79/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensdb.hsapiens.v79| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensdb.hsapiens.v79.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensdb.hsapiens.v79
   :alt:   (downloads)
.. |docker_bioconductor-ensdb.hsapiens.v79| image:: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v79/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v79
.. _`bioconductor-ensdb.hsapiens.v79/tags`: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v79?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensdb.hsapiens.v79";
        var versions = ["2.99.0","2.99.0","2.99.0","2.99.0","2.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v79/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v79/README.html