:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-promise'
.. highlight: bash

bioconductor-promise
====================

.. conda:recipe:: bioconductor-promise
   :replaces_section_title:
   :noindex:

   PRojection Onto the Most Interesting Statistical Evidence

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PROMISE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-promise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-promise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-promise/meta.yaml>`_
   :links: biotools: :biotools:`promise`, doi: :doi:`10.1093/bioinformatics/btp357`

   A general tool to identify genomic features with a specific biologically interesting pattern of associations with multiple endpoint variables as described in Pounds et. al. \(2009\) Bioinformatics 25\: 2013\-2019


.. conda:package:: bioconductor-promise

   |downloads_bioconductor-promise| |docker_bioconductor-promise|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
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

      mamba install bioconductor-promise

   and update with::

      mamba update bioconductor-promise

  To create a new environment, run::

      mamba create --name myenvname bioconductor-promise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-promise:<tag>

   (see `bioconductor-promise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-promise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-promise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-promise
   :alt:   (downloads)
.. |docker_bioconductor-promise| image:: https://quay.io/repository/biocontainers/bioconductor-promise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-promise
.. _`bioconductor-promise/tags`: https://quay.io/repository/biocontainers/bioconductor-promise?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-promise";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-promise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-promise/README.html