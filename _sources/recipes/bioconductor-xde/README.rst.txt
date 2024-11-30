:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xde'
.. highlight: bash

bioconductor-xde
================

.. conda:recipe:: bioconductor-xde
   :replaces_section_title:
   :noindex:

   XDE\: a Bayesian hierarchical model for cross\-study analysis of differential gene expression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/XDE.html
   :license: LGPL-2
   :recipe: /`bioconductor-xde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xde/meta.yaml>`_
   :links: biotools: :biotools:`xde`

   Multi\-level model for cross\-study detection of differential gene expression.


.. conda:package:: bioconductor-xde

   |downloads_bioconductor-xde| |docker_bioconductor-xde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-1</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-genemeta: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genemeta: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-siggenes: ``>=1.76.0,<1.77.0``
   :depends bioconductor-siggenes: ``>=1.76.0,<1.77.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: 
   :depends r-mvtnorm: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-xde

   and update with::

      mamba update bioconductor-xde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xde:<tag>

   (see `bioconductor-xde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xde
   :alt:   (downloads)
.. |docker_bioconductor-xde| image:: https://quay.io/repository/biocontainers/bioconductor-xde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xde
.. _`bioconductor-xde/tags`: https://quay.io/repository/biocontainers/bioconductor-xde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xde";
        var versions = ["2.48.0","2.46.0","2.44.0","2.44.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xde/README.html