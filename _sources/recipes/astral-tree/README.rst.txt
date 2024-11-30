:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'astral-tree'
.. highlight: bash

astral-tree
===========

.. conda:recipe:: astral-tree
   :replaces_section_title:
   :noindex:

   ASTRAL is a tool for estimating an unrooted species tree given a set of unrooted gene trees.

   :homepage: https://github.com/smirarab/ASTRAL
   :license: APACHE / Apache License 2.0
   :recipe: /`astral-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astral-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astral-tree/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2129-y`

   ASTRAL is a tool for estimating an unrooted species tree given a set of unrooted gene trees. 
   ASTRAL is statistically consistent under the multi\-species coalescent model 
   \(and thus is useful for handling incomplete lineage sorting\, i.e.\, ILS\). 
   ASTRAL finds the species tree that has the maximum number of shared induced 
   quartet trees with the set of gene trees\, subject to the constraint that 
   the set of bipartitions in the species tree comes from a predefined set of bipartitions. 
   This predefined set is empirically decided by ASTRAL \(but see tutorial on how to expand it\). 
   The current code corresponds to ASTRAL\-III.



.. conda:package:: astral-tree

   |downloads_astral-tree| |docker_astral-tree|

   :versions:
      
      

      ``5.7.8-1``,  ``5.7.8-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install astral-tree

   and update with::

      mamba update astral-tree

  To create a new environment, run::

      mamba create --name myenvname astral-tree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/astral-tree:<tag>

   (see `astral-tree/tags`_ for valid values for ``<tag>``)


.. |downloads_astral-tree| image:: https://img.shields.io/conda/dn/bioconda/astral-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/astral-tree
   :alt:   (downloads)
.. |docker_astral-tree| image:: https://quay.io/repository/biocontainers/astral-tree/status
   :target: https://quay.io/repository/biocontainers/astral-tree
.. _`astral-tree/tags`: https://quay.io/repository/biocontainers/astral-tree?tab=tags


.. raw:: html

    <script>
        var package = "astral-tree";
        var versions = ["5.7.8","5.7.8"];
    </script>





Notes
-----
astral is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'astral\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-fastqsplitter \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/astral-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/astral-tree/README.html