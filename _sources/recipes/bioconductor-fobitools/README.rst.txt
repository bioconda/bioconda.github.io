:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fobitools'
.. highlight: bash

bioconductor-fobitools
======================

.. conda:recipe:: bioconductor-fobitools
   :replaces_section_title:
   :noindex:

   Tools For Manipulating FOBI Ontology

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fobitools.html
   :license: GPL-3
   :recipe: /`bioconductor-fobitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fobitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fobitools/meta.yaml>`_

   A set of tools for interacting with Food\-Biomarker Ontology \(FOBI\). A collection of basic manipulation tools for biological significance analysis\, graphs\, and text mining strategies for annotating nutritional data.


.. conda:package:: bioconductor-fobitools

   |downloads_bioconductor-fobitools| |docker_bioconductor-fobitools|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clisymbols: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-magrittr: 
   :depends r-ontologyindex: 
   :depends r-purrr: 
   :depends r-recordlinkage: 
   :depends r-stringr: 
   :depends r-textclean: 
   :depends r-tictoc: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-vroom: 
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

      mamba install bioconductor-fobitools

   and update with::

      mamba update bioconductor-fobitools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fobitools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fobitools:<tag>

   (see `bioconductor-fobitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fobitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fobitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fobitools
   :alt:   (downloads)
.. |docker_bioconductor-fobitools| image:: https://quay.io/repository/biocontainers/bioconductor-fobitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fobitools
.. _`bioconductor-fobitools/tags`: https://quay.io/repository/biocontainers/bioconductor-fobitools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fobitools";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fobitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fobitools/README.html