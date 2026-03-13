:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapsearch'
.. highlight: bash

rapsearch
=========

.. conda:recipe:: rapsearch
   :replaces_section_title:
   :noindex:

   RAPSearch2 is a tool for fast protein similarity searches.

   :homepage: http://omics.informatics.indiana.edu/mg/RAPSearch2/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rapsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch/meta.yaml>`_
   :links: biotools: :biotools:`rapsearch`

   


.. conda:package:: rapsearch

   |downloads_rapsearch| |docker_rapsearch|

   :versions:
      
      

      ``2.24-7``,  ``2.24-6``,  ``2.24-5``,  ``2.24-4``,  ``2.24-3``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install rapsearch

to add into an existing workspace instead, run::

    pixi add rapsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rapsearch

Alternatively, to install into a new environment, run::

    conda create -n envname rapsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rapsearch:<tag>

(see `rapsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rapsearch| image:: https://img.shields.io/conda/dn/bioconda/rapsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rapsearch
   :alt:   (downloads)
.. |docker_rapsearch| image:: https://quay.io/repository/biocontainers/rapsearch/status
   :target: https://quay.io/repository/biocontainers/rapsearch
.. _`rapsearch/tags`: https://quay.io/repository/biocontainers/rapsearch?tab=tags


.. raw:: html

    <script>
        var package = "rapsearch";
        var versions = ["2.24","2.24","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapsearch/README.html