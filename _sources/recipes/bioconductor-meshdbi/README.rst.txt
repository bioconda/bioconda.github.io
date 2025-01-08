:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshdbi'
.. highlight: bash

bioconductor-meshdbi
====================

.. conda:recipe:: bioconductor-meshdbi
   :replaces_section_title:
   :noindex:

   DBI to construct MeSH\-related package from sqlite file

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MeSHDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi/meta.yaml>`_
   :links: biotools: :biotools:`meshdbi`

   The package is unified implementation of MeSH.db\, MeSH.AOR.db\, and MeSH.PCR.db and also is interface to construct Gene\-MeSH package \(MeSH.XXX.eg.db\). loadMeSHDbiPkg import sqlite file and generate MeSH.XXX.eg.db.


.. conda:package:: bioconductor-meshdbi

   |downloads_bioconductor-meshdbi| |docker_bioconductor-meshdbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-meshdbi

   and update with::

      mamba update bioconductor-meshdbi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-meshdbi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meshdbi:<tag>

   (see `bioconductor-meshdbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meshdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshdbi
   :alt:   (downloads)
.. |docker_bioconductor-meshdbi| image:: https://quay.io/repository/biocontainers/bioconductor-meshdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshdbi
.. _`bioconductor-meshdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-meshdbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meshdbi";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html