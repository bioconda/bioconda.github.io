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
      
      

      ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-1``,  ``1.31-0``,  ``1.29-2``,  ``1.29-1``,  ``1.29-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-extutils-makemaker: ``>=7.7``
   :depends on perl-file-slurper: ``>=0.014``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install perl-tree-dag_node

to add into an existing workspace instead, run::

    pixi add perl-tree-dag_node

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tree-dag_node

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tree-dag_node

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tree-dag_node:<tag>

(see `perl-tree-dag_node/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tree-dag_node| image:: https://img.shields.io/conda/dn/bioconda/perl-tree-dag_node.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tree-dag_node
   :alt:   (downloads)
.. |docker_perl-tree-dag_node| image:: https://quay.io/repository/biocontainers/perl-tree-dag_node/status
   :target: https://quay.io/repository/biocontainers/perl-tree-dag_node
.. _`perl-tree-dag_node/tags`: https://quay.io/repository/biocontainers/perl-tree-dag_node?tab=tags


.. raw:: html

    <script>
        var package = "perl-tree-dag_node";
        var versions = ["1.35","1.34","1.33","1.32","1.31"];
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