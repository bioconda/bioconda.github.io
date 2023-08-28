:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellxgenedp'
.. highlight: bash

bioconductor-cellxgenedp
========================

.. conda:recipe:: bioconductor-cellxgenedp
   :replaces_section_title:
   :noindex:

   Discover and Access Single Cell Data Sets in the cellxgene Data Portal

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cellxgenedp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellxgenedp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellxgenedp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellxgenedp/meta.yaml>`_

   The cellxgene data portal \(https\:\/\/cellxgene.cziscience.com\/\) provides a graphical user interface to collections of single\-cell sequence data processed in standard ways to \'count matrix\' summaries. The cellxgenedp package provides an alternative\, R\-based inteface\, allowind data discovery\, viewing\, and downloading.


.. conda:package:: bioconductor-cellxgenedp

   |downloads_bioconductor-cellxgenedp| |docker_bioconductor-cellxgenedp|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-rjsoncons: 
   :depends r-shiny: 
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

      mamba install bioconductor-cellxgenedp

   and update with::

      mamba update bioconductor-cellxgenedp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellxgenedp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellxgenedp:<tag>

   (see `bioconductor-cellxgenedp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellxgenedp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellxgenedp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellxgenedp
   :alt:   (downloads)
.. |docker_bioconductor-cellxgenedp| image:: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp
.. _`bioconductor-cellxgenedp/tags`: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellxgenedp";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellxgenedp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellxgenedp/README.html