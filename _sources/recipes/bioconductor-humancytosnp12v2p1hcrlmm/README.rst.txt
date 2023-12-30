:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humancytosnp12v2p1hcrlmm'
.. highlight: bash

bioconductor-humancytosnp12v2p1hcrlmm
=====================================

.. conda:recipe:: bioconductor-humancytosnp12v2p1hcrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/humancytosnp12v2p1hCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humancytosnp12v2p1hcrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humancytosnp12v2p1hcrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humancytosnp12v2p1hcrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina CytoSNP 12 arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-humancytosnp12v2p1hcrlmm

   |downloads_bioconductor-humancytosnp12v2p1hcrlmm| |docker_bioconductor-humancytosnp12v2p1hcrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-12</code>,  <code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  </span></summary>
      

      ``1.0.1-12``,  ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-humancytosnp12v2p1hcrlmm

   and update with::

      mamba update bioconductor-humancytosnp12v2p1hcrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humancytosnp12v2p1hcrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humancytosnp12v2p1hcrlmm:<tag>

   (see `bioconductor-humancytosnp12v2p1hcrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humancytosnp12v2p1hcrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humancytosnp12v2p1hcrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humancytosnp12v2p1hcrlmm
   :alt:   (downloads)
.. |docker_bioconductor-humancytosnp12v2p1hcrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-humancytosnp12v2p1hcrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humancytosnp12v2p1hcrlmm
.. _`bioconductor-humancytosnp12v2p1hcrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-humancytosnp12v2p1hcrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humancytosnp12v2p1hcrlmm";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humancytosnp12v2p1hcrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humancytosnp12v2p1hcrlmm/README.html