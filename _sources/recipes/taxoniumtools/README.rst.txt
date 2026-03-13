:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxoniumtools'
.. highlight: bash

taxoniumtools
=============

.. conda:recipe:: taxoniumtools
   :replaces_section_title:
   :noindex:

   Taxonium is a tool for exploring trees\, including those with millions of nodes. This tool generates files compatible with viewing in Taxonium from inputs like Newick and UShER files.

   :homepage: https://github.com/theosanderson/taxonium
   :license: GPL-3.0-only
   :recipe: /`taxoniumtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxoniumtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxoniumtools/meta.yaml>`_

   


.. conda:package:: taxoniumtools

   |downloads_taxoniumtools| |docker_taxoniumtools|

   :versions:
      
      

      ``2.1.17-0``

      

   
   :depends on alive-progress: 
   :depends on biopython: ``<=1.81``
   :depends on docker-py: 
   :depends on google-api-python-client: 
   :depends on orjson: 
   :depends on pandas: 
   :depends on protobuf: ``<4``
   :depends on psutil: 
   :depends on python: ``>=3.8``
   :depends on treeswift: 

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

    pixi global install taxoniumtools

to add into an existing workspace instead, run::

    pixi add taxoniumtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxoniumtools

Alternatively, to install into a new environment, run::

    conda create -n envname taxoniumtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxoniumtools:<tag>

(see `taxoniumtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxoniumtools| image:: https://img.shields.io/conda/dn/bioconda/taxoniumtools.svg?style=flat
   :target: https://anaconda.org/bioconda/taxoniumtools
   :alt:   (downloads)
.. |docker_taxoniumtools| image:: https://quay.io/repository/biocontainers/taxoniumtools/status
   :target: https://quay.io/repository/biocontainers/taxoniumtools
.. _`taxoniumtools/tags`: https://quay.io/repository/biocontainers/taxoniumtools?tab=tags


.. raw:: html

    <script>
        var package = "taxoniumtools";
        var versions = ["2.1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxoniumtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxoniumtools/README.html