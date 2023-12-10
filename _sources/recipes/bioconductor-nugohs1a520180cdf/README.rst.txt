:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nugohs1a520180cdf'
.. highlight: bash

bioconductor-nugohs1a520180cdf
==============================

.. conda:recipe:: bioconductor-nugohs1a520180cdf
   :replaces_section_title:
   :noindex:

   nugohs1a520180cdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/nugohs1a520180cdf.html
   :license: LGPL
   :recipe: /`bioconductor-nugohs1a520180cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugohs1a520180cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nugohs1a520180cdf/meta.yaml>`_

   A package containing an environment representing the NuGO\_Hs1a520180.cdf file.


.. conda:package:: bioconductor-nugohs1a520180cdf

   |downloads_bioconductor-nugohs1a520180cdf| |docker_bioconductor-nugohs1a520180cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  </span></summary>
      

      ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-nugohs1a520180cdf

   and update with::

      mamba update bioconductor-nugohs1a520180cdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nugohs1a520180cdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nugohs1a520180cdf:<tag>

   (see `bioconductor-nugohs1a520180cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nugohs1a520180cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nugohs1a520180cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nugohs1a520180cdf
   :alt:   (downloads)
.. |docker_bioconductor-nugohs1a520180cdf| image:: https://quay.io/repository/biocontainers/bioconductor-nugohs1a520180cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nugohs1a520180cdf
.. _`bioconductor-nugohs1a520180cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-nugohs1a520180cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nugohs1a520180cdf";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nugohs1a520180cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nugohs1a520180cdf/README.html