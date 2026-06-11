:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemoma'
.. highlight: bash

gemoma
======

.. conda:recipe:: gemoma
   :replaces_section_title:
   :noindex:

   Gene Model Mapper \(GeMoMa\) is a homology\-based gene prediction program.
   GeMoMa uses the annotation of protein\-coding genes in a reference genome to infer the annotation of protein\-coding genes in a target genome.
   Thereby\, GeMoMa utilizes amino acid sequence and intron position conservation.
   In addition\, GeMoMa allows to incorporate RNA\-seq evidence for splice site prediction.


   :homepage: http://www.jstacs.de/index.php/GeMoMa
   :license: GPL3
   :recipe: /`gemoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw092`, doi: :doi:`10.1186/s12859-018-2203-5`

   


.. conda:package:: gemoma

   |downloads_gemoma| |docker_gemoma|

   :versions:
      
      

      ``1.9-0``,  ``1.7.1-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends on blast: ``>=2.12.0``
   :depends on mmseqs2: ``>=14.7e284``
   :depends on openjdk: ``>=8,<12``
   :depends on python: ``>=3.7``

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

    pixi global install gemoma

to add into an existing workspace instead, run::

    pixi add gemoma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gemoma

Alternatively, to install into a new environment, run::

    conda create -n envname gemoma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gemoma:<tag>

(see `gemoma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gemoma| image:: https://img.shields.io/conda/dn/bioconda/gemoma.svg?style=flat
   :target: https://anaconda.org/bioconda/gemoma
   :alt:   (downloads)
.. |docker_gemoma| image:: https://quay.io/repository/biocontainers/gemoma/status
   :target: https://quay.io/repository/biocontainers/gemoma
.. _`gemoma/tags`: https://quay.io/repository/biocontainers/gemoma?tab=tags


.. raw:: html

   <script>
      var package = "gemoma";
      var versions = ["1.9","1.7.1","1.6.4","1.6.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gemoma"></div>
   <div style="width: 100%" id="platform_plot_gemoma"></div>
   <div style="width: 100%" id="cdf_plot_gemoma"></div>



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
         
            // Build cdf plot for gemoma
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gemoma/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gemoma', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gemoma
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gemoma/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gemoma', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gemoma
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gemoma/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gemoma', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
GeMoMa is Java program that comes with a custom wrapper python script. By default
\"\-Xms3g \-Xmx6g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemoma/README.html