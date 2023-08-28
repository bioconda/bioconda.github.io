:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pviz'
.. highlight: bash

bioconductor-pviz
=================

.. conda:recipe:: bioconductor-pviz
   :replaces_section_title:
   :noindex:

   Peptide Annotation and Data Visualization using Gviz

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Pviz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pviz/meta.yaml>`_
   :links: biotools: :biotools:`pviz`, doi: :doi:`10.1007/978-1-4939-3037-1_10`

   Pviz adapts the Gviz package for protein sequences and data.


.. conda:package:: bioconductor-pviz

   |downloads_bioconductor-pviz| |docker_bioconductor-pviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-biovizbase: ``>=1.48.0,<1.49.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-pviz

   and update with::

      mamba update bioconductor-pviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pviz:<tag>

   (see `bioconductor-pviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pviz
   :alt:   (downloads)
.. |docker_bioconductor-pviz| image:: https://quay.io/repository/biocontainers/bioconductor-pviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pviz
.. _`bioconductor-pviz/tags`: https://quay.io/repository/biocontainers/bioconductor-pviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pviz";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pviz/README.html