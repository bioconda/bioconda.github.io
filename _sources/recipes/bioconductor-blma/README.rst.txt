:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blma'
.. highlight: bash

bioconductor-blma
=================

.. conda:recipe:: bioconductor-blma
   :replaces_section_title:
   :noindex:

   BLMA\: A package for bi\-level meta\-analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BLMA.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-blma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blma/meta.yaml>`_

   Suit of tools for bi\-level meta\-analysis. The package can be used in a wide range of applications\, including general hypothesis testings\, differential expression analysis\, functional analysis\, and pathway analysis.


.. conda:package:: bioconductor-blma

   |downloads_bioconductor-blma| |docker_bioconductor-blma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-padog: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rontotools: ``>=2.30.0,<2.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gsa: 
   :depends r-metafor: 
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

      mamba install bioconductor-blma

   and update with::

      mamba update bioconductor-blma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-blma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blma:<tag>

   (see `bioconductor-blma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blma
   :alt:   (downloads)
.. |docker_bioconductor-blma| image:: https://quay.io/repository/biocontainers/bioconductor-blma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blma
.. _`bioconductor-blma/tags`: https://quay.io/repository/biocontainers/bioconductor-blma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-blma";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blma/README.html