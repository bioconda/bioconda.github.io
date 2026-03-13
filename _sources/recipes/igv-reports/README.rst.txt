:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv-reports'
.. highlight: bash

igv-reports
===========

.. conda:recipe:: igv-reports
   :replaces_section_title:
   :noindex:

   Creates self\-contained html pages for visual variant review with IGV \(igv.js\).

   :homepage: https://github.com/igvteam/igv-reports
   :documentation: https://github.com/igvteam/igv-reports/blob/v1.16.0/README.md
   
   :license: MIT / MIT
   :recipe: /`igv-reports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports/meta.yaml>`_

   


.. conda:package:: igv-reports

   |downloads_igv-reports| |docker_igv-reports|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.15.1-0</code>,  <code>1.15.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.8-1``,  ``0.9.8-0``,  ``0.9.7-1``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on intervaltree: 
   :depends on pysam: 
   :depends on python: 
   :depends on pytwobit: 
   :depends on pyyaml: 
   :depends on requests: 

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

    pixi global install igv-reports

to add into an existing workspace instead, run::

    pixi add igv-reports

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igv-reports

Alternatively, to install into a new environment, run::

    conda create -n envname igv-reports

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igv-reports:<tag>

(see `igv-reports/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igv-reports| image:: https://img.shields.io/conda/dn/bioconda/igv-reports.svg?style=flat
   :target: https://anaconda.org/bioconda/igv-reports
   :alt:   (downloads)
.. |docker_igv-reports| image:: https://quay.io/repository/biocontainers/igv-reports/status
   :target: https://quay.io/repository/biocontainers/igv-reports
.. _`igv-reports/tags`: https://quay.io/repository/biocontainers/igv-reports?tab=tags


.. raw:: html

    <script>
        var package = "igv-reports";
        var versions = ["1.16.0","1.15.1","1.15.0","1.14.1","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv-reports/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv-reports/README.html