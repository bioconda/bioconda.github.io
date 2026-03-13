:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phu'
.. highlight: bash

phu
===

.. conda:recipe:: phu
   :replaces_section_title:
   :noindex:

   Phage Utilities \(phu\)\: modular toolkit for clustering\, classifying\, and analyzing viral sequences.

   :homepage: https://github.com/camilogarciabotero/phu
   :documentation: https://camilogarciabotero.github.io/phu
   
   :license: MIT / MIT
   :recipe: /`phu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phu/meta.yaml>`_

   \*\*phu\*\* \(Phage Utilities\) is a Python toolkit designed for viral bioinformatics workflows. 
   It provides modular commands to handle tasks such as\:
     \* \`seqclust\`\: dereplication and clustering of viral contigs into vOTUs and putative species\-level groups.
     \* \`taxasimplify\`\: simplification and parsing of viral taxonomy assignments.



.. conda:package:: phu

   |downloads_phu| |docker_phu|

   :versions:
      
      

      ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.1-0``

      

   
   :depends on hmmer: 
   :depends on mypy: 
   :depends on pandas: 
   :depends on pyhmmer: 
   :depends on pyrodigal: 
   :depends on pyrodigal-gv: 
   :depends on pytest: 
   :depends on python: ``>=3.10``
   :depends on ruff: 
   :depends on seqkit: 
   :depends on typer: 
   :depends on vclust: 

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

    pixi global install phu

to add into an existing workspace instead, run::

    pixi add phu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phu

Alternatively, to install into a new environment, run::

    conda create -n envname phu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phu:<tag>

(see `phu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phu| image:: https://img.shields.io/conda/dn/bioconda/phu.svg?style=flat
   :target: https://anaconda.org/bioconda/phu
   :alt:   (downloads)
.. |docker_phu| image:: https://quay.io/repository/biocontainers/phu/status
   :target: https://quay.io/repository/biocontainers/phu
.. _`phu/tags`: https://quay.io/repository/biocontainers/phu?tab=tags


.. raw:: html

    <script>
        var package = "phu";
        var versions = ["0.4.4","0.4.3","0.4.0","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phu/README.html