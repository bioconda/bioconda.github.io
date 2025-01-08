:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gladiatox'
.. highlight: bash

bioconductor-gladiatox
======================

.. conda:recipe:: bioconductor-gladiatox
   :replaces_section_title:
   :noindex:

   R Package for Processing High Content Screening data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GladiaTOX.html
   :license: GPL-2
   :recipe: /`bioconductor-gladiatox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox/meta.yaml>`_

   GladiaTOX R package is an open\-source\, flexible solution to high\-content screening data processing and reporting in biomedical research. GladiaTOX takes advantage of the tcpl core functionalities and provides a number of extensions\: it provides a web\-service solution to fetch raw data\; it computes severity scores and exports ToxPi formatted files\; furthermore it contains a suite of functionalities to generate pdf reports for quality control and data processing.


.. conda:package:: bioconductor-gladiatox

   |downloads_bioconductor-gladiatox| |docker_bioconductor-gladiatox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-brew: 
   :depends r-data.table: ``>=1.9.4``
   :depends r-dbi: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-numderiv: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-rmariadb: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml: 
   :depends r-xtable: 
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

      mamba install bioconductor-gladiatox

   and update with::

      mamba update bioconductor-gladiatox

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gladiatox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gladiatox:<tag>

   (see `bioconductor-gladiatox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gladiatox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gladiatox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gladiatox
   :alt:   (downloads)
.. |docker_bioconductor-gladiatox| image:: https://quay.io/repository/biocontainers/bioconductor-gladiatox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gladiatox
.. _`bioconductor-gladiatox/tags`: https://quay.io/repository/biocontainers/bioconductor-gladiatox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gladiatox";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html