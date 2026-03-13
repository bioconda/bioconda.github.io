:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphor'
.. highlight: bash

metaphor
========

.. conda:recipe:: metaphor
   :replaces_section_title:
   :noindex:

   Metaphor \- Metagenomic Pipeline for Short Reads

   :homepage: https://github.com/vinisalazar/metaphor
   :documentation: https://metaphor-workflow.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`metaphor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphor/meta.yaml>`_

   
   \# Metaphor \- Metagenomic Pipeline for sHOrt Reads


   Metaphor is a Snakemake\-based\, general\-purpose workflow for assembly and binning of metagenomes. To learn how to use it\, please refer to the \[docs page\]\(https\:\/\/metaphor\-workflow.readthedocs.io\/\).



.. conda:package:: metaphor

   |downloads_metaphor| |docker_metaphor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.14-0</code>,  <code>1.7.13-1</code>,  <code>1.7.13-0</code>,  <code>1.7.12-0</code>,  <code>1.7.11-0</code>,  <code>1.7.10-0</code>,  <code>1.7.9-1</code>,  <code>1.7.9-0</code>,  <code>1.7.8-0</code>,  </span></summary>
      

      ``1.7.14-0``,  ``1.7.13-1``,  ``1.7.13-0``,  ``1.7.12-0``,  ``1.7.11-0``,  ``1.7.10-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.8-0``,  ``1.7.7-1``,  ``1.7.7-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: 
   :depends on networkx: 
   :depends on pandas: 
   :depends on python: ``>=3.9,<3.12``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on snakemake-minimal: ``>=7.5,<8.0``
   :depends on snakemake-wrapper-utils: 
   :depends on tqdm: 
   :depends on zstandard: 

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

    pixi global install metaphor

to add into an existing workspace instead, run::

    pixi add metaphor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaphor

Alternatively, to install into a new environment, run::

    conda create -n envname metaphor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaphor:<tag>

(see `metaphor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaphor| image:: https://img.shields.io/conda/dn/bioconda/metaphor.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphor
   :alt:   (downloads)
.. |docker_metaphor| image:: https://quay.io/repository/biocontainers/metaphor/status
   :target: https://quay.io/repository/biocontainers/metaphor
.. _`metaphor/tags`: https://quay.io/repository/biocontainers/metaphor?tab=tags


.. raw:: html

    <script>
        var package = "metaphor";
        var versions = ["1.7.14","1.7.13","1.7.13","1.7.12","1.7.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphor/README.html