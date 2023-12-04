:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmdbquery'
.. highlight: bash

bioconductor-hmdbquery
======================

.. conda:recipe:: bioconductor-hmdbquery
   :replaces_section_title:
   :noindex:

   utilities for exploration of human metabolome database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/hmdbQuery.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmdbquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmdbquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmdbquery/meta.yaml>`_

   Define utilities for exploration of human metabolome database\, including functions to retrieve specific metabolite entries and data snapshots with pairwise associations \(metabolite\-gene\,\-protein\,\-disease\).


.. conda:package:: bioconductor-hmdbquery

   |downloads_bioconductor-hmdbquery| |docker_bioconductor-hmdbquery|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-xml: 
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

      mamba install bioconductor-hmdbquery

   and update with::

      mamba update bioconductor-hmdbquery

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hmdbquery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmdbquery:<tag>

   (see `bioconductor-hmdbquery/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmdbquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmdbquery.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmdbquery
   :alt:   (downloads)
.. |docker_bioconductor-hmdbquery| image:: https://quay.io/repository/biocontainers/bioconductor-hmdbquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmdbquery
.. _`bioconductor-hmdbquery/tags`: https://quay.io/repository/biocontainers/bioconductor-hmdbquery?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmdbquery";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmdbquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmdbquery/README.html