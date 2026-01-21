:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-heattree'
.. highlight: bash

r-heattree
==========

.. conda:recipe:: r-heattree
   :replaces_section_title:
   :noindex:

   A wrapper for the javascript \`heat\-tree\` package for interactive phylogenetic tree visualization widgets

   :homepage: https://github.com/grunwaldlab/heattree
   :license: MIT / MIT
   :recipe: /`r-heattree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-heattree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-heattree/meta.yaml>`_

   


.. conda:package:: r-heattree

   |downloads_r-heattree| |docker_r-heattree|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-htmlwidgets: 
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

      mamba install r-heattree

   and update with::

      mamba update r-heattree

  To create a new environment, run::

      mamba create --name myenvname r-heattree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-heattree:<tag>

   (see `r-heattree/tags`_ for valid values for ``<tag>``)


.. |downloads_r-heattree| image:: https://img.shields.io/conda/dn/bioconda/r-heattree.svg?style=flat
   :target: https://anaconda.org/bioconda/r-heattree
   :alt:   (downloads)
.. |docker_r-heattree| image:: https://quay.io/repository/biocontainers/r-heattree/status
   :target: https://quay.io/repository/biocontainers/r-heattree
.. _`r-heattree/tags`: https://quay.io/repository/biocontainers/r-heattree?tab=tags


.. raw:: html

    <script>
        var package = "r-heattree";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-heattree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-heattree/README.html