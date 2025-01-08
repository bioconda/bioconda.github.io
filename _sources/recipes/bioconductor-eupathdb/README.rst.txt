:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eupathdb'
.. highlight: bash

bioconductor-eupathdb
=====================

.. conda:recipe:: bioconductor-eupathdb
   :replaces_section_title:
   :noindex:

   Provides access to pathogen annotation resources available on EuPathDB databases

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/EuPathDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eupathdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eupathdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eupathdb/meta.yaml>`_

   Brings together annotation resources from the various EuPathDB databases \(PlasmoDB\, ToxoDB\, TriTrypDB\, etc.\) and makes them available in R using the AnnotationHub framework.


.. conda:package:: bioconductor-eupathdb

   |downloads_bioconductor-eupathdb| |docker_bioconductor-eupathdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-13</code>,  <code>1.0.1-12</code>,  <code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  </span></summary>
      

      ``1.0.1-13``,  ``1.0.1-12``,  ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-annotationhubdata: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
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

      mamba install bioconductor-eupathdb

   and update with::

      mamba update bioconductor-eupathdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eupathdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eupathdb:<tag>

   (see `bioconductor-eupathdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eupathdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eupathdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eupathdb
   :alt:   (downloads)
.. |docker_bioconductor-eupathdb| image:: https://quay.io/repository/biocontainers/bioconductor-eupathdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eupathdb
.. _`bioconductor-eupathdb/tags`: https://quay.io/repository/biocontainers/bioconductor-eupathdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eupathdb";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eupathdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eupathdb/README.html