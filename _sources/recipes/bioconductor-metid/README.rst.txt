:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metid'
.. highlight: bash

bioconductor-metid
==================

.. conda:recipe:: bioconductor-metid
   :replaces_section_title:
   :noindex:

   Network\-based prioritization of putative metabolite IDs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MetID.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metid/meta.yaml>`_

   This package uses an innovative network\-based approach that will enhance our ability to determine the identities of significant ions detected by LC\-MS.


.. conda:package:: bioconductor-metid

   |downloads_bioconductor-metid| |docker_bioconductor-metid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-chemminer: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: ``>=1.13.0``
   :depends r-igraph: ``>=1.2.1``
   :depends r-matrix: ``>=1.2-12``
   :depends r-stringr: ``>=1.3.0``
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

      mamba install bioconductor-metid

   and update with::

      mamba update bioconductor-metid

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metid:<tag>

   (see `bioconductor-metid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metid
   :alt:   (downloads)
.. |docker_bioconductor-metid| image:: https://quay.io/repository/biocontainers/bioconductor-metid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metid
.. _`bioconductor-metid/tags`: https://quay.io/repository/biocontainers/bioconductor-metid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metid";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metid/README.html