:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmseda'
.. highlight: bash

bioconductor-msmseda
====================

.. conda:recipe:: bioconductor-msmseda
   :replaces_section_title:
   :noindex:

   Exploratory Data Analysis of LC\-MS\/MS data by spectral counts

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/msmsEDA.html
   :license: GPL-2
   :recipe: /`bioconductor-msmseda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda/meta.yaml>`_
   :links: biotools: :biotools:`msmseda`, doi: :doi:`10.1038/nmeth.3252`

   Exploratory data analysis to assess the quality of a set of LC\-MS\/MS experiments\, and visualize de influence of the involved factors.


.. conda:package:: bioconductor-msmseda

   |downloads_bioconductor-msmseda| |docker_bioconductor-msmseda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-msmseda

   and update with::

      mamba update bioconductor-msmseda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msmseda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msmseda:<tag>

   (see `bioconductor-msmseda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msmseda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmseda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmseda
   :alt:   (downloads)
.. |docker_bioconductor-msmseda| image:: https://quay.io/repository/biocontainers/bioconductor-msmseda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmseda
.. _`bioconductor-msmseda/tags`: https://quay.io/repository/biocontainers/bioconductor-msmseda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msmseda";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmseda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmseda/README.html