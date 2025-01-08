:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-myvariant'
.. highlight: bash

bioconductor-myvariant
======================

.. conda:recipe:: bioconductor-myvariant
   :replaces_section_title:
   :noindex:

   Accesses MyVariant.info variant query and annotation services

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/myvariant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-myvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-myvariant/meta.yaml>`_
   :links: biotools: :biotools:`myvariant`, doi: :doi:`10.1101/035667`

   MyVariant.info is a comprehensive aggregation of variant annotation resources. myvariant is a wrapper for querying MyVariant.info services


.. conda:package:: bioconductor-myvariant

   |downloads_bioconductor-myvariant| |docker_bioconductor-myvariant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-hmisc: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-plyr: 
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

      mamba install bioconductor-myvariant

   and update with::

      mamba update bioconductor-myvariant

  To create a new environment, run::

      mamba create --name myenvname bioconductor-myvariant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-myvariant:<tag>

   (see `bioconductor-myvariant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-myvariant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-myvariant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-myvariant
   :alt:   (downloads)
.. |docker_bioconductor-myvariant| image:: https://quay.io/repository/biocontainers/bioconductor-myvariant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-myvariant
.. _`bioconductor-myvariant/tags`: https://quay.io/repository/biocontainers/bioconductor-myvariant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-myvariant";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-myvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-myvariant/README.html