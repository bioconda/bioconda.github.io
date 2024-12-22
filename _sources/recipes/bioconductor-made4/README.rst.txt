:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-made4'
.. highlight: bash

bioconductor-made4
==================

.. conda:recipe:: bioconductor-made4
   :replaces_section_title:
   :noindex:

   Multivariate analysis of microarray data using ADE4

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/made4.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-made4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-made4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-made4/meta.yaml>`_
   :links: biotools: :biotools:`made4`

   Multivariate data analysis and graphical display of microarray data. Functions include for supervised dimension reduction \(between group analysis\) and joint dimension reduction of 2 datasets \(coinertia analysis\). It contains functions that require R package ade4.


.. conda:package:: bioconductor-made4

   |downloads_bioconductor-made4| |docker_bioconductor-made4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.61.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.61.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-ade4: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-made4

   and update with::

      mamba update bioconductor-made4

  To create a new environment, run::

      mamba create --name myenvname bioconductor-made4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-made4:<tag>

   (see `bioconductor-made4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-made4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-made4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-made4
   :alt:   (downloads)
.. |docker_bioconductor-made4| image:: https://quay.io/repository/biocontainers/bioconductor-made4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-made4
.. _`bioconductor-made4/tags`: https://quay.io/repository/biocontainers/bioconductor-made4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-made4";
        var versions = ["1.80.0","1.76.0","1.74.0","1.72.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-made4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-made4/README.html