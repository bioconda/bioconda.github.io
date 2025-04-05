:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tree-dag_node'
.. highlight: bash

perl-tree-dag_node
==================

.. conda:recipe:: perl-tree-dag_node
   :replaces_section_title:
   :noindex:

   An N\-ary tree.

   :homepage: http://metacpan.org/pod/Tree-DAG_Node
   :license: artistic_2
   :recipe: /`perl-tree-dag_node <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tree-dag_node>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tree-dag_node/meta.yaml>`_

   


.. conda:package:: perl-tree-dag_node

   |downloads_perl-tree-dag_node| |docker_perl-tree-dag_node|

   :versions:
      
      

      ``1.33-0``,  ``1.32-0``,  ``1.31-1``,  ``1.31-0``,  ``1.29-2``,  ``1.29-1``,  ``1.29-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: ``>=7.7``
   :depends perl-file-slurper: ``>=0.014``
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

      mamba install perl-tree-dag_node

   and update with::

      mamba update perl-tree-dag_node

  To create a new environment, run::

      mamba create --name myenvname perl-tree-dag_node

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tree-dag_node:<tag>

   (see `perl-tree-dag_node/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tree-dag_node| image:: https://img.shields.io/conda/dn/bioconda/perl-tree-dag_node.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tree-dag_node
   :alt:   (downloads)
.. |docker_perl-tree-dag_node| image:: https://quay.io/repository/biocontainers/perl-tree-dag_node/status
   :target: https://quay.io/repository/biocontainers/perl-tree-dag_node
.. _`perl-tree-dag_node/tags`: https://quay.io/repository/biocontainers/perl-tree-dag_node?tab=tags


.. raw:: html

    <script>
        var package = "perl-tree-dag_node";
        var versions = ["1.33","1.32","1.31","1.31","1.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tree-dag_node/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tree-dag_node/README.html