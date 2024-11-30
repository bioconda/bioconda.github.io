:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2frmavecs'
.. highlight: bash

bioconductor-hgu133plus2frmavecs
================================

.. conda:recipe:: bioconductor-hgu133plus2frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type hgu133plus2

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/hgu133plus2frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hgu133plus2frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2frmavecs/meta.yaml>`_

   This package was created by frmaTools version 1.19.3 and hgu133ahsentrezgcdf version 19.0.0.


.. conda:package:: bioconductor-hgu133plus2frmavecs

   |downloads_bioconductor-hgu133plus2frmavecs| |docker_bioconductor-hgu133plus2frmavecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-13</code>,  <code>1.5.0-12</code>,  <code>1.5.0-11</code>,  <code>1.5.0-10</code>,  <code>1.5.0-9</code>,  <code>1.5.0-8</code>,  <code>1.5.0-7</code>,  <code>1.5.0-6</code>,  <code>1.5.0-5</code>,  </span></summary>
      

      ``1.5.0-13``,  ``1.5.0-12``,  ``1.5.0-11``,  ``1.5.0-10``,  ``1.5.0-9``,  ``1.5.0-8``,  ``1.5.0-7``,  ``1.5.0-6``,  ``1.5.0-5``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      
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

      mamba install bioconductor-hgu133plus2frmavecs

   and update with::

      mamba update bioconductor-hgu133plus2frmavecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu133plus2frmavecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133plus2frmavecs:<tag>

   (see `bioconductor-hgu133plus2frmavecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133plus2frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs
.. _`bioconductor-hgu133plus2frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133plus2frmavecs";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2frmavecs/README.html