:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationforge'
.. highlight: bash

bioconductor-annotationforge
============================

.. conda:recipe:: bioconductor-annotationforge
   :replaces_section_title:
   :noindex:

   Tools for building SQLite\-based annotation data packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnnotationForge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge/meta.yaml>`_
   :links: biotools: :biotools:`annotationforge`, doi: :doi:`10.1038/nmeth.3252`

   Provides code for generating Annotation packages and their databases.  Packages produced are intended to be used with AnnotationDbi.


.. conda:package:: bioconductor-annotationforge

   |downloads_bioconductor-annotationforge| |docker_bioconductor-annotationforge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.2-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.2-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-xml: 
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

      mamba install bioconductor-annotationforge

   and update with::

      mamba update bioconductor-annotationforge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-annotationforge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationforge:<tag>

   (see `bioconductor-annotationforge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationforge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationforge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationforge
   :alt:   (downloads)
.. |docker_bioconductor-annotationforge| image:: https://quay.io/repository/biocontainers/bioconductor-annotationforge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationforge
.. _`bioconductor-annotationforge/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationforge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationforge";
        var versions = ["1.48.0","1.44.0","1.42.2","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html