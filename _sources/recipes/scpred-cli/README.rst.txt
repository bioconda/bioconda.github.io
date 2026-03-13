:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scpred-cli'
.. highlight: bash

scpred-cli
==========

.. conda:recipe:: scpred-cli
   :replaces_section_title:
   :noindex:

   A set of command\-line wrappers for the core functions in the scPred package.

   :homepage: https://github.com/ebi-gene-expression-group/scPred-cli
   :license: Apache-2.0
   :recipe: /`scpred-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli/meta.yaml>`_

   


.. conda:package:: scpred-cli

   |downloads_scpred-cli| |docker_scpred-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-doparallel: 
   :depends on r-optparse: 
   :depends on r-scpred: ``v1.9.0.*``
   :depends on r-seurat: 
   :depends on r-workflowscriptscommon: 

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

    pixi global install scpred-cli

to add into an existing workspace instead, run::

    pixi add scpred-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scpred-cli

Alternatively, to install into a new environment, run::

    conda create -n envname scpred-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scpred-cli:<tag>

(see `scpred-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scpred-cli| image:: https://img.shields.io/conda/dn/bioconda/scpred-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scpred-cli
   :alt:   (downloads)
.. |docker_scpred-cli| image:: https://quay.io/repository/biocontainers/scpred-cli/status
   :target: https://quay.io/repository/biocontainers/scpred-cli
.. _`scpred-cli/tags`: https://quay.io/repository/biocontainers/scpred-cli?tab=tags


.. raw:: html

    <script>
        var package = "scpred-cli";
        var versions = ["0.1.0","0.1.0","0.1.0","0.0.9","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scpred-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scpred-cli/README.html