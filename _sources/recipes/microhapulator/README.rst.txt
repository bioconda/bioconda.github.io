:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microhapulator'
.. highlight: bash

microhapulator
==============

.. conda:recipe:: microhapulator
   :replaces_section_title:
   :noindex:

   Tools for empirical microhaplotype calling\, forensic interpretation\, and simulation.

   :homepage: https://github.com/bioforensics/MicroHapulator/
   :license: BSD / BSD-3-Clause
   :recipe: /`microhapulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator/meta.yaml>`_

   


.. conda:package:: microhapulator

   |downloads_microhapulator| |docker_microhapulator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.1-0</code>,  <code>0.5-1</code>,  </span></summary>
      

      ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on fastqc: ``>=0.11.9``
   :depends on flash: ``>=1.2``
   :depends on happer: ``>=0.1``
   :depends on insilicoseq: ``>=1.5.4,<2.0``
   :depends on jsonschema: ``>=4.0``
   :depends on matplotlib-base: ``>=3.0``
   :depends on microhapdb: ``>=0.10.1``
   :depends on minimap2: ``>=2.25``
   :depends on multiqc: ``>=1.14``
   :depends on nbformat: ``>=5.0,<5.6``
   :depends on numpy: ``>=1.19``
   :depends on pandas: ``>1.0``
   :depends on pulp: ``2.3.1``
   :depends on pysam: ``>=0.15.2``
   :depends on python: ``<3.12``
   :depends on samtools: ``>=1.12``
   :depends on scipy: ``>=1.7``
   :depends on seaborn-base: ``>=0.13.2``
   :depends on snakemake-minimal: ``>=7.15.2,<8.0``
   :depends on termgraph: ``>=0.5``
   :depends on tqdm: ``>=4.0``

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

    pixi global install microhapulator

to add into an existing workspace instead, run::

    pixi add microhapulator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install microhapulator

Alternatively, to install into a new environment, run::

    conda create -n envname microhapulator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/microhapulator:<tag>

(see `microhapulator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_microhapulator| image:: https://img.shields.io/conda/dn/bioconda/microhapulator.svg?style=flat
   :target: https://anaconda.org/bioconda/microhapulator
   :alt:   (downloads)
.. |docker_microhapulator| image:: https://quay.io/repository/biocontainers/microhapulator/status
   :target: https://quay.io/repository/biocontainers/microhapulator
.. _`microhapulator/tags`: https://quay.io/repository/biocontainers/microhapulator?tab=tags


.. raw:: html

    <script>
        var package = "microhapulator";
        var versions = ["0.8.4","0.8.3","0.8.2","0.8.1","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapulator/README.html