:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagenome-atlas'
.. highlight: bash

metagenome-atlas
================

.. conda:recipe:: metagenome-atlas
   :replaces_section_title:
   :noindex:

   ATLAS \- Three commands to start analysing your metagenome data

   :homepage: https://github.com/metagenome-atlas
   :documentation: https://metagenome-atlas.rtfd.io
   
   :developer docs: https://github.com/metagenome-atlas/atlas
   :license: BSD / BSD-3-Clause
   :recipe: /`metagenome-atlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas/meta.yaml>`_
   :links: doi: :doi:`10.1101/737528`

   Atlas is a easy to use metagenomic pipeline
   \# Quick Start

   Three commands to start analysing your metagenome data\:
   \`\`\`
       mamba install \-c bioconda \-c conda\-forge metagenome\-atlas
       atlas init \-\-db\-dir databases path\/to\/fastq\/files
       atlas run
   \`\`\`
   All databases and dependencies are installed on the fly in the directory \`db\-dir\`.
   You want to run these three commands on the example\_data on the GitHub repo.
   If you have more time\, then we recommend you configure atlas according to your needs.
     \- check the \`samples.tsv\`
     \- edit the \`config.yaml\`
     \- run atlas on any cluster system
   For more details see documentation.



.. conda:package:: metagenome-atlas

   |downloads_metagenome-atlas| |docker_metagenome-atlas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>19.0.1-0</code>,  <code>2.19.0-0</code>,  <code>2.18.2-0</code>,  <code>2.18.1-0</code>,  <code>2.18.0-0</code>,  <code>2.17.2-0</code>,  <code>2.17.1-0</code>,  <code>2.17.0-0</code>,  <code>2.16.3-0</code>,  </span></summary>
      

      ``19.0.1-0``,  ``2.19.0-0``,  ``2.18.2-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.2-0``,  ``2.17.1-0``,  ``2.17.0-0``,  ``2.16.3-0``,  ``2.16.2-0``,  ``2.16.1-0``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15.0-0``,  ``2.14.3-0``,  ``2.14.2-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6a4-0``,  ``2.6a2-0``,  ``2.6a1-0``,  ``2.5.0-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.beta2-0``,  ``2.2.0-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.0.6-1``,  ``2.0.5-1``,  ``2.0.4-1``,  ``2.0.3-1``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``>=39.01,<40``
   :depends on click: ``>=7``
   :depends on cookiecutter: 
   :depends on graphviz: 
   :depends on mamba: 
   :depends on networkx: 
   :depends on numpy: ``1.21.*``
   :depends on pandas: ``>=1.2,<1.5``
   :depends on pathlib: 
   :depends on pyarrow: ``>=8``
   :depends on pygments: 
   :depends on python: ``>=3.8,<3.11``
   :depends on ruamel.yaml: ``>=0.17``
   :depends on snakemake-minimal: ``>=7.18.1,<7.26``

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

    pixi global install metagenome-atlas

to add into an existing workspace instead, run::

    pixi add metagenome-atlas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metagenome-atlas

Alternatively, to install into a new environment, run::

    conda create -n envname metagenome-atlas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metagenome-atlas:<tag>

(see `metagenome-atlas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metagenome-atlas| image:: https://img.shields.io/conda/dn/bioconda/metagenome-atlas.svg?style=flat
   :target: https://anaconda.org/bioconda/metagenome-atlas
   :alt:   (downloads)
.. |docker_metagenome-atlas| image:: https://quay.io/repository/biocontainers/metagenome-atlas/status
   :target: https://quay.io/repository/biocontainers/metagenome-atlas
.. _`metagenome-atlas/tags`: https://quay.io/repository/biocontainers/metagenome-atlas?tab=tags


.. raw:: html

    <script>
        var package = "metagenome-atlas";
        var versions = ["19.0.1","2.19.0","2.18.2","2.18.1","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagenome-atlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagenome-atlas/README.html