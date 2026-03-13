:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assembly_finder'
.. highlight: bash

assembly_finder
===============

.. conda:recipe:: assembly_finder
   :replaces_section_title:
   :noindex:

   Snakemake\-powered cli pipeline to download genomes with NCBI datasets

   :homepage: https://github.com/metagenlab/assembly_finder
   :documentation: https://metagenlab.github.io/assembly_finder
   
   :license: MIT / MIT
   :recipe: /`assembly_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly_finder/meta.yaml>`_
   :links: biotools: :biotools:`assembly_finder`

   


.. conda:package:: assembly_finder

   |downloads_assembly_finder| |docker_assembly_finder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.7-1</code>,  <code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-1</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-1``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrmap: ``>=0.0.7``
   :depends on pandas: ``>=2.2.1``
   :depends on python: ``>=3.11``
   :depends on pyyaml: ``>=6.0.1``
   :depends on rich-click: ``>=1.8.3``
   :depends on snakemake-minimal: ``>=8.0.0``
   :depends on snaketool-utils: ``>=0.0.5``

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

    pixi global install assembly_finder

to add into an existing workspace instead, run::

    pixi add assembly_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install assembly_finder

Alternatively, to install into a new environment, run::

    conda create -n envname assembly_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/assembly_finder:<tag>

(see `assembly_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_assembly_finder| image:: https://img.shields.io/conda/dn/bioconda/assembly_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/assembly_finder
   :alt:   (downloads)
.. |docker_assembly_finder| image:: https://quay.io/repository/biocontainers/assembly_finder/status
   :target: https://quay.io/repository/biocontainers/assembly_finder
.. _`assembly_finder/tags`: https://quay.io/repository/biocontainers/assembly_finder?tab=tags


.. raw:: html

    <script>
        var package = "assembly_finder";
        var versions = ["0.9.0","0.8.0","0.7.7","0.7.7","0.7.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly_finder/README.html