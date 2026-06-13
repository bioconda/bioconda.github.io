:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funannotate2'
.. highlight: bash

funannotate2
============

.. conda:recipe:: funannotate2
   :replaces_section_title:
   :noindex:

   Funannotate2\: eukarytoic genome annotation pipeline.

   :homepage: https://github.com/nextgenusfs/funannotate2
   :documentation: https://funannotate2.readthedocs.io/en/latest
   
   :license: BSD / BSD-2-Clause
   :recipe: /`funannotate2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate2/meta.yaml>`_

   


.. conda:package:: funannotate2

   |downloads_funannotate2| |docker_funannotate2|

   :versions:
      
      

      ``26.6.9-0``,  ``26.4.22-0``,  ``26.2.12-0``

      

   
   :depends on annorefine: ``>=2026.2.9``
   :depends on augustus: ``>=3.5.0``
   :depends on buscolite: ``>=26.1.26``
   :depends on diamond: 
   :depends on gapmm2: ``>=25.8.12``
   :depends on gb-io: ``>=0.3.2``
   :depends on gfftk: ``>=26.2.12``
   :depends on glimmerhmm: 
   :depends on json-repair: 
   :depends on mappy: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on psutil: 
   :depends on pyfastx: ``>=2.0.0``
   :depends on pyhmmer: ``>=0.12.0``
   :depends on pytantan: 
   :depends on python: ``>=3.7,<3.14``
   :depends on requests: 
   :depends on snap: 
   :depends on table2asn: 
   :depends on trnascan-se: 

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

    pixi global install funannotate2

to add into an existing workspace instead, run::

    pixi add funannotate2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install funannotate2

Alternatively, to install into a new environment, run::

    conda create -n envname funannotate2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/funannotate2:<tag>

(see `funannotate2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_funannotate2| image:: https://img.shields.io/conda/dn/bioconda/funannotate2.svg?style=flat
   :target: https://anaconda.org/bioconda/funannotate2
   :alt:   (downloads)
.. |docker_funannotate2| image:: https://quay.io/repository/biocontainers/funannotate2/status
   :target: https://quay.io/repository/biocontainers/funannotate2
.. _`funannotate2/tags`: https://quay.io/repository/biocontainers/funannotate2?tab=tags


.. raw:: html

   <script>
      var package = "funannotate2";
      var versions = ["26.6.9","26.4.22","26.2.12"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_funannotate2"></div>
   <div style="width: 100%" id="platform_plot_funannotate2"></div>
   <div style="width: 100%" id="cdf_plot_funannotate2"></div>



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
         
            // Build cdf plot for funannotate2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/funannotate2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_funannotate2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for funannotate2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/funannotate2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_funannotate2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for funannotate2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/funannotate2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_funannotate2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funannotate2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funannotate2/README.html