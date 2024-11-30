:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huexexonprobesetlocationhg19'
.. highlight: bash

bioconductor-huexexonprobesetlocationhg19
=========================================

.. conda:recipe:: bioconductor-huexexonprobesetlocationhg19
   :replaces_section_title:
   :noindex:

   Exon\-level probeset chromosome location for microarrays of type HuEx

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/HuExExonProbesetLocationHg19.html
   :license: LGPL
   :recipe: /`bioconductor-huexexonprobesetlocationhg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocationhg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocationhg19/meta.yaml>`_

   This package was automatically created by package AnnotationDbi version 1.11.8. The exon\-level probeset genome location was retrieved from Netaffx using AffyCompatible. The exon\-level probeset genome location was retrieved from Netaffx using AffyCompatible. Genome release hg19.


.. conda:package:: bioconductor-huexexonprobesetlocationhg19

   |downloads_bioconductor-huexexonprobesetlocationhg19| |docker_bioconductor-huexexonprobesetlocationhg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.3-12</code>,  <code>0.0.3-11</code>,  <code>0.0.3-10</code>,  <code>0.0.3-9</code>,  <code>0.0.3-8</code>,  <code>0.0.3-7</code>,  <code>0.0.3-6</code>,  <code>0.0.3-5</code>,  <code>0.0.3-4</code>,  </span></summary>
      

      ``0.0.3-12``,  ``0.0.3-11``,  ``0.0.3-10``,  ``0.0.3-9``,  ``0.0.3-8``,  ``0.0.3-7``,  ``0.0.3-6``,  ``0.0.3-5``,  ``0.0.3-4``,  ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-huexexonprobesetlocationhg19

   and update with::

      mamba update bioconductor-huexexonprobesetlocationhg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-huexexonprobesetlocationhg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-huexexonprobesetlocationhg19:<tag>

   (see `bioconductor-huexexonprobesetlocationhg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-huexexonprobesetlocationhg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huexexonprobesetlocationhg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-huexexonprobesetlocationhg19
   :alt:   (downloads)
.. |docker_bioconductor-huexexonprobesetlocationhg19| image:: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg19
.. _`bioconductor-huexexonprobesetlocationhg19/tags`: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-huexexonprobesetlocationhg19";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocationhg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocationhg19/README.html