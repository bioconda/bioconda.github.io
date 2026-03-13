:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-svg-graph'
.. highlight: bash

perl-svg-graph
==============

.. conda:recipe:: perl-svg-graph
   :replaces_section_title:
   :noindex:

   Visualize your data in Scalable Vector Graphics \(SVG\) format.

   :homepage: http://metacpan.org/pod/SVG-Graph
   :license: unknown
   :recipe: /`perl-svg-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg-graph/meta.yaml>`_

   


.. conda:package:: perl-svg-graph

   |downloads_perl-svg-graph| |docker_perl-svg-graph|

   :versions:
      
      

      ``0.02-4``,  ``0.02-3``,  ``0.02-2``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-math-derivative: 
   :depends on perl-math-spline: 
   :depends on perl-statistics-descriptive: 
   :depends on perl-svg: 
   :depends on perl-tree-dag_node: 

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

    pixi global install perl-svg-graph

to add into an existing workspace instead, run::

    pixi add perl-svg-graph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-svg-graph

Alternatively, to install into a new environment, run::

    conda create -n envname perl-svg-graph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-svg-graph:<tag>

(see `perl-svg-graph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-svg-graph| image:: https://img.shields.io/conda/dn/bioconda/perl-svg-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-svg-graph
   :alt:   (downloads)
.. |docker_perl-svg-graph| image:: https://quay.io/repository/biocontainers/perl-svg-graph/status
   :target: https://quay.io/repository/biocontainers/perl-svg-graph
.. _`perl-svg-graph/tags`: https://quay.io/repository/biocontainers/perl-svg-graph?tab=tags


.. raw:: html

    <script>
        var package = "perl-svg-graph";
        var versions = ["0.02","0.02","0.02","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-svg-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-svg-graph/README.html