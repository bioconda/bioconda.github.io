:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kgwasflow'
.. highlight: bash

kgwasflow
=========

.. conda:recipe:: kgwasflow
   :replaces_section_title:
   :noindex:

   kGWASflow is a Snakemake workflow for performing k\-mers\-based GWAS.

   :homepage: https://github.com/akcorut/kGWASflow
   :documentation: https://github.com/akcorut/kGWASflow/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`kgwasflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kgwasflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kgwasflow/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7860705`

   


.. conda:package:: kgwasflow

   |downloads_kgwasflow| |docker_kgwasflow|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends on click: 
   :depends on coreutils: 
   :depends on mamba: 
   :depends on numpy: ``1.23.5.*``
   :depends on pandas: ``1.5.3.*``
   :depends on python: ``>=3.10.10``
   :depends on snakemake-minimal: ``7.25.0.*``

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

    pixi global install kgwasflow

to add into an existing workspace instead, run::

    pixi add kgwasflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kgwasflow

Alternatively, to install into a new environment, run::

    conda create -n envname kgwasflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kgwasflow:<tag>

(see `kgwasflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kgwasflow| image:: https://img.shields.io/conda/dn/bioconda/kgwasflow.svg?style=flat
   :target: https://anaconda.org/bioconda/kgwasflow
   :alt:   (downloads)
.. |docker_kgwasflow| image:: https://quay.io/repository/biocontainers/kgwasflow/status
   :target: https://quay.io/repository/biocontainers/kgwasflow
.. _`kgwasflow/tags`: https://quay.io/repository/biocontainers/kgwasflow?tab=tags


.. raw:: html

    <script>
        var package = "kgwasflow";
        var versions = ["1.3.0","1.3.0","1.2.4","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kgwasflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kgwasflow/README.html