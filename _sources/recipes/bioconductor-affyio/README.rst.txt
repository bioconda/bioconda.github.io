:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyio'
.. highlight: bash

bioconductor-affyio
===================

.. conda:recipe:: bioconductor-affyio
   :replaces_section_title:
   :noindex:

   Tools for parsing Affymetrix data files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/affyio.html
   :license: LGPL-3.0-or-later
   :recipe: /`bioconductor-affyio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyio/meta.yaml>`_
   :links: biotools: :biotools:`affyio`, doi: :doi:`10.1038/nmeth.3252`

   Routines for parsing Affymetrix data files based upon file format information. Primary focus is on accessing the CEL and CDF file formats.


.. conda:package:: bioconductor-affyio

   |downloads_bioconductor-affyio| |docker_bioconductor-affyio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-affyio

   and update with::

      mamba update bioconductor-affyio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affyio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyio:<tag>

   (see `bioconductor-affyio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyio
   :alt:   (downloads)
.. |docker_bioconductor-affyio| image:: https://quay.io/repository/biocontainers/bioconductor-affyio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyio
.. _`bioconductor-affyio/tags`: https://quay.io/repository/biocontainers/bioconductor-affyio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyio";
        var versions = ["1.76.0","1.72.0","1.72.0","1.70.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyio/README.html