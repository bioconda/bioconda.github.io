:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnacopy'
.. highlight: bash

bioconductor-dnacopy
====================

.. conda:recipe:: bioconductor-dnacopy
   :replaces_section_title:
   :noindex:

   DNA copy number data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DNAcopy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dnacopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnacopy/meta.yaml>`_
   :links: biotools: :biotools:`dnacopy`, doi: :doi:`10.1038/nmeth.3252`

   Implements the circular binary segmentation \(CBS\) algorithm to segment DNA copy number data and identify genomic regions with abnormal copy number.


.. conda:package:: bioconductor-dnacopy

   |downloads_bioconductor-dnacopy| |docker_bioconductor-dnacopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.74.1-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.68.0-2</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.74.1-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.68.0-2``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.1-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
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

      mamba install bioconductor-dnacopy

   and update with::

      mamba update bioconductor-dnacopy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dnacopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnacopy:<tag>

   (see `bioconductor-dnacopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnacopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnacopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnacopy
   :alt:   (downloads)
.. |docker_bioconductor-dnacopy| image:: https://quay.io/repository/biocontainers/bioconductor-dnacopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnacopy
.. _`bioconductor-dnacopy/tags`: https://quay.io/repository/biocontainers/bioconductor-dnacopy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnacopy";
        var versions = ["1.76.0","1.74.1","1.72.0","1.72.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnacopy/README.html