:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrho'
.. highlight: bash

bioconductor-rrho
=================

.. conda:recipe:: bioconductor-rrho
   :replaces_section_title:
   :noindex:

   Inference on agreement between ordered lists

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RRHO.html
   :license: GPL-2
   :recipe: /`bioconductor-rrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho/meta.yaml>`_
   :links: biotools: :biotools:`rrho`, doi: :doi:`10.1038/nmeth.3252`

   The package is aimed at inference on the amount of agreement in two sorted lists using the Rank\-Rank Hypergeometric Overlap test.


.. conda:package:: bioconductor-rrho

   |downloads_bioconductor-rrho| |docker_bioconductor-rrho|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-venndiagram: 
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

      mamba install bioconductor-rrho

   and update with::

      mamba update bioconductor-rrho

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rrho

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrho:<tag>

   (see `bioconductor-rrho/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrho| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrho.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrho
   :alt:   (downloads)
.. |docker_bioconductor-rrho| image:: https://quay.io/repository/biocontainers/bioconductor-rrho/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrho
.. _`bioconductor-rrho/tags`: https://quay.io/repository/biocontainers/bioconductor-rrho?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rrho";
        var versions = ["1.46.0","1.42.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrho/README.html