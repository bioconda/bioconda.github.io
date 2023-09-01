:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huexexonprobesetlocation'
.. highlight: bash

bioconductor-huexexonprobesetlocation
=====================================

.. conda:recipe:: bioconductor-huexexonprobesetlocation
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type HuEx

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/HuExExonProbesetLocation.html
   :license: LGPL
   :recipe: /`bioconductor-huexexonprobesetlocation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocation/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.7.17. The exon\-level probeset genome location was retrieved from Netaffx using AffyCompatible.


.. conda:package:: bioconductor-huexexonprobesetlocation

   |downloads_bioconductor-huexexonprobesetlocation| |docker_bioconductor-huexexonprobesetlocation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.0-11</code>,  <code>1.15.0-10</code>,  <code>1.15.0-9</code>,  <code>1.15.0-8</code>,  <code>1.15.0-7</code>,  <code>1.15.0-6</code>,  <code>1.15.0-5</code>,  <code>1.15.0-4</code>,  <code>1.15.0-3</code>,  </span></summary>
      

      ``1.15.0-11``,  ``1.15.0-10``,  ``1.15.0-9``,  ``1.15.0-8``,  ``1.15.0-7``,  ``1.15.0-6``,  ``1.15.0-5``,  ``1.15.0-4``,  ``1.15.0-3``,  ``1.15.0-2``,  ``1.15.0-0``

      
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

      mamba install bioconductor-huexexonprobesetlocation

   and update with::

      mamba update bioconductor-huexexonprobesetlocation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-huexexonprobesetlocation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-huexexonprobesetlocation:<tag>

   (see `bioconductor-huexexonprobesetlocation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-huexexonprobesetlocation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huexexonprobesetlocation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-huexexonprobesetlocation
   :alt:   (downloads)
.. |docker_bioconductor-huexexonprobesetlocation| image:: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocation
.. _`bioconductor-huexexonprobesetlocation/tags`: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-huexexonprobesetlocation";
        var versions = ["1.15.0","1.15.0","1.15.0","1.15.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocation/README.html