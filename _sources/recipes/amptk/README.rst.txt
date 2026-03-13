:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amptk'
.. highlight: bash

amptk
=====

.. conda:recipe:: amptk
   :replaces_section_title:
   :noindex:

   AMPtk\: Amplicon tool kit for processing high throughput amplicon sequencing data.

   :homepage: https://github.com/nextgenusfs/amptk
   :documentation: http://amptk.readthedocs.io/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`amptk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.4925`

   


.. conda:package:: amptk

   |downloads_amptk| |docker_amptk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.2-1</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dada2: ``>=1.12.1``
   :depends on bioconductor-phyloseq: 
   :depends on biom-format: 
   :depends on biopython: 
   :depends on distro: 
   :depends on fasttree: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pigz: 
   :depends on psutil: 
   :depends on pyfastx: ``>=0.8.0``
   :depends on python: ``>=3``
   :depends on python-edlib: ``>=1.2.1``
   :depends on r-base: 
   :depends on r-dt: 
   :depends on r-htmltools: 
   :depends on r-plotly: 
   :depends on requests: 
   :depends on seaborn: 
   :depends on vsearch: ``>=2.15.0``

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

    pixi global install amptk

to add into an existing workspace instead, run::

    pixi add amptk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amptk

Alternatively, to install into a new environment, run::

    conda create -n envname amptk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amptk:<tag>

(see `amptk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amptk| image:: https://img.shields.io/conda/dn/bioconda/amptk.svg?style=flat
   :target: https://anaconda.org/bioconda/amptk
   :alt:   (downloads)
.. |docker_amptk| image:: https://quay.io/repository/biocontainers/amptk/status
   :target: https://quay.io/repository/biocontainers/amptk
.. _`amptk/tags`: https://quay.io/repository/biocontainers/amptk?tab=tags


.. raw:: html

    <script>
        var package = "amptk";
        var versions = ["1.6.0","1.5.5","1.5.4","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amptk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amptk/README.html