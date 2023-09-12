:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellsnp-lite'
.. highlight: bash

cellsnp-lite
============

.. conda:recipe:: cellsnp-lite
   :replaces_section_title:
   :noindex:

   Efficient genotyping bi\-allelic SNPs on single cells

   :homepage: https://github.com/single-cell-genetics/cellsnp-lite
   :license: Apache-2.0
   :recipe: /`cellsnp-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnp-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnp-lite/meta.yaml>`_

   


.. conda:package:: cellsnp-lite

   |downloads_cellsnp-lite| |docker_cellsnp-lite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-2</code>,  <code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3.1-1``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cellsnp-lite

   and update with::

      mamba update cellsnp-lite

  To create a new environment, run::

      mamba create --name myenvname cellsnp-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellsnp-lite:<tag>

   (see `cellsnp-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_cellsnp-lite| image:: https://img.shields.io/conda/dn/bioconda/cellsnp-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/cellsnp-lite
   :alt:   (downloads)
.. |docker_cellsnp-lite| image:: https://quay.io/repository/biocontainers/cellsnp-lite/status
   :target: https://quay.io/repository/biocontainers/cellsnp-lite
.. _`cellsnp-lite/tags`: https://quay.io/repository/biocontainers/cellsnp-lite?tab=tags


.. raw:: html

    <script>
        var package = "cellsnp-lite";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellsnp-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellsnp-lite/README.html