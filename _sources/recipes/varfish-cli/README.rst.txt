:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-cli'
.. highlight: bash

varfish-cli
===========

.. conda:recipe:: varfish-cli
   :replaces_section_title:
   :noindex:

   Command line interface to VarFish via REST API

   :homepage: https://github.com/bihealth/varfish-cli
   :license: MIT / MIT
   :recipe: /`varfish-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-cli/meta.yaml>`_

   


.. conda:package:: varfish-cli

   |downloads_varfish-cli| |docker_varfish-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-2</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-2``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: 
   :depends on cattrs: 
   :depends on jsonschema: 
   :depends on logzero: 
   :depends on polyleven: 
   :depends on pydantic: ``>=2.0,<3.0``
   :depends on python: ``>=3.9``
   :depends on python-dateutil: 
   :depends on requests: 
   :depends on simplejson: 
   :depends on tabulate: 
   :depends on toml: 
   :depends on tqdm: 
   :depends on typeguard: 
   :depends on typer: 

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

    pixi global install varfish-cli

to add into an existing workspace instead, run::

    pixi add varfish-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install varfish-cli

Alternatively, to install into a new environment, run::

    conda create -n envname varfish-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/varfish-cli:<tag>

(see `varfish-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_varfish-cli| image:: https://img.shields.io/conda/dn/bioconda/varfish-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-cli
   :alt:   (downloads)
.. |docker_varfish-cli| image:: https://quay.io/repository/biocontainers/varfish-cli/status
   :target: https://quay.io/repository/biocontainers/varfish-cli
.. _`varfish-cli/tags`: https://quay.io/repository/biocontainers/varfish-cli?tab=tags


.. raw:: html

    <script>
        var package = "varfish-cli";
        var versions = ["0.7.0","0.6.4","0.6.3","0.6.3","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-cli/README.html