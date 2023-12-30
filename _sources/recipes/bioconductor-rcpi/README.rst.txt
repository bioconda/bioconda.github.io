:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcpi'
.. highlight: bash

bioconductor-rcpi
=================

.. conda:recipe:: bioconductor-rcpi
   :replaces_section_title:
   :noindex:

   Molecular Informatics Toolkit for Compound\-Protein Interaction in Drug Discovery

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rcpi.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rcpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcpi/meta.yaml>`_

   A molecular informatics toolkit with an integration of bioinformatics and chemoinformatics tools for drug discovery.


.. conda:package:: bioconductor-rcpi

   |downloads_bioconductor-rcpi| |docker_bioconductor-rcpi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-gosemsim: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-rlang: 
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

      mamba install bioconductor-rcpi

   and update with::

      mamba update bioconductor-rcpi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcpi:<tag>

   (see `bioconductor-rcpi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcpi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcpi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcpi
   :alt:   (downloads)
.. |docker_bioconductor-rcpi| image:: https://quay.io/repository/biocontainers/bioconductor-rcpi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcpi
.. _`bioconductor-rcpi/tags`: https://quay.io/repository/biocontainers/bioconductor-rcpi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcpi";
        var versions = ["1.38.0","1.36.1","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcpi/README.html