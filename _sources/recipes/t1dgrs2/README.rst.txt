:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't1dgrs2'
.. highlight: bash

t1dgrs2
=======

.. conda:recipe:: t1dgrs2
   :replaces_section_title:
   :noindex:

   Generate a Type 1 Diabetes Genetic Risk Score \(T1D GRS\) that accounts for interactions between HLA DR\-DQ risk haplotypes.

   :homepage: https://github.com/t2diabetesgenes/t1dgrs2
   :license: GPL / GPLv3
   :recipe: /`t1dgrs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2/meta.yaml>`_

   An improved T1D GRS \(by Sharp et al.\, 2019\) that incorporates both non\-HLA and HLA risk components in discriminating between cases and controls\, by accounting for interactions between HLA DR\-DQ haplotype combinations. This uses 67 T1D\-associated variants in either GRCh37 or GRCh38 to perform both a linear scoring of the genetic risk\, with the added HLA DR\-DQ interaction effect for the final GRS.

   This Python package can be used on both imputed genotyping array and next generation sequencing \(e.g.\, whole genome sequencing\) input datasets\, but will require quality control procedures to be applied beforehand.

   Required\: PLINK 1.9 fileset \(.bed\, .bim\, .fam\).

   Please download all configuration files under the \'data\' directory from the \[Github page\]\(https\:\/\/github.com\/t2diabetesgenes\/t1dgrs2\) and adjust paths in \'t1dgrs2\_setttings.yml\' accordingly.

   \#\#\# Authors
   \* Diane P Fraser \(\[email\]\(mailto\:d.p.fraser\@exeter.ac.uk\)\)
   \* Seth A Sharp \(\[email\]\(mailto\:ssharp\@stanford.edu\)\)
   \* Ankit M Arni \(\[email\]\(mailto\:a.m.arni\@exeter.ac.uk\)\)
   \* Richard A Oram \(\[email\]\(mailto\:r.oram\@exeter.ac.uk\)\)
   \* Michael N Weedon \(\[email\]\(mailto\:m.n.weedon\@exeter.ac.uk\)\)
   \* Kashyap A Patel \(\[email\]\(mailto\:k.a.patel\@exeter.ac.uk\)\)

   \#\#\# References
   1. Oram RA\, Patel K\, Hill A\, et al. \(2016\) A Type 1 Diabetes Genetic Risk Score Can Aid Discrimination Between Type 1 and Type 2 Diabetes in Young Adults. Diabetes Care 39\(3\)\: 337\-344. \[10.2337\/dc15\-1111\]\(https\:\/\/doi.org\/10.2337\/dc15\-1111\).
   2. Patel KA\, Oram RA\, Flanagan SE\, et al. \(2016\) Type 1 Diabetes Genetic Risk Score\: A Novel Tool to Discriminate Monogenic and Type 1 Diabetes. Diabetes 65\(7\)\: 2094\-2099. \[10.2337\/db15\-1690\]\(https\:\/\/doi.org\/10.2337\/db15\-1690\).
   3. Sharp SA\, Rich SS\, Wood AR\, et al. \(2019\) Development and Standardization of an Improved Type 1 Diabetes Genetic Risk Score for Use in Newborn Screening and Incident Diagnosis. Diabetes Care 42\(2\)\: 200\-207. \[10.2337\/dc18\-1785\]\(https\:\/\/doi.org\/10.2337\/dc18\-1785\).




.. conda:package:: t1dgrs2

   |downloads_t1dgrs2| |docker_t1dgrs2|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on numpy: ``1.24.*``
   :depends on pandas: ``1.5.*``
   :depends on plink: 
   :depends on python: ``>=3.11``
   :depends on pyyaml: ``6.0.*``
   :depends on scipy: ``1.10.*``
   :depends on setuptools: ``67.6.*``
   :depends on wheel: ``0.40.*``

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

    pixi global install t1dgrs2

to add into an existing workspace instead, run::

    pixi add t1dgrs2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install t1dgrs2

Alternatively, to install into a new environment, run::

    conda create -n envname t1dgrs2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/t1dgrs2:<tag>

(see `t1dgrs2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_t1dgrs2| image:: https://img.shields.io/conda/dn/bioconda/t1dgrs2.svg?style=flat
   :target: https://anaconda.org/bioconda/t1dgrs2
   :alt:   (downloads)
.. |docker_t1dgrs2| image:: https://quay.io/repository/biocontainers/t1dgrs2/status
   :target: https://quay.io/repository/biocontainers/t1dgrs2
.. _`t1dgrs2/tags`: https://quay.io/repository/biocontainers/t1dgrs2?tab=tags


.. raw:: html

   <script>
      var package = "t1dgrs2";
      var versions = ["0.1.2","0.1.1","0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_t1dgrs2"></div>
   <div style="width: 100%" id="platform_plot_t1dgrs2"></div>
   <div style="width: 100%" id="cdf_plot_t1dgrs2"></div>



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
         
            // Build cdf plot for t1dgrs2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/t1dgrs2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_t1dgrs2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for t1dgrs2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/t1dgrs2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_t1dgrs2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for t1dgrs2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/t1dgrs2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_t1dgrs2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t1dgrs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t1dgrs2/README.html