:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pgca'
.. highlight: bash

bioconductor-pgca
=================

.. conda:recipe:: bioconductor-pgca
   :replaces_section_title:
   :noindex:

   PGCA\: An Algorithm to Link Protein Groups Created from MS\/MS Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pgca.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pgca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgca/meta.yaml>`_

   Protein Group Code Algorithm \(PGCA\) is a computationally inexpensive algorithm to merge protein summaries from multiple experimental quantitative proteomics data. The algorithm connects two or more groups with overlapping accession numbers. In some cases\, pairwise groups are mutually exclusive but they may still be connected by another group \(or set of groups\) with overlapping accession numbers. Thus\, groups created by PGCA from multiple experimental runs \(i.e.\, global groups\) are called \"connected\" groups. These identified global protein groups enable the analysis of quantitative data available for protein groups instead of unique protein identifiers.


.. conda:package:: bioconductor-pgca

   |downloads_bioconductor-pgca| |docker_bioconductor-pgca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-pgca

   and update with::

      mamba update bioconductor-pgca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pgca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pgca:<tag>

   (see `bioconductor-pgca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pgca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pgca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pgca
   :alt:   (downloads)
.. |docker_bioconductor-pgca| image:: https://quay.io/repository/biocontainers/bioconductor-pgca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pgca
.. _`bioconductor-pgca/tags`: https://quay.io/repository/biocontainers/bioconductor-pgca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pgca";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pgca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pgca/README.html