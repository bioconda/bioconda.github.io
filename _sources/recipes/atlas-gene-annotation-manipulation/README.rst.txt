:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-gene-annotation-manipulation'
.. highlight: bash

atlas-gene-annotation-manipulation
==================================

.. conda:recipe:: atlas-gene-annotation-manipulation
   :replaces_section_title:
   :noindex:

   Scripts for manipulating gene annotation

   :homepage: https://github.com/ebi-gene-expression-group/atlas-gene-annotation-manipulation
   :license: Apache / Apache-2.0
   :recipe: /`atlas-gene-annotation-manipulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-gene-annotation-manipulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-gene-annotation-manipulation/meta.yaml>`_

   


.. conda:package:: atlas-gene-annotation-manipulation

   |downloads_atlas-gene-annotation-manipulation| |docker_atlas-gene-annotation-manipulation|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-rtracklayer: 
   :depends r-base: 
   :depends r-optparse: 
   :depends r-plyr: 
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

      mamba install atlas-gene-annotation-manipulation

   and update with::

      mamba update atlas-gene-annotation-manipulation

  To create a new environment, run::

      mamba create --name myenvname atlas-gene-annotation-manipulation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atlas-gene-annotation-manipulation:<tag>

   (see `atlas-gene-annotation-manipulation/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-gene-annotation-manipulation| image:: https://img.shields.io/conda/dn/bioconda/atlas-gene-annotation-manipulation.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-gene-annotation-manipulation
   :alt:   (downloads)
.. |docker_atlas-gene-annotation-manipulation| image:: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation/status
   :target: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation
.. _`atlas-gene-annotation-manipulation/tags`: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation?tab=tags


.. raw:: html

    <script>
        var package = "atlas-gene-annotation-manipulation";
        var versions = ["1.1.0","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-gene-annotation-manipulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-gene-annotation-manipulation/README.html