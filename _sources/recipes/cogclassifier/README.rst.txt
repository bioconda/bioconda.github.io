:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogclassifier'
.. highlight: bash

cogclassifier
=============

.. conda:recipe:: cogclassifier
   :replaces_section_title:
   :noindex:

   Classify prokaryote protein sequences into COG functional category.

   :homepage: https://github.com/moshi4/COGclassifier
   :documentation: https://github.com/moshi4/COGclassifier/blob/v2.0.0/README.md
   
   :license: MIT / MIT
   :recipe: /`cogclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier/meta.yaml>`_

   


.. conda:package:: cogclassifier

   |downloads_cogclassifier| |docker_cogclassifier|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on altair: ``>=5.0.0``
   :depends on blast: ``>=2.12.0``
   :depends on pandas: ``>=2.0.0``
   :depends on pydantic: ``>=2.11.3``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.27.1``
   :depends on typer: ``>=0.15.2``
   :depends on vl-convert-python: ``>=1.7.0``

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

    pixi global install cogclassifier

to add into an existing workspace instead, run::

    pixi add cogclassifier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cogclassifier

Alternatively, to install into a new environment, run::

    conda create -n envname cogclassifier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cogclassifier:<tag>

(see `cogclassifier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cogclassifier| image:: https://img.shields.io/conda/dn/bioconda/cogclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/cogclassifier
   :alt:   (downloads)
.. |docker_cogclassifier| image:: https://quay.io/repository/biocontainers/cogclassifier/status
   :target: https://quay.io/repository/biocontainers/cogclassifier
.. _`cogclassifier/tags`: https://quay.io/repository/biocontainers/cogclassifier?tab=tags


.. raw:: html

    <script>
        var package = "cogclassifier";
        var versions = ["2.0.0","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogclassifier/README.html