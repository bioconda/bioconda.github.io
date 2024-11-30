:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanomniexpress12v1bcrlmm'
.. highlight: bash

bioconductor-humanomniexpress12v1bcrlmm
=======================================

.. conda:recipe:: bioconductor-humanomniexpress12v1bcrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/humanomniexpress12v1bCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanomniexpress12v1bcrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomniexpress12v1bcrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomniexpress12v1bcrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina Omni Express 12 arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-humanomniexpress12v1bcrlmm

   |downloads_bioconductor-humanomniexpress12v1bcrlmm| |docker_bioconductor-humanomniexpress12v1bcrlmm|

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

      mamba install bioconductor-humanomniexpress12v1bcrlmm

   and update with::

      mamba update bioconductor-humanomniexpress12v1bcrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humanomniexpress12v1bcrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanomniexpress12v1bcrlmm:<tag>

   (see `bioconductor-humanomniexpress12v1bcrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanomniexpress12v1bcrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanomniexpress12v1bcrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanomniexpress12v1bcrlmm
   :alt:   (downloads)
.. |docker_bioconductor-humanomniexpress12v1bcrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm
.. _`bioconductor-humanomniexpress12v1bcrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanomniexpress12v1bcrlmm";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanomniexpress12v1bcrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanomniexpress12v1bcrlmm/README.html