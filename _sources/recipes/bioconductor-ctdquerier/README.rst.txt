:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctdquerier'
.. highlight: bash

bioconductor-ctdquerier
=======================

.. conda:recipe:: bioconductor-ctdquerier
   :replaces_section_title:
   :noindex:

   Package for CTDbase data query\, visualization and downstream analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CTDquerier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctdquerier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdquerier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdquerier/meta.yaml>`_

   Package to retrieve and visualize data from the Comparative Toxicogenomics Database \(http\:\/\/ctdbase.org\/\). The downloaded data is formated as DataFrames for further downstream analyses.


.. conda:package:: bioconductor-ctdquerier

   |downloads_bioconductor-ctdquerier| |docker_bioconductor-ctdquerier|

   :versions:
      
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-rcurl: 
   :depends r-stringdist: 
   :depends r-stringr: 
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

      mamba install bioconductor-ctdquerier

   and update with::

      mamba update bioconductor-ctdquerier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctdquerier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctdquerier:<tag>

   (see `bioconductor-ctdquerier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctdquerier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctdquerier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctdquerier
   :alt:   (downloads)
.. |docker_bioconductor-ctdquerier| image:: https://quay.io/repository/biocontainers/bioconductor-ctdquerier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctdquerier
.. _`bioconductor-ctdquerier/tags`: https://quay.io/repository/biocontainers/bioconductor-ctdquerier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctdquerier";
        var versions = ["2.14.0","2.10.0","2.8.0","2.6.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctdquerier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctdquerier/README.html