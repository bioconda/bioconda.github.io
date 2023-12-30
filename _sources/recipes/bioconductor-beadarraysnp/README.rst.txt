:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarraysnp'
.. highlight: bash

bioconductor-beadarraysnp
=========================

.. conda:recipe:: bioconductor-beadarraysnp
   :replaces_section_title:
   :noindex:

   Normalization and reporting of Illumina SNP bead arrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/beadarraySNP.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarraysnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp/meta.yaml>`_
   :links: biotools: :biotools:`beadarraysnp`, doi: :doi:`10.1093/bioinformatics/btm311`

   Importing data from Illumina SNP experiments and performing copy number calculations and reports.


.. conda:package:: bioconductor-beadarraysnp

   |downloads_bioconductor-beadarraysnp| |docker_bioconductor-beadarraysnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-quantsmooth: ``>=1.68.0,<1.69.0``
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

      mamba install bioconductor-beadarraysnp

   and update with::

      mamba update bioconductor-beadarraysnp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beadarraysnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarraysnp:<tag>

   (see `bioconductor-beadarraysnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarraysnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarraysnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarraysnp
   :alt:   (downloads)
.. |docker_bioconductor-beadarraysnp| image:: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp
.. _`bioconductor-beadarraysnp/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadarraysnp";
        var versions = ["1.68.0","1.66.0","1.64.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html