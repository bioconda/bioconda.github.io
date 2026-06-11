:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pomoxis'
.. highlight: bash

pomoxis
=======

.. conda:recipe:: pomoxis
   :replaces_section_title:
   :noindex:

   Assembly\, consensensus\, and analysis tools by ONT research.

   :homepage: https://github.com/nanoporetech/pomoxis
   :documentation: https://nanoporetech.github.io/pomoxis/index.html
   
   :license: OTHER / MPL-2.0
   :recipe: /`pomoxis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis/meta.yaml>`_

   


.. conda:package:: pomoxis

   |downloads_pomoxis| |docker_pomoxis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.16-0</code>,  <code>0.3.15-0</code>,  <code>0.3.13-0</code>,  <code>0.3.12-0</code>,  <code>0.3.11-0</code>,  <code>0.3.10-0</code>,  <code>0.3.9-0</code>,  </span></summary>
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.16-0``,  ``0.3.15-0``,  ``0.3.13-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.9``
   :depends on bedtools: ``>=2.29.0``
   :depends on biopython: 
   :depends on intervaltree: ``>=3``
   :depends on matplotlib-base: 
   :depends on miniasm: ``>=0.3_r179``
   :depends on minimap2: ``>=2.17``
   :depends on ncls: ``>=0.0.65``
   :depends on numpy: ``>=2.0``
   :depends on pandas: 
   :depends on porechop: 
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.10,<3.15``
   :depends on racon: ``>=1.3.1``
   :depends on samtools: ``>=1.9``
   :depends on seqkit: ``>=0.8.0``

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

    pixi global install pomoxis

to add into an existing workspace instead, run::

    pixi add pomoxis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pomoxis

Alternatively, to install into a new environment, run::

    conda create -n envname pomoxis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pomoxis:<tag>

(see `pomoxis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pomoxis| image:: https://img.shields.io/conda/dn/bioconda/pomoxis.svg?style=flat
   :target: https://anaconda.org/bioconda/pomoxis
   :alt:   (downloads)
.. |docker_pomoxis| image:: https://quay.io/repository/biocontainers/pomoxis/status
   :target: https://quay.io/repository/biocontainers/pomoxis
.. _`pomoxis/tags`: https://quay.io/repository/biocontainers/pomoxis?tab=tags


.. raw:: html

   <script>
      var package = "pomoxis";
      var versions = ["0.4.1","0.4.0","0.3.16","0.3.15","0.3.13"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pomoxis"></div>
   <div style="width: 100%" id="platform_plot_pomoxis"></div>
   <div style="width: 100%" id="cdf_plot_pomoxis"></div>



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
         
            // Build cdf plot for pomoxis
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pomoxis/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pomoxis', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pomoxis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pomoxis/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pomoxis', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pomoxis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pomoxis/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pomoxis', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pomoxis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pomoxis/README.html