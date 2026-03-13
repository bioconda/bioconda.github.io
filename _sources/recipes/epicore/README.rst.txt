:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epicore'
.. highlight: bash

epicore
=======

.. conda:recipe:: epicore
   :replaces_section_title:
   :noindex:

   Compute core epitopes from multiple overlapping peptides.

   :homepage: https://github.com/AG-Walz/epicore
   :license: MIT / MIT
   :recipe: /`epicore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicore/meta.yaml>`_

   


.. conda:package:: epicore

   |downloads_epicore| |docker_epicore|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on click: ``>=8.1``
   :depends on matplotlib-base: ``>=3.4``
   :depends on mpld3: 
   :depends on numpy: ``>=2``
   :depends on pandas: ``>=2``
   :depends on polars: ``>=1.32.3``
   :depends on pyarrow: ``>=22.0.0``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=6.0.2``

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

    pixi global install epicore

to add into an existing workspace instead, run::

    pixi add epicore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install epicore

Alternatively, to install into a new environment, run::

    conda create -n envname epicore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/epicore:<tag>

(see `epicore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_epicore| image:: https://img.shields.io/conda/dn/bioconda/epicore.svg?style=flat
   :target: https://anaconda.org/bioconda/epicore
   :alt:   (downloads)
.. |docker_epicore| image:: https://quay.io/repository/biocontainers/epicore/status
   :target: https://quay.io/repository/biocontainers/epicore
.. _`epicore/tags`: https://quay.io/repository/biocontainers/epicore?tab=tags


.. raw:: html

    <script>
        var package = "epicore";
        var versions = ["0.1.8","0.1.7","0.1.6","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epicore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epicore/README.html