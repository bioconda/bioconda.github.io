:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahcytobands'
.. highlight: bash

bioconductor-ahcytobands
========================

.. conda:recipe:: bioconductor-ahcytobands
   :replaces_section_title:
   :noindex:

   CytoBands for AnnotationHub

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/AHCytoBands.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahcytobands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands/meta.yaml>`_

   Supplies AnnotationHub with CytoBand information from UCSC. There is a track for each major organism. Giemsa\-stained bands are commonly used to decorate chromosomal overviews in visualizations of genomic data.


.. conda:package:: bioconductor-ahcytobands

   |downloads_bioconductor-ahcytobands| |docker_bioconductor-ahcytobands|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-4</code>,  <code>0.99.1-3</code>,  <code>0.99.1-2</code>,  <code>0.99.1-1</code>,  <code>0.99.1-0</code>,  <code>0.99.0-7</code>,  <code>0.99.0-6</code>,  <code>0.99.0-5</code>,  <code>0.99.0-4</code>,  </span></summary>
      

      ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-1``,  ``0.99.1-0``,  ``0.99.0-7``,  ``0.99.0-6``,  ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ahcytobands

   and update with::

      mamba update bioconductor-ahcytobands

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ahcytobands

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahcytobands:<tag>

   (see `bioconductor-ahcytobands/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ahcytobands| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahcytobands.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahcytobands
   :alt:   (downloads)
.. |docker_bioconductor-ahcytobands| image:: https://quay.io/repository/biocontainers/bioconductor-ahcytobands/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahcytobands
.. _`bioconductor-ahcytobands/tags`: https://quay.io/repository/biocontainers/bioconductor-ahcytobands?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahcytobands";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html