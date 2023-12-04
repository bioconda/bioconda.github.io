:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plier'
.. highlight: bash

bioconductor-plier
==================

.. conda:recipe:: bioconductor-plier
   :replaces_section_title:
   :noindex:

   Implements the Affymetrix PLIER algorithm

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/plier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-plier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plier/meta.yaml>`_
   :links: biotools: :biotools:`plier`, doi: :doi:`10.1038/nmeth.3252`

   The PLIER \(Probe Logarithmic Error Intensity Estimate\) method produces an improved signal by accounting for experimentally observed patterns in probe behavior and handling error at the appropriately at low and high signal values.


.. conda:package:: bioconductor-plier

   |downloads_bioconductor-plier| |docker_bioconductor-plier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-plier

   and update with::

      mamba update bioconductor-plier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plier:<tag>

   (see `bioconductor-plier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plier
   :alt:   (downloads)
.. |docker_bioconductor-plier| image:: https://quay.io/repository/biocontainers/bioconductor-plier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plier
.. _`bioconductor-plier/tags`: https://quay.io/repository/biocontainers/bioconductor-plier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plier";
        var versions = ["1.72.0","1.70.0","1.68.0","1.68.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plier/README.html