:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsquantifyr'
.. highlight: bash

bioconductor-macsquantifyr
==========================

.. conda:recipe:: bioconductor-macsquantifyr
   :replaces_section_title:
   :noindex:

   Fast treatment of MACSQuantify FACS data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MACSQuantifyR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-macsquantifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsquantifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsquantifyr/meta.yaml>`_

   Automatically process the metadata of MACSQuantify FACS sorter. It runs multiple modules\: i\) imports of raw file and graphical selection of duplicates in well plate\, ii\) computes statistics on data and iii\) can compute combination index.


.. conda:package:: bioconductor-macsquantifyr

   |downloads_bioconductor-macsquantifyr| |docker_bioconductor-macsquantifyr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-png: 
   :depends r-prettydoc: 
   :depends r-readxl: 
   :depends r-rmarkdown: 
   :depends r-rvest: 
   :depends r-xml2: 
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

      mamba install bioconductor-macsquantifyr

   and update with::

      mamba update bioconductor-macsquantifyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macsquantifyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macsquantifyr:<tag>

   (see `bioconductor-macsquantifyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macsquantifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsquantifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsquantifyr
   :alt:   (downloads)
.. |docker_bioconductor-macsquantifyr| image:: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr
.. _`bioconductor-macsquantifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macsquantifyr";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsquantifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsquantifyr/README.html