:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treemaker'
.. highlight: bash

treemaker
=========

.. conda:recipe:: treemaker
   :replaces_section_title:
   :noindex:

   A python tool for generating a Newick formatted tree from alist of classifications

   :homepage: https://github.com/SimonGreenhill/treemaker
   :license: BSD / BSD-3-Clause
   :recipe: /`treemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemaker/meta.yaml>`_

   


.. conda:package:: treemaker

   |downloads_treemaker| |docker_treemaker|

   :versions:
      
      

      ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends python: 
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

      mamba install treemaker

   and update with::

      mamba update treemaker

  To create a new environment, run::

      mamba create --name myenvname treemaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treemaker:<tag>

   (see `treemaker/tags`_ for valid values for ``<tag>``)


.. |downloads_treemaker| image:: https://img.shields.io/conda/dn/bioconda/treemaker.svg?style=flat
   :target: https://anaconda.org/bioconda/treemaker
   :alt:   (downloads)
.. |docker_treemaker| image:: https://quay.io/repository/biocontainers/treemaker/status
   :target: https://quay.io/repository/biocontainers/treemaker
.. _`treemaker/tags`: https://quay.io/repository/biocontainers/treemaker?tab=tags


.. raw:: html

    <script>
        var package = "treemaker";
        var versions = ["1.4","1.3","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemaker/README.html