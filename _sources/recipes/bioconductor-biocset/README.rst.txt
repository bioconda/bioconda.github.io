:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocset'
.. highlight: bash

bioconductor-biocset
====================

.. conda:recipe:: bioconductor-biocset
   :replaces_section_title:
   :noindex:

   Representing Different Biological Sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocSet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocset/meta.yaml>`_

   BiocSet displays different biological sets in a triple tibble format. These three tibbles are \`element\`\, \`set\`\, and \`elementset\`. The user has the abilty to activate one of these three tibbles to perform common functions from the dplyr package. Mapping functionality and accessing web references for elements\/sets are also available in BiocSet.


.. conda:package:: bioconductor-biocset

   |downloads_bioconductor-biocset| |docker_bioconductor-biocset|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ontologyindex: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-biocset

   and update with::

      mamba update bioconductor-biocset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocset:<tag>

   (see `bioconductor-biocset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocset
   :alt:   (downloads)
.. |docker_bioconductor-biocset| image:: https://quay.io/repository/biocontainers/bioconductor-biocset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocset
.. _`bioconductor-biocset/tags`: https://quay.io/repository/biocontainers/bioconductor-biocset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocset";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocset/README.html