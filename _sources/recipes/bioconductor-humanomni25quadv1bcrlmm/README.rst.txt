:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanomni25quadv1bcrlmm'
.. highlight: bash

bioconductor-humanomni25quadv1bcrlmm
====================================

.. conda:recipe:: bioconductor-humanomni25quadv1bcrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/humanomni25quadv1bCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanomni25quadv1bcrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomni25quadv1bcrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomni25quadv1bcrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina Omni2.5 Quad arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-humanomni25quadv1bcrlmm

   |downloads_bioconductor-humanomni25quadv1bcrlmm| |docker_bioconductor-humanomni25quadv1bcrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-12</code>,  <code>1.0.2-11</code>,  <code>1.0.2-10</code>,  <code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  <code>1.0.2-5</code>,  <code>1.0.2-4</code>,  </span></summary>
      

      ``1.0.2-12``,  ``1.0.2-11``,  ``1.0.2-10``,  ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
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

      mamba install bioconductor-humanomni25quadv1bcrlmm

   and update with::

      mamba update bioconductor-humanomni25quadv1bcrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humanomni25quadv1bcrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanomni25quadv1bcrlmm:<tag>

   (see `bioconductor-humanomni25quadv1bcrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanomni25quadv1bcrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanomni25quadv1bcrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanomni25quadv1bcrlmm
   :alt:   (downloads)
.. |docker_bioconductor-humanomni25quadv1bcrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-humanomni25quadv1bcrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanomni25quadv1bcrlmm
.. _`bioconductor-humanomni25quadv1bcrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-humanomni25quadv1bcrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanomni25quadv1bcrlmm";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanomni25quadv1bcrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanomni25quadv1bcrlmm/README.html