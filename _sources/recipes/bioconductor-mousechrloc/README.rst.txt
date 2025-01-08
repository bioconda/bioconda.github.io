:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousechrloc'
.. highlight: bash

bioconductor-mousechrloc
========================

.. conda:recipe:: bioconductor-mousechrloc
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for mouseCHRLOC

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/mouseCHRLOC.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-mousechrloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousechrloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousechrloc/meta.yaml>`_

   Annotation data file for mouseCHRLOC assembled using data from public data repositories


.. conda:package:: bioconductor-mousechrloc

   |downloads_bioconductor-mousechrloc| |docker_bioconductor-mousechrloc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.6-13</code>,  <code>2.1.6-12</code>,  <code>2.1.6-11</code>,  <code>2.1.6-10</code>,  <code>2.1.6-9</code>,  <code>2.1.6-8</code>,  <code>2.1.6-7</code>,  <code>2.1.6-6</code>,  <code>2.1.6-5</code>,  </span></summary>
      

      ``2.1.6-13``,  ``2.1.6-12``,  ``2.1.6-11``,  ``2.1.6-10``,  ``2.1.6-9``,  ``2.1.6-8``,  ``2.1.6-7``,  ``2.1.6-6``,  ``2.1.6-5``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-mousechrloc

   and update with::

      mamba update bioconductor-mousechrloc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mousechrloc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousechrloc:<tag>

   (see `bioconductor-mousechrloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousechrloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousechrloc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousechrloc
   :alt:   (downloads)
.. |docker_bioconductor-mousechrloc| image:: https://quay.io/repository/biocontainers/bioconductor-mousechrloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousechrloc
.. _`bioconductor-mousechrloc/tags`: https://quay.io/repository/biocontainers/bioconductor-mousechrloc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mousechrloc";
        var versions = ["2.1.6","2.1.6","2.1.6","2.1.6","2.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousechrloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousechrloc/README.html