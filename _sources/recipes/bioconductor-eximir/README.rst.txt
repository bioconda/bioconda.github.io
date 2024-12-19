:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eximir'
.. highlight: bash

bioconductor-eximir
===================

.. conda:recipe:: bioconductor-eximir
   :replaces_section_title:
   :noindex:

   R functions for the normalization of Exiqon miRNA array data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ExiMiR.html
   :license: GPL-2
   :recipe: /`bioconductor-eximir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eximir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eximir/meta.yaml>`_
   :links: biotools: :biotools:`eximir`, doi: :doi:`10.1186/1756-0500-7-302`

   This package contains functions for reading raw data in ImaGene TXT format obtained from Exiqon miRCURY LNA arrays\, annotating them with appropriate GAL files\, and normalizing them using a spike\-in probe\-based method. Other platforms and data formats are also supported.


.. conda:package:: bioconductor-eximir

   |downloads_bioconductor-eximir| |docker_bioconductor-eximir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
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

      mamba install bioconductor-eximir

   and update with::

      mamba update bioconductor-eximir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eximir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eximir:<tag>

   (see `bioconductor-eximir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eximir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eximir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eximir
   :alt:   (downloads)
.. |docker_bioconductor-eximir| image:: https://quay.io/repository/biocontainers/bioconductor-eximir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eximir
.. _`bioconductor-eximir/tags`: https://quay.io/repository/biocontainers/bioconductor-eximir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eximir";
        var versions = ["2.48.0","2.44.0","2.42.0","2.40.0","2.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eximir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eximir/README.html