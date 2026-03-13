:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-annotator-cli'
.. highlight: bash

varfish-annotator-cli
=====================

.. conda:recipe:: varfish-annotator-cli
   :replaces_section_title:
   :noindex:

   Annotate variants for import into VarFish Server.

   :homepage: https://github.com/bihealth/varfish-annotator
   :license: MIT
   :recipe: /`varfish-annotator-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-annotator-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-annotator-cli/meta.yaml>`_

   


.. conda:package:: varfish-annotator-cli

   |downloads_varfish-annotator-cli| |docker_varfish-annotator-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.34-0</code>,  <code>0.33-0</code>,  <code>0.32-0</code>,  <code>0.31-0</code>,  <code>0.30-0</code>,  <code>0.29-0</code>,  <code>0.28-0</code>,  <code>0.27-0</code>,  <code>0.26-0</code>,  </span></summary>
      

      ``0.34-0``,  ``0.33-0``,  ``0.32-0``,  ``0.31-0``,  ``0.30-0``,  ``0.29-0``,  ``0.28-0``,  ``0.27-0``,  ``0.26-0``,  ``0.25-0``,  ``0.24-0``,  ``0.23-0``,  ``0.22-0``,  ``0.21-0``,  ``0.20-0``,  ``0.19-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-0``,  ``0.15-0``,  ``0.14-1``,  ``0.14-0``,  ``0.13-0``,  ``0.12-0``,  ``0.11-0``,  ``0.10-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``

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

    pixi global install varfish-annotator-cli

to add into an existing workspace instead, run::

    pixi add varfish-annotator-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install varfish-annotator-cli

Alternatively, to install into a new environment, run::

    conda create -n envname varfish-annotator-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/varfish-annotator-cli:<tag>

(see `varfish-annotator-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_varfish-annotator-cli| image:: https://img.shields.io/conda/dn/bioconda/varfish-annotator-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-annotator-cli
   :alt:   (downloads)
.. |docker_varfish-annotator-cli| image:: https://quay.io/repository/biocontainers/varfish-annotator-cli/status
   :target: https://quay.io/repository/biocontainers/varfish-annotator-cli
.. _`varfish-annotator-cli/tags`: https://quay.io/repository/biocontainers/varfish-annotator-cli?tab=tags


.. raw:: html

    <script>
        var package = "varfish-annotator-cli";
        var versions = ["0.34","0.33","0.32","0.31","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-annotator-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-annotator-cli/README.html