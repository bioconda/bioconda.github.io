:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ygs98frmavecs'
.. highlight: bash

bioconductor-ygs98frmavecs
==========================

.. conda:recipe:: bioconductor-ygs98frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type ygs98

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ygs98frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ygs98frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98frmavecs/meta.yaml>`_

   This package was created by frmaTools version 1.19.3 and hgu133ahsentrezgcdf version 19.0.0.


.. conda:package:: bioconductor-ygs98frmavecs

   |downloads_bioconductor-ygs98frmavecs| |docker_bioconductor-ygs98frmavecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-13</code>,  <code>1.3.0-12</code>,  <code>1.3.0-11</code>,  <code>1.3.0-10</code>,  <code>1.3.0-9</code>,  <code>1.3.0-8</code>,  <code>1.3.0-7</code>,  <code>1.3.0-6</code>,  <code>1.3.0-5</code>,  </span></summary>
      

      ``1.3.0-13``,  ``1.3.0-12``,  ``1.3.0-11``,  ``1.3.0-10``,  ``1.3.0-9``,  ``1.3.0-8``,  ``1.3.0-7``,  ``1.3.0-6``,  ``1.3.0-5``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      
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

      mamba install bioconductor-ygs98frmavecs

   and update with::

      mamba update bioconductor-ygs98frmavecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ygs98frmavecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ygs98frmavecs:<tag>

   (see `bioconductor-ygs98frmavecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ygs98frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ygs98frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ygs98frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-ygs98frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-ygs98frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ygs98frmavecs
.. _`bioconductor-ygs98frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-ygs98frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ygs98frmavecs";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ygs98frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ygs98frmavecs/README.html