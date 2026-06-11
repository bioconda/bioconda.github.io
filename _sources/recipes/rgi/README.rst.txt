:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgi'
.. highlight: bash

rgi
===

.. conda:recipe:: rgi
   :replaces_section_title:
   :noindex:

   This tool provides a preliminary annotation of your DNA sequence\(s\) based upon the data available in The Comprehensive Antibiotic Resistance Database \(CARD\). Hits to genes tagged with Antibiotic Resistance ontology terms will be highlighted. As CARD expands to include more pathogens\, genomes\, plasmids\, and ontology terms this tool will grow increasingly powerful in providing first\-pass detection of antibiotic resistance associated genes. See license at CARD website.

   :homepage: https://card.mcmaster.ca
   :license: https://card.mcmaster.ca/about
   :recipe: /`rgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz935`

   


.. conda:package:: rgi

   |downloads_rgi| |docker_rgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.8-0</code>,  <code>6.0.5-0</code>,  <code>6.0.4-1</code>,  <code>6.0.4-0</code>,  <code>6.0.3-1</code>,  <code>6.0.3-0</code>,  <code>6.0.2-0</code>,  <code>6.0.1-1</code>,  <code>6.0.1-0</code>,  </span></summary>
      

      ``6.0.8-0``,  ``6.0.5-0``,  ``6.0.4-1``,  ``6.0.4-0``,  ``6.0.3-1``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-1``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.2.1-2``,  ``5.2.1-1``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.0-0``,  ``4.2.2-1``,  ``4.2.2-0``,  ``4.0.3-3``,  ``4.0.3-2``,  ``4.0.3-1``,  ``4.0.3-0``,  ``3.2.1-4``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.0-1``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``2.5.2.*``
   :depends on beautifulsoup4: ``>=4.9.3``
   :depends on bedtools: ``>=2.31.1``
   :depends on biopython: ``>=1.78``
   :depends on blast: ``2.16.0``
   :depends on bowtie2: ``>=2.5.4``
   :depends on bwa: ``>=0.7.18``
   :depends on dask: 
   :depends on diamond: ``>=0.8.36``
   :depends on filetype: ``>=1.0.0``
   :depends on jellyfish: 
   :depends on kma: ``>=1.4.17``
   :depends on lxml: ``>=4.9.1``
   :depends on matplotlib-base: ``>=2.1.2``
   :depends on oligoarrayaux: ``3.8.*``
   :depends on pandas: ``>=0.15.0``
   :depends on prodigal: ``2.6.3.*``
   :depends on pyahocorasick: ``2.1.0``
   :depends on pyfaidx: ``>=0.5.4.1``
   :depends on pyrodigal: ``>=3.0.0``
   :depends on pysam: ``>=0.16.0.1``
   :depends on pytest: ``>=3.0.0``
   :depends on python: ``>=3.6``
   :depends on requests: ``2.32.4``
   :depends on samtools: ``1.22.1.*``
   :depends on seaborn-base: ``>=0.8.1``
   :depends on setuptools: ``>=47.1.0``
   :depends on wget: 

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

    pixi global install rgi

to add into an existing workspace instead, run::

    pixi add rgi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rgi

Alternatively, to install into a new environment, run::

    conda create -n envname rgi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rgi:<tag>

(see `rgi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rgi| image:: https://img.shields.io/conda/dn/bioconda/rgi.svg?style=flat
   :target: https://anaconda.org/bioconda/rgi
   :alt:   (downloads)
.. |docker_rgi| image:: https://quay.io/repository/biocontainers/rgi/status
   :target: https://quay.io/repository/biocontainers/rgi
.. _`rgi/tags`: https://quay.io/repository/biocontainers/rgi?tab=tags


.. raw:: html

   <script>
      var package = "rgi";
      var versions = ["6.0.8","6.0.5","6.0.4","6.0.4","6.0.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rgi"></div>
   <div style="width: 100%" id="platform_plot_rgi"></div>
   <div style="width: 100%" id="cdf_plot_rgi"></div>



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
         
            // Build cdf plot for rgi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rgi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rgi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rgi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rgi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rgi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rgi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rgi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rgi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgi/README.html