:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-olin'
.. highlight: bash

bioconductor-olin
=================

.. conda:recipe:: bioconductor-olin
   :replaces_section_title:
   :noindex:

   Optimized local intensity\-dependent normalisation of two\-color microarrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OLIN.html
   :license: GPL-2
   :recipe: /`bioconductor-olin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olin/meta.yaml>`_
   :links: biotools: :biotools:`olin`

   Functions for normalisation of two\-color microarrays by optimised local regression and for detection of artefacts in microarray data


.. conda:package:: bioconductor-olin

   |downloads_bioconductor-olin| |docker_bioconductor-olin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfit: 
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

      mamba install bioconductor-olin

   and update with::

      mamba update bioconductor-olin

  To create a new environment, run::

      mamba create --name myenvname bioconductor-olin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-olin:<tag>

   (see `bioconductor-olin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-olin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-olin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-olin
   :alt:   (downloads)
.. |docker_bioconductor-olin| image:: https://quay.io/repository/biocontainers/bioconductor-olin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-olin
.. _`bioconductor-olin/tags`: https://quay.io/repository/biocontainers/bioconductor-olin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-olin";
        var versions = ["1.80.0","1.78.0","1.76.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-olin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-olin/README.html