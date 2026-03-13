:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcsbsearch'
.. highlight: bash

rcsbsearch
==========

.. conda:recipe:: rcsbsearch
   :replaces_section_title:
   :noindex:

   Access the RCSB Search API

   :homepage: https://github.com/sbliven/rcsbsearch
   :documentation: https://rcsbsearch.readthedocs.io/en/latest/
   
   :license: BSD / BSD
   :recipe: /`rcsbsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch/meta.yaml>`_

   


.. conda:package:: rcsbsearch

   |downloads_rcsbsearch| |docker_rcsbsearch|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends on jsonschema: 
   :depends on python: ``>=3.7``
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

    pixi global install rcsbsearch

to add into an existing workspace instead, run::

    pixi add rcsbsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rcsbsearch

Alternatively, to install into a new environment, run::

    conda create -n envname rcsbsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rcsbsearch:<tag>

(see `rcsbsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rcsbsearch| image:: https://img.shields.io/conda/dn/bioconda/rcsbsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rcsbsearch
   :alt:   (downloads)
.. |docker_rcsbsearch| image:: https://quay.io/repository/biocontainers/rcsbsearch/status
   :target: https://quay.io/repository/biocontainers/rcsbsearch
.. _`rcsbsearch/tags`: https://quay.io/repository/biocontainers/rcsbsearch?tab=tags


.. raw:: html

    <script>
        var package = "rcsbsearch";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcsbsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcsbsearch/README.html