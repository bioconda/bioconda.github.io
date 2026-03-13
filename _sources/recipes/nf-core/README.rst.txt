:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-core'
.. highlight: bash

nf-core
=======

.. conda:recipe:: nf-core
   :replaces_section_title:
   :noindex:

   Python package with helper tools for the nf\-core community.

   :homepage: https://nf-co.re
   :developer docs: https://github.com/nf-core/tools
   :license: MIT / MIT
   :recipe: /`nf-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-020-0439-x`

   


.. conda:package:: nf-core

   |downloads_nf-core| |docker_nf-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.2-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.5.2-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.14.1-1``,  ``2.14.1-0``,  ``2.13.1-0``,  ``2.13-0``,  ``2.12.1-0``,  ``2.12-0``,  ``2.11.1-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7.2-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.6-1``,  ``2.6-0``,  ``2.5.1-0``,  ``2.5-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2.0.1-0``,  ``1.14-0``,  ``1.13.3-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13-0``,  ``1.12.1-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.2-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on filetype: 
   :depends on git: 
   :depends on gitpython: 
   :depends on jinja2: 
   :depends on jsonschema: ``>=4.0``
   :depends on linkify-it-py: ``>=1,<3``
   :depends on markdown: ``>=3.3``
   :depends on nextflow: ``>=25.04.2``
   :depends on nf-test: 
   :depends on packaging: 
   :depends on pillow: 
   :depends on pre-commit: 
   :depends on prompt_toolkit: ``>=3.0.52``
   :depends on pydantic: ``>=2.2.1``
   :depends on pygithub: 
   :depends on python: ``>=3.10``
   :depends on pyyaml: 
   :depends on questionary: ``>=2.0.1``
   :depends on refgenie: 
   :depends on repo2rocrate: 
   :depends on requests: 
   :depends on requests-cache: 
   :depends on rich: ``>=13.3.1``
   :depends on rich-click: ``1.9.*``
   :depends on rocrate: 
   :depends on ruamel.yaml: 
   :depends on tabulate: 
   :depends on textual: ``6.2.1``
   :depends on trogon: 

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

    pixi global install nf-core

to add into an existing workspace instead, run::

    pixi add nf-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nf-core

Alternatively, to install into a new environment, run::

    conda create -n envname nf-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nf-core:<tag>

(see `nf-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nf-core| image:: https://img.shields.io/conda/dn/bioconda/nf-core.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-core
   :alt:   (downloads)
.. |docker_nf-core| image:: https://quay.io/repository/biocontainers/nf-core/status
   :target: https://quay.io/repository/biocontainers/nf-core
.. _`nf-core/tags`: https://quay.io/repository/biocontainers/nf-core?tab=tags


.. raw:: html

    <script>
        var package = "nf-core";
        var versions = ["3.5.2","3.5.1","3.5.0","3.4.1","3.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-core/README.html