:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-refplus'
.. highlight: bash

bioconductor-refplus
====================

.. conda:recipe:: bioconductor-refplus
   :replaces_section_title:
   :noindex:

   A function set for the Extrapolation Strategy \(RMA\+\) and Extrapolation Averaging \(RMA\+\+\) methods.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RefPlus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-refplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus/meta.yaml>`_
   :links: biotools: :biotools:`refplus`, doi: :doi:`10.1093/bioinformatics/btm357`

   The package contains functions for pre\-processing Affymetrix data using the RMA\+ and the RMA\+\+ methods.


.. conda:package:: bioconductor-refplus

   |downloads_bioconductor-refplus| |docker_bioconductor-refplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affyplm: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-refplus

   and update with::

      mamba update bioconductor-refplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-refplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-refplus:<tag>

   (see `bioconductor-refplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-refplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-refplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-refplus
   :alt:   (downloads)
.. |docker_bioconductor-refplus| image:: https://quay.io/repository/biocontainers/bioconductor-refplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-refplus
.. _`bioconductor-refplus/tags`: https://quay.io/repository/biocontainers/bioconductor-refplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-refplus";
        var versions = ["1.70.0","1.68.0","1.64.0","1.62.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-refplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-refplus/README.html