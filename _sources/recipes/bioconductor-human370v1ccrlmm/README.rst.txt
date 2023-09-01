:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human370v1ccrlmm'
.. highlight: bash

bioconductor-human370v1ccrlmm
=============================

.. conda:recipe:: bioconductor-human370v1ccrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/human370v1cCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human370v1ccrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human370v1ccrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human370v1ccrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina 370k arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-human370v1ccrlmm

   |downloads_bioconductor-human370v1ccrlmm| |docker_bioconductor-human370v1ccrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-11</code>,  <code>1.0.2-10</code>,  <code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  <code>1.0.2-5</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  </span></summary>
      

      ``1.0.2-11``,  ``1.0.2-10``,  ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-human370v1ccrlmm

   and update with::

      mamba update bioconductor-human370v1ccrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-human370v1ccrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-human370v1ccrlmm:<tag>

   (see `bioconductor-human370v1ccrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-human370v1ccrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human370v1ccrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human370v1ccrlmm
   :alt:   (downloads)
.. |docker_bioconductor-human370v1ccrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-human370v1ccrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human370v1ccrlmm
.. _`bioconductor-human370v1ccrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-human370v1ccrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-human370v1ccrlmm";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human370v1ccrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human370v1ccrlmm/README.html