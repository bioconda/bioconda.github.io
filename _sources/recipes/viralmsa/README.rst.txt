:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralmsa'
.. highlight: bash

viralmsa
========

.. conda:recipe:: viralmsa
   :replaces_section_title:
   :noindex:

   Reference\-guided multiple sequence alignment of viral genomes

   :homepage: https://github.com/niemasd/ViralMSA
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`viralmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralmsa/meta.yaml>`_
   :links: biotools: :biotools:`viralmsa`, doi: :doi:`10.1093/bioinformatics/btaa743`

   


.. conda:package:: viralmsa

   |downloads_viralmsa| |docker_viralmsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.46-0</code>,  <code>1.1.45-1</code>,  <code>1.1.45-0</code>,  <code>1.1.44-1</code>,  <code>1.1.44-0</code>,  <code>1.1.43-0</code>,  <code>1.1.42-0</code>,  <code>1.1.41-0</code>,  <code>1.1.40-0</code>,  </span></summary>
      

      ``1.1.46-0``,  ``1.1.45-1``,  ``1.1.45-0``,  ``1.1.44-1``,  ``1.1.44-0``,  ``1.1.43-0``,  ``1.1.42-0``,  ``1.1.41-0``,  ``1.1.40-0``,  ``1.1.39-0``,  ``1.1.38-0``,  ``1.1.36-0``,  ``1.1.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on dragmap: 
   :depends on hisat2: 
   :depends on lra: 
   :depends on minimap2: 
   :depends on ngmlr: 
   :depends on python: ``>=3.7``
   :depends on star: 
   :depends on unimap: 
   :depends on wfmash: 
   :depends on winnowmap: 

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

    pixi global install viralmsa

to add into an existing workspace instead, run::

    pixi add viralmsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viralmsa

Alternatively, to install into a new environment, run::

    conda create -n envname viralmsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viralmsa:<tag>

(see `viralmsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viralmsa| image:: https://img.shields.io/conda/dn/bioconda/viralmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/viralmsa
   :alt:   (downloads)
.. |docker_viralmsa| image:: https://quay.io/repository/biocontainers/viralmsa/status
   :target: https://quay.io/repository/biocontainers/viralmsa
.. _`viralmsa/tags`: https://quay.io/repository/biocontainers/viralmsa?tab=tags


.. raw:: html

    <script>
        var package = "viralmsa";
        var versions = ["1.1.46","1.1.45","1.1.45","1.1.44","1.1.44"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralmsa/README.html