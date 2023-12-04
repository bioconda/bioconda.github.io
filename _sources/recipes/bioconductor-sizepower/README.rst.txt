:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sizepower'
.. highlight: bash

bioconductor-sizepower
======================

.. conda:recipe:: bioconductor-sizepower
   :replaces_section_title:
   :noindex:

   Sample Size and Power Calculation in Micorarray Studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sizepower.html
   :license: LGPL
   :recipe: /`bioconductor-sizepower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sizepower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sizepower/meta.yaml>`_
   :links: biotools: :biotools:`sizepower`, doi: :doi:`10.1038/nmeth.3252`

   This package has been prepared to assist users in computing either a sample size or power value for a microarray experimental study. The user is referred to the cited references for technical background on the methodology underpinning these calculations. This package provides support for five types of sample size and power calculations. These five types can be adapted in various ways to encompass many of the standard designs encountered in practice.


.. conda:package:: bioconductor-sizepower

   |downloads_bioconductor-sizepower| |docker_bioconductor-sizepower|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-sizepower

   and update with::

      mamba update bioconductor-sizepower

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sizepower

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sizepower:<tag>

   (see `bioconductor-sizepower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sizepower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sizepower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sizepower
   :alt:   (downloads)
.. |docker_bioconductor-sizepower| image:: https://quay.io/repository/biocontainers/bioconductor-sizepower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sizepower
.. _`bioconductor-sizepower/tags`: https://quay.io/repository/biocontainers/bioconductor-sizepower?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sizepower";
        var versions = ["1.72.0","1.70.0","1.68.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sizepower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sizepower/README.html