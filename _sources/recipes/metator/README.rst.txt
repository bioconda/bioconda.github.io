:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metator'
.. highlight: bash

metator
=======

.. conda:recipe:: metator
   :replaces_section_title:
   :noindex:

   Metagenomic binning based on Hi\-C data.

   :homepage: https://github.com/koszullab/metator
   :documentation: https://github.com/koszullab/metaTOR/blob/v1.3.10/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator/meta.yaml>`_
   :links: doi: :doi:`10.3389/fgene.2019.00753`

   


.. conda:package:: metator

   |downloads_metator| |docker_metator|

   :versions:
      
      

      ``1.3.10-1``,  ``1.3.10-0``,  ``1.3.7-0``

      

   
   :depends on biopython: ``<=1.80``
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on checkv: 
   :depends on cooler: 
   :depends on hicstuff: 
   :depends on hmmer: 
   :depends on libcxx: ``>=19``
   :depends on looseversion: 
   :depends on micomplete: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openjdk: 
   :depends on pairix: 
   :depends on pairtools: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on pyfastx: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 

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

    pixi global install metator

to add into an existing workspace instead, run::

    pixi add metator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metator

Alternatively, to install into a new environment, run::

    conda create -n envname metator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metator:<tag>

(see `metator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metator| image:: https://img.shields.io/conda/dn/bioconda/metator.svg?style=flat
   :target: https://anaconda.org/bioconda/metator
   :alt:   (downloads)
.. |docker_metator| image:: https://quay.io/repository/biocontainers/metator/status
   :target: https://quay.io/repository/biocontainers/metator
.. _`metator/tags`: https://quay.io/repository/biocontainers/metator?tab=tags


.. raw:: html

   <script>
      var package = "metator";
      var versions = ["1.3.10","1.3.10","1.3.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_metator"></div>
   <div style="width: 100%" id="platform_plot_metator"></div>
   <div style="width: 100%" id="cdf_plot_metator"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for metator
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metator/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_metator', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for metator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metator/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_metator', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for metator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metator/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_metator', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metator/README.html