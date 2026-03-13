:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grzctl'
.. highlight: bash

grzctl
======

.. conda:recipe:: grzctl
   :replaces_section_title:
   :noindex:

   Control CLI for GRZ administrators.

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :documentation: https://github.com/BfArM-MVH/grz-tools/blob/grzctl-v1.4.0/packages/grz-cli/README.md
   
   :license: MIT / MIT
   :recipe: /`grzctl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grzctl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grzctl/meta.yaml>`_

   


.. conda:package:: grzctl

   |downloads_grzctl| |docker_grzctl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.36,<2``
   :depends on click: ``>=8.2,<9``
   :depends on grz-cli: ``>=1.4.0,<2``
   :depends on grz-common: ``>=1.5.0,<2``
   :depends on grz-db: ``>=1.2,<2``
   :depends on grz-pydantic-models: ``>=2.5,<3``
   :depends on jsonschema: ``>=4.23.0,<5``
   :depends on platformdirs: ``>=4.3.6,<5``
   :depends on psycopg: ``>=3.2,<4``
   :depends on pydantic: ``>=2.12,<3``
   :depends on pydantic-settings: ``>=2.11,<3``
   :depends on pysam: ``0.23.*``
   :depends on python: ``>=3.12``
   :depends on python-crypt4gh: ``>=1.7,<2``
   :depends on pyyaml: ``>=6.0.2,<7``
   :depends on requests: ``>=2.32.3,<3``
   :depends on rich: ``13.*``
   :depends on textual: ``>=5.3,<6``
   :depends on tqdm: ``>=4.66.5,<5``

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

    pixi global install grzctl

to add into an existing workspace instead, run::

    pixi add grzctl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grzctl

Alternatively, to install into a new environment, run::

    conda create -n envname grzctl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grzctl:<tag>

(see `grzctl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grzctl| image:: https://img.shields.io/conda/dn/bioconda/grzctl.svg?style=flat
   :target: https://anaconda.org/bioconda/grzctl
   :alt:   (downloads)
.. |docker_grzctl| image:: https://quay.io/repository/biocontainers/grzctl/status
   :target: https://quay.io/repository/biocontainers/grzctl
.. _`grzctl/tags`: https://quay.io/repository/biocontainers/grzctl?tab=tags


.. raw:: html

    <script>
        var package = "grzctl";
        var versions = ["1.4.0","1.3.0","1.2.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grzctl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grzctl/README.html