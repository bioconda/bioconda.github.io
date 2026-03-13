:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcas-hla'
.. highlight: bash

arcas-hla
=========

.. conda:recipe:: arcas-hla
   :replaces_section_title:
   :noindex:

   high\-resolution HLA typing from RNA seq

   :homepage: https://github.com/RabadanLab/arcasHLA
   :license: GPL-3.0-only
   :recipe: /`arcas-hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz474`

   arcasHLA performs high\-resolution genotyping for HLA class I and class II
   genes from RNA sequencing\, supporting both paired and single\-end samples.



.. conda:package:: arcas-hla

   |downloads_arcas-hla| |docker_arcas-hla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.0-3</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on coreutils: 
   :depends on git: 
   :depends on git-lfs: 
   :depends on kallisto: ``0.44``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pigz: 
   :depends on pip: 
   :depends on pyarrow: 
   :depends on pytest: 
   :depends on python: 
   :depends on samtools: 
   :depends on scipy: 

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

    pixi global install arcas-hla

to add into an existing workspace instead, run::

    pixi add arcas-hla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arcas-hla

Alternatively, to install into a new environment, run::

    conda create -n envname arcas-hla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arcas-hla:<tag>

(see `arcas-hla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arcas-hla| image:: https://img.shields.io/conda/dn/bioconda/arcas-hla.svg?style=flat
   :target: https://anaconda.org/bioconda/arcas-hla
   :alt:   (downloads)
.. |docker_arcas-hla| image:: https://quay.io/repository/biocontainers/arcas-hla/status
   :target: https://quay.io/repository/biocontainers/arcas-hla
.. _`arcas-hla/tags`: https://quay.io/repository/biocontainers/arcas-hla?tab=tags


.. raw:: html

    <script>
        var package = "arcas-hla";
        var versions = ["0.6.0","0.6.0","0.6.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcas-hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcas-hla/README.html