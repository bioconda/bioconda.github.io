:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hubmapr'
.. highlight: bash

bioconductor-hubmapr
====================

.. conda:recipe:: bioconductor-hubmapr
   :replaces_section_title:
   :noindex:

   Interface to \'HuBMAP\'

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HuBMAPR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hubmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubmapr/meta.yaml>`_

   \'HuBMAP\' provides an open\, global bio\-molecular atlas of the human body at the cellular level. The \`datasets\(\)\`\, \`samples\(\)\`\, \`donors\(\)\`\, \`publications\(\)\`\, and \`collections\(\)\` functions retrieves the information for each of these entity types. \`\*\_details\(\)\` are available for individual entries of each entity type. \`\*\_derived\(\)\` are available for retrieving derived datasets or samples for individual entries of each entity type. Data files can be accessed using \`files\_globus\_url\(\)\`.


.. conda:package:: bioconductor-hubmapr

   |downloads_bioconductor-hubmapr| |docker_bioconductor-hubmapr|

   :versions:
      
      

      ``0.99.6-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr2: 
   :depends r-purrr: 
   :depends r-rjsoncons: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-whisker: 
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

      mamba install bioconductor-hubmapr

   and update with::

      mamba update bioconductor-hubmapr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hubmapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hubmapr:<tag>

   (see `bioconductor-hubmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hubmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hubmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hubmapr
   :alt:   (downloads)
.. |docker_bioconductor-hubmapr| image:: https://quay.io/repository/biocontainers/bioconductor-hubmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hubmapr
.. _`bioconductor-hubmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-hubmapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hubmapr";
        var versions = ["0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hubmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hubmapr/README.html