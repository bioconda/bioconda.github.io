:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dark-matter'
.. highlight: bash

dark-matter
===========

.. conda:recipe:: dark-matter
   :replaces_section_title:
   :noindex:

   Python library and utility scripts for working with genetic sequence data.

   :homepage: https://github.com/acorg/dark-matter
   :documentation: https://github.com/acorg/dark-matter/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`dark-matter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter/meta.yaml>`_

   


.. conda:package:: dark-matter

   |downloads_dark-matter| |docker_dark-matter|

   :versions:
      
      

      ``7.2.5-0``,  ``7.2.4-0``,  ``7.2.3-0``,  ``7.2.0-0``,  ``7.1.20-0``,  ``7.1.19-0``,  ``7.1.18-0``,  ``5.1.2-0``

      

   
   :depends on bcftools: 
   :depends on bio: ``>=1.8.1``
   :depends on biopython: ``>=1.87``
   :depends on bz2file: ``>=0.98``
   :depends on cachetools: ``>=5.5.2``
   :depends on dendropy: ``>=5.0.1``
   :depends on diamond: 
   :depends on emboss: 
   :depends on ete4: ``>=4.3.0``
   :depends on ipython: ``>=8.12.3``
   :depends on matplotlib-base: ``>=3.7.5``
   :depends on mysql-connector-python: ``>=9.0.0``
   :depends on numpy: ``>=1.14.2``
   :depends on picard-slim: 
   :depends on plotly: ``>=6.6.0``
   :depends on polars: ``>=1.36.1``
   :depends on progressbar: ``>=2.5``
   :depends on prseq: ``>=0.0.33``
   :depends on pysam: ``>=0.23.0``
   :depends on python: ``<3.14``
   :depends on python-edlib: ``>=1.3.9.post1``
   :depends on python-kaleido: ``>=1.2.0``
   :depends on pyzmq: ``>=14.3.1``
   :depends on requests: ``>=2.32.3``
   :depends on rich: ``>=14.0.0``
   :depends on samtools: 
   :depends on scikit-learn: ``>=1.3.2``
   :depends on simplejson: ``>=3.5.3``
   :depends on summarize-ranges: ``>=0.1.1``
   :depends on types-cachetools: ``>=5.5.0``
   :depends on types-requests: ``>=2.32.0``
   :depends on xlsxwriter: ``>=3.2.9``

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

    pixi global install dark-matter

to add into an existing workspace instead, run::

    pixi add dark-matter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dark-matter

Alternatively, to install into a new environment, run::

    conda create -n envname dark-matter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dark-matter:<tag>

(see `dark-matter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dark-matter| image:: https://img.shields.io/conda/dn/bioconda/dark-matter.svg?style=flat
   :target: https://anaconda.org/bioconda/dark-matter
   :alt:   (downloads)
.. |docker_dark-matter| image:: https://quay.io/repository/biocontainers/dark-matter/status
   :target: https://quay.io/repository/biocontainers/dark-matter
.. _`dark-matter/tags`: https://quay.io/repository/biocontainers/dark-matter?tab=tags


.. raw:: html

   <script>
      var package = "dark-matter";
      var versions = ["7.2.5","7.2.4","7.2.3","7.2.0","7.1.20"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_dark-matter"></div>
   <div style="width: 100%" id="platform_plot_dark-matter"></div>
   <div style="width: 100%" id="cdf_plot_dark-matter"></div>



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
         
            // Build cdf plot for dark-matter
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dark-matter/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_dark-matter', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for dark-matter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dark-matter/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_dark-matter', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for dark-matter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dark-matter/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_dark-matter', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dark-matter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dark-matter/README.html