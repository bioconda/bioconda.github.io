:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-docs'
.. highlight: bash

nf-docs
=======

.. conda:recipe:: nf-docs
   :replaces_section_title:
   :noindex:

   Generate API documentation for Nextflow pipelines by querying the Nextflow Language Server

   :homepage: https://github.com/ewels/nf-docs
   :documentation: https://ewels.github.io/nf-docs/
   
   :license: Apache / Apache-2.0
   :recipe: /`nf-docs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-docs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-docs/meta.yaml>`_

   


.. conda:package:: nf-docs

   |downloads_nf-docs| |docker_nf-docs|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on httpx: ``>=0.25``
   :depends on jinja2: ``>=3.0``
   :depends on markdown: ``>=3.0``
   :depends on pygments: ``>=2.0``
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0``
   :depends on rich: ``>=13.0``
   :depends on rich-click: ``>=1.7``

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

    pixi global install nf-docs

to add into an existing workspace instead, run::

    pixi add nf-docs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nf-docs

Alternatively, to install into a new environment, run::

    conda create -n envname nf-docs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nf-docs:<tag>

(see `nf-docs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nf-docs| image:: https://img.shields.io/conda/dn/bioconda/nf-docs.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-docs
   :alt:   (downloads)
.. |docker_nf-docs| image:: https://quay.io/repository/biocontainers/nf-docs/status
   :target: https://quay.io/repository/biocontainers/nf-docs
.. _`nf-docs/tags`: https://quay.io/repository/biocontainers/nf-docs?tab=tags


.. raw:: html

    <script>
        var package = "nf-docs";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-docs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-docs/README.html