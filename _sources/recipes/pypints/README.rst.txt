:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypints'
.. highlight: bash

pypints
=======

.. conda:recipe:: pypints
   :replaces_section_title:
   :noindex:

   Peak Identifier for Nascent Transcripts Starts \(PINTS\)

   :homepage: https://pints.yulab.org
   :developer docs: https://github.com/hyulab/PINTS
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pypints <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01211-7`

   


.. conda:package:: pypints

   |downloads_pypints| |docker_pypints|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.15-0</code>,  <code>1.1.14-0</code>,  <code>1.1.13-0</code>,  <code>1.1.10-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: 
   :depends on requests: 
   :depends on samtools: 
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on tabix: 

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

    pixi global install pypints

to add into an existing workspace instead, run::

    pixi add pypints

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pypints

Alternatively, to install into a new environment, run::

    conda create -n envname pypints

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pypints:<tag>

(see `pypints/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pypints| image:: https://img.shields.io/conda/dn/bioconda/pypints.svg?style=flat
   :target: https://anaconda.org/bioconda/pypints
   :alt:   (downloads)
.. |docker_pypints| image:: https://quay.io/repository/biocontainers/pypints/status
   :target: https://quay.io/repository/biocontainers/pypints
.. _`pypints/tags`: https://quay.io/repository/biocontainers/pypints?tab=tags


.. raw:: html

    <script>
        var package = "pypints";
        var versions = ["1.2.1","1.2.0","1.1.15","1.1.14","1.1.13"];
    </script>





Notes
-----
The tool provides a set of executable files\: 
\`pints\_caller\` \(for peak calling\, the main program\)\, 
\`pints\_visualizer\` \(for generating bigwig files from bam files\)\, 
\`pints\_normalizer\` \(for normalizing bigwig files by spikein counts\)\, 
and \`pints\_boundary\_extender\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypints/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypints/README.html