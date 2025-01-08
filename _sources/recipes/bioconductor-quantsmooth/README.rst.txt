:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quantsmooth'
.. highlight: bash

bioconductor-quantsmooth
========================

.. conda:recipe:: bioconductor-quantsmooth
   :replaces_section_title:
   :noindex:

   Quantile smoothing and genomic visualization of array data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/quantsmooth.html
   :license: GPL-2
   :recipe: /`bioconductor-quantsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantsmooth/meta.yaml>`_
   :links: biotools: :biotools:`quantsmooth`, doi: :doi:`10.1038/nmeth.3252`

   Implements quantile smoothing as introduced in\: Quantile smoothing of array CGH data\; Eilers PH\, de Menezes RX\; Bioinformatics. 2005 Apr 1\;21\(7\)\:1146\-53.


.. conda:package:: bioconductor-quantsmooth

   |downloads_bioconductor-quantsmooth| |docker_bioconductor-quantsmooth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-quantreg: 
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

      mamba install bioconductor-quantsmooth

   and update with::

      mamba update bioconductor-quantsmooth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-quantsmooth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quantsmooth:<tag>

   (see `bioconductor-quantsmooth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quantsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quantsmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quantsmooth
   :alt:   (downloads)
.. |docker_bioconductor-quantsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-quantsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quantsmooth
.. _`bioconductor-quantsmooth/tags`: https://quay.io/repository/biocontainers/bioconductor-quantsmooth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quantsmooth";
        var versions = ["1.72.0","1.68.0","1.66.0","1.64.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quantsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quantsmooth/README.html