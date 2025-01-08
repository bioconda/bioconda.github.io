:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-italics'
.. highlight: bash

bioconductor-italics
====================

.. conda:recipe:: bioconductor-italics
   :replaces_section_title:
   :noindex:

   ITALICS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ITALICS.html
   :license: GPL-2
   :recipe: /`bioconductor-italics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics/meta.yaml>`_

   A Method to normalize of Affymetrix GeneChip Human Mapping 100K and 500K set


.. conda:package:: bioconductor-italics

   |downloads_bioconductor-italics| |docker_bioconductor-italics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.74.0,<1.75.0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends bioconductor-italicsdata: ``>=2.40.0,<2.41.0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0``
   :depends bioconductor-pd.mapping50k.xba240: ``>=3.12.0,<3.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-italics

   and update with::

      mamba update bioconductor-italics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-italics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-italics:<tag>

   (see `bioconductor-italics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-italics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-italics
   :alt:   (downloads)
.. |docker_bioconductor-italics| image:: https://quay.io/repository/biocontainers/bioconductor-italics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italics
.. _`bioconductor-italics/tags`: https://quay.io/repository/biocontainers/bioconductor-italics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-italics";
        var versions = ["2.62.0","2.60.0","2.58.0","2.54.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italics/README.html