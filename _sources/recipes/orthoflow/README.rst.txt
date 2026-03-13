:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthoflow'
.. highlight: bash

orthoflow
=========

.. conda:recipe:: orthoflow
   :replaces_section_title:
   :noindex:

   Orthoflow is a workflow for phylogenetic inference of genome\-scale datasets of protein\-coding genes.

   :homepage: https://github.com/rbturnbull/orthoflow
   :documentation: https://rbturnbull.github.io/orthoflow/
   
   :license: APACHE / Apache-2.0
   :recipe: /`orthoflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthoflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthoflow/meta.yaml>`_

   
   \# Orthoflow \- end\-to\-end phylogenomic inference

   Orthoflow is a workflow for phylogenetic inference of genome\-scale datasets of protein\-coding genes.

   For more information\, visit the GitHub or the documentation page.



.. conda:package:: orthoflow

   |downloads_orthoflow| |docker_orthoflow|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on appdirs: ``>=1.4.4``
   :depends on biopython: ``>=1.79.0``
   :depends on flask: ``>=2.1.2``
   :depends on jinja2: ``>=3.1.2``
   :depends on joblib: ``>=1.2.0``
   :depends on pandas: ``>=1.2.5,<2.0.0``
   :depends on phytest: ``>=1.4.1``
   :depends on pulp: ``2.7.0.*``
   :depends on pydot: ``>=1.4.2``
   :depends on python: ``>=3.8,<3.12``
   :depends on rich: ``>=13.3.3``
   :depends on snakemake-minimal: ``>=7.0.0``
   :depends on toml: ``>=0.10.2``
   :depends on typer: ``>=0.4.1``

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

    pixi global install orthoflow

to add into an existing workspace instead, run::

    pixi add orthoflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthoflow

Alternatively, to install into a new environment, run::

    conda create -n envname orthoflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthoflow:<tag>

(see `orthoflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthoflow| image:: https://img.shields.io/conda/dn/bioconda/orthoflow.svg?style=flat
   :target: https://anaconda.org/bioconda/orthoflow
   :alt:   (downloads)
.. |docker_orthoflow| image:: https://quay.io/repository/biocontainers/orthoflow/status
   :target: https://quay.io/repository/biocontainers/orthoflow
.. _`orthoflow/tags`: https://quay.io/repository/biocontainers/orthoflow?tab=tags


.. raw:: html

    <script>
        var package = "orthoflow";
        var versions = ["0.3.4","0.3.1","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthoflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthoflow/README.html