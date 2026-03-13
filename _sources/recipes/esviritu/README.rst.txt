:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esviritu'
.. highlight: bash

esviritu
========

.. conda:recipe:: esviritu
   :replaces_section_title:
   :noindex:

   Read mapping pipeline for detection and measurement of human and animal virus pathogens from short read metagenomic environmental or clinical samples.

   :homepage: https://github.com/cmmr/EsViritu
   :license: MIT
   :recipe: /`esviritu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-023-42064-1`

   


.. conda:package:: esviritu

   |downloads_esviritu| |docker_esviritu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fastp: ``>=0.23.2``
   :depends on minimap2: ``>=2.21``
   :depends on numpy: 
   :depends on polars: 
   :depends on pysam: 
   :depends on python: ``>=3.11``
   :depends on pyyaml: 
   :depends on r-base: 
   :depends on r-htmltools: 
   :depends on r-magrittr: 
   :depends on r-reactable: 
   :depends on r-reactablefmtr: 
   :depends on r-remotes: 
   :depends on r-scales: 
   :depends on samtools: ``>=1.15``
   :depends on seqkit: 

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

    pixi global install esviritu

to add into an existing workspace instead, run::

    pixi add esviritu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esviritu

Alternatively, to install into a new environment, run::

    conda create -n envname esviritu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esviritu:<tag>

(see `esviritu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_esviritu| image:: https://img.shields.io/conda/dn/bioconda/esviritu.svg?style=flat
   :target: https://anaconda.org/bioconda/esviritu
   :alt:   (downloads)
.. |docker_esviritu| image:: https://quay.io/repository/biocontainers/esviritu/status
   :target: https://quay.io/repository/biocontainers/esviritu
.. _`esviritu/tags`: https://quay.io/repository/biocontainers/esviritu?tab=tags


.. raw:: html

    <script>
        var package = "esviritu";
        var versions = ["1.2.0","1.1.6","1.1.5","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esviritu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esviritu/README.html