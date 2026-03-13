:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msi'
.. highlight: bash

msi
===

.. conda:recipe:: msi
   :replaces_section_title:
   :noindex:

   Metabarcoding sequences identification \- from nanopore reads to taxa tables.

   :homepage: https://github.com/nunofonseca/msi
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`msi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msi/meta.yaml>`_
   :links: biotools: :biotools:`msi`, doi: :doi:`10.5281/zenodo.3855032`

   


.. conda:package:: msi

   |downloads_msi| |docker_msi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-3</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-3``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cd-hit: 
   :depends on cutadapt: 
   :depends on emboss: 
   :depends on fastq_utils: 
   :depends on fastqc: 
   :depends on isonclust: 
   :depends on metabinkit: 
   :depends on minimap2: 
   :depends on pcre: 
   :depends on python: ``3.8.*``
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-optparse: 
   :depends on r-r.utils: 
   :depends on r-tidyr: 
   :depends on racon: 
   :depends on zlib: 

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

    pixi global install msi

to add into an existing workspace instead, run::

    pixi add msi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msi

Alternatively, to install into a new environment, run::

    conda create -n envname msi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msi:<tag>

(see `msi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msi| image:: https://img.shields.io/conda/dn/bioconda/msi.svg?style=flat
   :target: https://anaconda.org/bioconda/msi
   :alt:   (downloads)
.. |docker_msi| image:: https://quay.io/repository/biocontainers/msi/status
   :target: https://quay.io/repository/biocontainers/msi
.. _`msi/tags`: https://quay.io/repository/biocontainers/msi?tab=tags


.. raw:: html

    <script>
        var package = "msi";
        var versions = ["0.3.8","0.3.7","0.3.6","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msi/README.html