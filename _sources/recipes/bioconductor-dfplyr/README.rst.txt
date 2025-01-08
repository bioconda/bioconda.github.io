:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dfplyr'
.. highlight: bash

bioconductor-dfplyr
===================

.. conda:recipe:: bioconductor-dfplyr
   :replaces_section_title:
   :noindex:

   A \`DataFrame\` \(\`S4Vectors\`\) backend for \`dplyr\`

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DFplyr.html
   :license: GPL-3
   :recipe: /`bioconductor-dfplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfplyr/meta.yaml>`_

   Provides \`dplyr\` verbs \(\`mutate\`\, \`select\`\, \`filter\`\, etc...\) supporting \`S4Vectors\:\:DataFrame\` objects. Importantly\, this is achieved without conversion to an intermediate \`tibble\`. Adds grouping infrastructure to \`DataFrame\` which is respected by the transformation verbs.


.. conda:package:: bioconductor-dfplyr

   |downloads_bioconductor-dfplyr| |docker_bioconductor-dfplyr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-dfplyr

   and update with::

      mamba update bioconductor-dfplyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dfplyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dfplyr:<tag>

   (see `bioconductor-dfplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dfplyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dfplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dfplyr
   :alt:   (downloads)
.. |docker_bioconductor-dfplyr| image:: https://quay.io/repository/biocontainers/bioconductor-dfplyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dfplyr
.. _`bioconductor-dfplyr/tags`: https://quay.io/repository/biocontainers/bioconductor-dfplyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dfplyr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dfplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dfplyr/README.html