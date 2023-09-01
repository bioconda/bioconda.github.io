:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plasmodiumanophelesprobe'
.. highlight: bash

bioconductor-plasmodiumanophelesprobe
=====================================

.. conda:recipe:: bioconductor-plasmodiumanophelesprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type plasmodiumanopheles

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/plasmodiumanophelesprobe.html
   :license: LGPL
   :recipe: /`bioconductor-plasmodiumanophelesprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasmodiumanophelesprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasmodiumanophelesprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Plasmodium\\\_Anopheles\\\_probe\\\_tab.


.. conda:package:: bioconductor-plasmodiumanophelesprobe

   |downloads_bioconductor-plasmodiumanophelesprobe| |docker_bioconductor-plasmodiumanophelesprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-plasmodiumanophelesprobe

   and update with::

      mamba update bioconductor-plasmodiumanophelesprobe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plasmodiumanophelesprobe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plasmodiumanophelesprobe:<tag>

   (see `bioconductor-plasmodiumanophelesprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plasmodiumanophelesprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plasmodiumanophelesprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plasmodiumanophelesprobe
   :alt:   (downloads)
.. |docker_bioconductor-plasmodiumanophelesprobe| image:: https://quay.io/repository/biocontainers/bioconductor-plasmodiumanophelesprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plasmodiumanophelesprobe
.. _`bioconductor-plasmodiumanophelesprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-plasmodiumanophelesprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plasmodiumanophelesprobe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plasmodiumanophelesprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plasmodiumanophelesprobe/README.html