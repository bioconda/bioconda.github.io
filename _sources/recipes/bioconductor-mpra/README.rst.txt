:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpra'
.. highlight: bash

bioconductor-mpra
=================

.. conda:recipe:: bioconductor-mpra
   :replaces_section_title:
   :noindex:

   Analyze massively parallel reporter assays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mpra.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mpra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpra/meta.yaml>`_

   Tools for data management\, count preprocessing\, and differential analysis in massively parallel report assays \(MPRA\).


.. conda:package:: bioconductor-mpra

   |downloads_bioconductor-mpra| |docker_bioconductor-mpra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0``
   :depends bioconductor-limma: ``>=3.58.0``
   :depends bioconductor-s4vectors: ``>=0.40.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-scales: 
   :depends r-statmod: 
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

      mamba install bioconductor-mpra

   and update with::

      mamba update bioconductor-mpra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mpra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mpra:<tag>

   (see `bioconductor-mpra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpra
   :alt:   (downloads)
.. |docker_bioconductor-mpra| image:: https://quay.io/repository/biocontainers/bioconductor-mpra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpra
.. _`bioconductor-mpra/tags`: https://quay.io/repository/biocontainers/bioconductor-mpra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpra";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpra/README.html