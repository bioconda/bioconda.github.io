:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beat'
.. highlight: bash

bioconductor-beat
=================

.. conda:recipe:: bioconductor-beat
   :replaces_section_title:
   :noindex:

   BEAT \- BS\-Seq Epimutation Analysis Toolkit

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BEAT.html
   :license: LGPL (>= 3.0)
   :recipe: /`bioconductor-beat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beat/meta.yaml>`_
   :links: biotools: :biotools:`beat`, doi: :doi:`10.1038/nmeth.3252`

   Model\-based analysis of single\-cell methylation data


.. conda:package:: bioconductor-beat

   |downloads_bioconductor-beat| |docker_bioconductor-beat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-beat

   and update with::

      mamba update bioconductor-beat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beat:<tag>

   (see `bioconductor-beat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beat
   :alt:   (downloads)
.. |docker_bioconductor-beat| image:: https://quay.io/repository/biocontainers/bioconductor-beat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beat
.. _`bioconductor-beat/tags`: https://quay.io/repository/biocontainers/bioconductor-beat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beat";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beat/README.html