:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ga4ghclient'
.. highlight: bash

bioconductor-ga4ghclient
========================

.. conda:recipe:: bioconductor-ga4ghclient
   :replaces_section_title:
   :noindex:

   A Bioconductor package for accessing GA4GH API data servers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GA4GHclient.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ga4ghclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghclient/meta.yaml>`_

   GA4GHclient provides an easy way to access public data servers through Global Alliance for Genomics and Health \(GA4GH\) genomics API. It provides low\-level access to GA4GH API and translates response data into Bioconductor\-based class objects.


.. conda:package:: bioconductor-ga4ghclient

   |downloads_bioconductor-ga4ghclient| |docker_bioconductor-ga4ghclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-httr: 
   :depends on r-jsonlite: 

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

    pixi global install bioconductor-ga4ghclient

to add into an existing workspace instead, run::

    pixi add bioconductor-ga4ghclient

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ga4ghclient

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ga4ghclient

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ga4ghclient:<tag>

(see `bioconductor-ga4ghclient/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ga4ghclient| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghclient.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ga4ghclient
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghclient| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient
.. _`bioconductor-ga4ghclient/tags`: https://quay.io/repository/biocontainers/bioconductor-ga4ghclient?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ga4ghclient";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghclient/README.html