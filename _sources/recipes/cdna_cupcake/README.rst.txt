:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdna_cupcake'
.. highlight: bash

cdna_cupcake
============

.. conda:recipe:: cdna_cupcake
   :replaces_section_title:
   :noindex:

   cDNA\_Cupcake is a miscellaneous collection of Python and R scripts used for analyzing sequencing data.

   :homepage: https://github.com/Magdoll/cDNA_Cupcake
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`cdna_cupcake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake/meta.yaml>`_

   


.. conda:package:: cdna_cupcake

   |downloads_cdna_cupcake| |docker_cdna_cupcake|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>29.0.0-0</code>,  <code>28.0.0-1</code>,  <code>28.0.0-0</code>,  <code>22.0.0-1</code>,  <code>22.0.0-0</code>,  <code>19.0.0-0</code>,  <code>18.1.0-0</code>,  <code>18.0.0-0</code>,  <code>17.0.0-0</code>,  </span></summary>
      

      ``29.0.0-0``,  ``28.0.0-1``,  ``28.0.0-0``,  ``22.0.0-1``,  ``22.0.0-0``,  ``19.0.0-0``,  ``18.1.0-0``,  ``18.0.0-0``,  ``17.0.0-0``,  ``16.0.0-0``,  ``15.1.0-0``,  ``14.2.0-0``,  ``14.0.0-0``,  ``13.0.0-0``,  ``12.5-0``,  ``12.4.0-1``,  ``12.4.0-0``,  ``12.3.0-0``,  ``12.1.0-1``,  ``12.1.0-0``,  ``12.0.0-0``,  ``11.0.0-0``,  ``10.0.1-0``,  ``9.1.1-0``,  ``9.0.3-0``,  ``8.7.3-0``,  ``5.8-0``,  ``5.3-1``,  ``5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on bx-python: ``>=0.7.3``
   :depends on graphviz: 
   :depends on libgcc-ng: ``>=12``
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: 
   :depends on samtools: ``>=1.10``
   :depends on scikit-learn: 

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

    pixi global install cdna_cupcake

to add into an existing workspace instead, run::

    pixi add cdna_cupcake

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cdna_cupcake

Alternatively, to install into a new environment, run::

    conda create -n envname cdna_cupcake

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cdna_cupcake:<tag>

(see `cdna_cupcake/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cdna_cupcake| image:: https://img.shields.io/conda/dn/bioconda/cdna_cupcake.svg?style=flat
   :target: https://anaconda.org/bioconda/cdna_cupcake
   :alt:   (downloads)
.. |docker_cdna_cupcake| image:: https://quay.io/repository/biocontainers/cdna_cupcake/status
   :target: https://quay.io/repository/biocontainers/cdna_cupcake
.. _`cdna_cupcake/tags`: https://quay.io/repository/biocontainers/cdna_cupcake?tab=tags


.. raw:: html

    <script>
        var package = "cdna_cupcake";
        var versions = ["29.0.0","28.0.0","28.0.0","22.0.0","22.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdna_cupcake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdna_cupcake/README.html