:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pod5'
.. highlight: bash

pod5
====

.. conda:recipe:: pod5
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies Pod5 File Format Python API and Tools.

   :homepage: https://github.com/nanoporetech/pod5-file-format
   :documentation: https://pod5-file-format.readthedocs.io/en/latest
   
   :license: OTHER / MPL-2.0
   :recipe: /`pod5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5/meta.yaml>`_

   POD5 File Format \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   POD5 is a file format for storing nanopore dna data in an easily accessible way. The format is able to be written in a streaming manner which allows a sequencing instrument to directly write the format.
   Data in POD5 is stored using Apache Arrow\, allowing users to consume data in many languages using standard tools.
   What does this project contain \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   This project contains a core library for reading and writing POD5 data\, and a toolkit for accessing this data in other languages.
   Documentation \-\-\-\-\-\-\-\-\-\-\-\-\-
   Full documentation is found at https\:\/\/pod5\-file\-format.readthedocs.io


.. conda:package:: pod5

   |downloads_pod5| |docker_pod5|

   :versions:
      
      

      ``0.3.39-0``,  ``0.3.33-0``,  ``0.3.27-0``,  ``0.3.23-0``,  ``0.3.15-0``

      

   
   :depends on deprecated: 
   :depends on h5py: ``>=3.11``
   :depends on iso8601: 
   :depends on lib-pod5: ``0.3.39``
   :depends on more-itertools: 
   :depends on numpy: ``>=1.21.0``
   :depends on packaging: 
   :depends on polars: ``>=1.30``
   :depends on pyarrow: ``>=18.0.0,<21.0.0``
   :depends on python: ``>=3.9``
   :depends on pytz: 
   :depends on tqdm: 
   :depends on vbz-h5py-plugin: 

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

    pixi global install pod5

to add into an existing workspace instead, run::

    pixi add pod5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pod5

Alternatively, to install into a new environment, run::

    conda create -n envname pod5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pod5:<tag>

(see `pod5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pod5| image:: https://img.shields.io/conda/dn/bioconda/pod5.svg?style=flat
   :target: https://anaconda.org/bioconda/pod5
   :alt:   (downloads)
.. |docker_pod5| image:: https://quay.io/repository/biocontainers/pod5/status
   :target: https://quay.io/repository/biocontainers/pod5
.. _`pod5/tags`: https://quay.io/repository/biocontainers/pod5?tab=tags


.. raw:: html

   <script>
      var package = "pod5";
      var versions = ["0.3.39","0.3.33","0.3.27","0.3.23","0.3.15"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pod5"></div>
   <div style="width: 100%" id="platform_plot_pod5"></div>
   <div style="width: 100%" id="cdf_plot_pod5"></div>



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
         
            // Build cdf plot for pod5
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pod5/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pod5', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pod5
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pod5/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pod5', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pod5
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pod5/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pod5', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pod5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pod5/README.html