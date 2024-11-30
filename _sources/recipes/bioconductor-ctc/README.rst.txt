:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctc'
.. highlight: bash

bioconductor-ctc
================

.. conda:recipe:: bioconductor-ctc
   :replaces_section_title:
   :noindex:

   Cluster and Tree Conversion.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ctc.html
   :license: GPL-2
   :recipe: /`bioconductor-ctc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctc/meta.yaml>`_
   :links: biotools: :biotools:`ctc`, doi: :doi:`10.1038/nmeth.3252`

   Tools for export and import classification trees and clusters to other programs


.. conda:package:: bioconductor-ctc

   |downloads_bioconductor-ctc| |docker_bioconductor-ctc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-amap: 
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

      mamba install bioconductor-ctc

   and update with::

      mamba update bioconductor-ctc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctc:<tag>

   (see `bioconductor-ctc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctc
   :alt:   (downloads)
.. |docker_bioconductor-ctc| image:: https://quay.io/repository/biocontainers/bioconductor-ctc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctc
.. _`bioconductor-ctc/tags`: https://quay.io/repository/biocontainers/bioconductor-ctc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctc";
        var versions = ["1.76.0","1.74.0","1.72.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctc/README.html