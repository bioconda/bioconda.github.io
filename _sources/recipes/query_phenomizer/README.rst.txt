:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'query_phenomizer'
.. highlight: bash

query_phenomizer
================

.. conda:recipe:: query_phenomizer
   :replaces_section_title:
   :noindex:

   Tool for query and parsing the phenomizer tool

   :homepage: https://www.github.com/moonso/query_phenomizer
   :license: MIT / MIT
   :recipe: /`query_phenomizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer/meta.yaml>`_

   


.. conda:package:: query_phenomizer

   |downloads_query_phenomizer| |docker_query_phenomizer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2-0``,  ``0.5-2``,  ``0.5-0``

      

   
   :depends on click: 
   :depends on pytest: 
   :depends on python: 
   :depends on requests: 

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

    pixi global install query_phenomizer

to add into an existing workspace instead, run::

    pixi add query_phenomizer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install query_phenomizer

Alternatively, to install into a new environment, run::

    conda create -n envname query_phenomizer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/query_phenomizer:<tag>

(see `query_phenomizer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_query_phenomizer| image:: https://img.shields.io/conda/dn/bioconda/query_phenomizer.svg?style=flat
   :target: https://anaconda.org/bioconda/query_phenomizer
   :alt:   (downloads)
.. |docker_query_phenomizer| image:: https://quay.io/repository/biocontainers/query_phenomizer/status
   :target: https://quay.io/repository/biocontainers/query_phenomizer
.. _`query_phenomizer/tags`: https://quay.io/repository/biocontainers/query_phenomizer?tab=tags


.. raw:: html

    <script>
        var package = "query_phenomizer";
        var versions = ["1.2.1","1.2","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/query_phenomizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/query_phenomizer/README.html