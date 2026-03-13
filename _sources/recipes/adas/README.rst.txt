:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adas'
.. highlight: bash

adas
====

.. conda:recipe:: adas
   :replaces_section_title:
   :noindex:

   adas is a sequence database search engine for long sequences. It is an innovative application of Minimizer\, MinHash\, Coreset and Hierarchical Navigable Small World Graphs \(HNSW\)

   :homepage: https://github.com/jianshu93/adas
   :license: MIT
   :recipe: /`adas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adas/meta.yaml>`_

   


.. conda:package:: adas

   |downloads_adas| |docker_adas|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on usearch: 

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

    pixi global install adas

to add into an existing workspace instead, run::

    pixi add adas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install adas

Alternatively, to install into a new environment, run::

    conda create -n envname adas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/adas:<tag>

(see `adas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_adas| image:: https://img.shields.io/conda/dn/bioconda/adas.svg?style=flat
   :target: https://anaconda.org/bioconda/adas
   :alt:   (downloads)
.. |docker_adas| image:: https://quay.io/repository/biocontainers/adas/status
   :target: https://quay.io/repository/biocontainers/adas
.. _`adas/tags`: https://quay.io/repository/biocontainers/adas?tab=tags


.. raw:: html

    <script>
        var package = "adas";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adas/README.html