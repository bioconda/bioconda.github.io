:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2db'
.. highlight: bash

vcf2db
======

.. conda:recipe:: vcf2db
   :replaces_section_title:
   :noindex:

   Create a gemini\-compatible database from a VCF

   :homepage: https://github.com/quinlan-lab/vcf2db
   :license: MIT
   :recipe: /`vcf2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db/meta.yaml>`_

   


.. conda:package:: vcf2db

   |downloads_vcf2db| |docker_vcf2db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2020.02.24-3</code>,  <code>2020.02.24-2</code>,  <code>2020.02.24-1</code>,  <code>2020.02.24-0</code>,  <code>2018.10.26-1</code>,  <code>2018.10.26-0</code>,  <code>2018.05.23-2</code>,  <code>2018.05.23-0</code>,  <code>2018.01.23-0</code>,  </span></summary>
      

      ``2020.02.24-3``,  ``2020.02.24-2``,  ``2020.02.24-1``,  ``2020.02.24-0``,  ``2018.10.26-1``,  ``2018.10.26-0``,  ``2018.05.23-2``,  ``2018.05.23-0``,  ``2018.01.23-0``,  ``2017.12.11-0``,  ``2017.11.15-0``,  ``2017.10.11-0``,  ``2017.09.14-0``,  ``2017.04.12-0``,  ``2017.03.01-0``,  ``2017.02.25-0``,  ``2017.02.24-1``,  ``2017.02.24-0``,  ``2017.01.10-0``,  ``2016.12.09-1``,  ``2016.12.09-0``,  ``2016.11.08-0``,  ``2016.04.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cyvcf2: ``>=0.30``
   :depends on geneimpacts: ``>=0.3``
   :depends on nomkl: 
   :depends on numpy: 
   :depends on peddy: ``>=0.2.9``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on python: 
   :depends on python-snappy: 
   :depends on snappy: 
   :depends on sqlalchemy: ``<2.0``

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

    pixi global install vcf2db

to add into an existing workspace instead, run::

    pixi add vcf2db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2db

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2db:<tag>

(see `vcf2db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2db| image:: https://img.shields.io/conda/dn/bioconda/vcf2db.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2db
   :alt:   (downloads)
.. |docker_vcf2db| image:: https://quay.io/repository/biocontainers/vcf2db/status
   :target: https://quay.io/repository/biocontainers/vcf2db
.. _`vcf2db/tags`: https://quay.io/repository/biocontainers/vcf2db?tab=tags


.. raw:: html

   <script>
      var package = "vcf2db";
      var versions = ["2020.02.24","2020.02.24","2020.02.24","2020.02.24","2018.10.26"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vcf2db"></div>
   <div style="width: 100%" id="platform_plot_vcf2db"></div>
   <div style="width: 100%" id="cdf_plot_vcf2db"></div>



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
         
            // Build cdf plot for vcf2db
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2db/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vcf2db', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vcf2db
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2db/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vcf2db', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vcf2db
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2db/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vcf2db', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2db/README.html