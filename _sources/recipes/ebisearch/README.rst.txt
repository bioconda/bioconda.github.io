:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebisearch'
.. highlight: bash

ebisearch
=========

.. conda:recipe:: ebisearch
   :replaces_section_title:
   :noindex:

   A Python library for interacting with EBI Search\'s API

   :homepage: https://github.com/bebatut/ebisearch
   :license: MIT / MIT License
   :recipe: /`ebisearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch/meta.yaml>`_

   


.. conda:package:: ebisearch

   |downloads_ebisearch| |docker_ebisearch|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on click: 
   :depends on flake8: 
   :depends on python: ``<3``
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

    pixi global install ebisearch

to add into an existing workspace instead, run::

    pixi add ebisearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ebisearch

Alternatively, to install into a new environment, run::

    conda create -n envname ebisearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ebisearch:<tag>

(see `ebisearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ebisearch| image:: https://img.shields.io/conda/dn/bioconda/ebisearch.svg?style=flat
   :target: https://anaconda.org/bioconda/ebisearch
   :alt:   (downloads)
.. |docker_ebisearch| image:: https://quay.io/repository/biocontainers/ebisearch/status
   :target: https://quay.io/repository/biocontainers/ebisearch
.. _`ebisearch/tags`: https://quay.io/repository/biocontainers/ebisearch?tab=tags


.. raw:: html

    <script>
        var package = "ebisearch";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebisearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebisearch/README.html