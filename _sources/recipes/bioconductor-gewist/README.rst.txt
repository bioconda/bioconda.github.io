:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gewist'
.. highlight: bash

bioconductor-gewist
===================

.. conda:recipe:: bioconductor-gewist
   :replaces_section_title:
   :noindex:

   Gene Environment Wide Interaction Search Threshold

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GEWIST.html
   :license: GPL-2
   :recipe: /`bioconductor-gewist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist/meta.yaml>`_
   :links: biotools: :biotools:`gewist`, doi: :doi:`10.1002/gepi.20624`

   This \'GEWIST\' package provides statistical tools to efficiently optimize SNP prioritization for gene\-gene and gene\-environment interactions.


.. conda:package:: bioconductor-gewist

   |downloads_bioconductor-gewist| |docker_bioconductor-gewist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-car: 
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

      mamba install bioconductor-gewist

   and update with::

      mamba update bioconductor-gewist

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gewist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gewist:<tag>

   (see `bioconductor-gewist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gewist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gewist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gewist
   :alt:   (downloads)
.. |docker_bioconductor-gewist| image:: https://quay.io/repository/biocontainers/bioconductor-gewist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gewist
.. _`bioconductor-gewist/tags`: https://quay.io/repository/biocontainers/bioconductor-gewist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gewist";
        var versions = ["1.50.0","1.46.0","1.44.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gewist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gewist/README.html