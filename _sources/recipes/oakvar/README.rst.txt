:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oakvar'
.. highlight: bash

oakvar
======

.. conda:recipe:: oakvar
   :replaces_section_title:
   :noindex:

   OakVar \- Genomic Variant Analysis Platform

   :homepage: https://github.com/rkimoakbioinformatics/oakvar
   :documentation: https://rkimoakbioinformatics.github.io/oakvar
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`oakvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oakvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oakvar/meta.yaml>`_
   :links: biotools: :biotools:`oakvar`

   


.. conda:package:: oakvar

   |downloads_oakvar| |docker_oakvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.25-0</code>,  <code>2.12.24-0</code>,  <code>2.12.23-0</code>,  <code>2.12.22-0</code>,  <code>2.12.21-0</code>,  <code>2.12.20-0</code>,  <code>2.12.19-0</code>,  <code>2.12.18-0</code>,  <code>2.12.17-0</code>,  </span></summary>
      

      ``2.12.25-0``,  ``2.12.24-0``,  ``2.12.23-0``,  ``2.12.22-0``,  ``2.12.21-0``,  ``2.12.20-0``,  ``2.12.19-0``,  ``2.12.18-0``,  ``2.12.17-0``,  ``2.12.15-0``,  ``2.12.12-0``,  ``2.12.11-0``,  ``2.12.10-0``,  ``2.12.9-0``,  ``2.12.7-0``,  ``2.12.6-0``,  ``2.12.5-0``,  ``2.12.4-0``,  ``2.12.3-0``,  ``2.12.2-0``,  ``2.11.26-0``,  ``2.11.25-0``,  ``2.11.24-0``,  ``2.11.21-0``,  ``2.11.14-0``,  ``2.11.11-0``,  ``2.11.10-0``,  ``2.11.9-0``,  ``2.11.8-0``,  ``2.11.5-0``,  ``2.11.4-0``,  ``2.11.3-0``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.9.128-0``,  ``2.9.127-0``,  ``2.9.123-0``,  ``2.9.122-0``,  ``2.9.119-0``,  ``2.9.116-0``,  ``2.9.114-0``,  ``2.9.112-0``,  ``2.9.111-0``,  ``2.9.110-0``,  ``2.9.109-0``,  ``2.9.106-0``,  ``2.9.97-0``,  ``2.9.96-0``,  ``2.9.95-0``,  ``2.9.94-0``,  ``2.9.93-0``,  ``2.9.92-0``,  ``2.9.91-0``,  ``2.9.90-0``,  ``2.9.89-0``,  ``2.9.88-0``,  ``2.9.87-0``,  ``2.9.85-0``,  ``2.9.83-0``,  ``2.9.82-0``,  ``2.9.81-0``,  ``2.9.80-0``,  ``2.9.78-0``,  ``2.9.77-0``,  ``2.9.75-0``,  ``2.9.72-0``,  ``2.9.71-0``,  ``2.9.69-0``,  ``2.9.68-0``,  ``2.9.64-0``,  ``2.9.62-0``,  ``2.9.60-0``,  ``2.9.59-0``,  ``2.9.58-0``,  ``2.9.57-0``,  ``2.9.56-0``,  ``2.9.55-0``,  ``2.9.54-0``,  ``2.9.53-0``,  ``2.9.52-0``,  ``2.9.51-0``,  ``2.9.49-0``,  ``2.9.43-0``,  ``2.9.41-0``,  ``2.9.39-0``,  ``2.9.37-0``,  ``2.9.36-0``,  ``2.9.34-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.8.40-0``,  ``2.8.38-0``,  ``2.8.37-0``,  ``2.8.36-0``,  ``2.8.35-0``,  ``2.8.28-0``,  ``2.7.40-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiohttp: ``<4.0.0``
   :depends on aiohttp-cors: 
   :depends on aiosqlite: 
   :depends on chardet: ``>=3.0.4``
   :depends on connectorx: 
   :depends on download: 
   :depends on duckdb: 
   :depends on gdown: 
   :depends on intervaltree: 
   :depends on liftover: 
   :depends on markdown: 
   :depends on mpmath: 
   :depends on multiprocess: 
   :depends on nest-asyncio: 
   :depends on oyaml: 
   :depends on packaging: 
   :depends on pillow: 
   :depends on polars: 
   :depends on psutil: 
   :depends on pyarrow: 
   :depends on pyjwt: 
   :depends on pysimplegui: 
   :depends on python: ``>=3.8``
   :depends on python-dateutil: 
   :depends on requests: 
   :depends on requests-toolbelt: 
   :depends on rich: 
   :depends on split-file-reader: 
   :depends on twobitreader: 
   :depends on ujson: 

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

    pixi global install oakvar

to add into an existing workspace instead, run::

    pixi add oakvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oakvar

Alternatively, to install into a new environment, run::

    conda create -n envname oakvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oakvar:<tag>

(see `oakvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oakvar| image:: https://img.shields.io/conda/dn/bioconda/oakvar.svg?style=flat
   :target: https://anaconda.org/bioconda/oakvar
   :alt:   (downloads)
.. |docker_oakvar| image:: https://quay.io/repository/biocontainers/oakvar/status
   :target: https://quay.io/repository/biocontainers/oakvar
.. _`oakvar/tags`: https://quay.io/repository/biocontainers/oakvar?tab=tags


.. raw:: html

    <script>
        var package = "oakvar";
        var versions = ["2.12.25","2.12.24","2.12.23","2.12.22","2.12.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oakvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oakvar/README.html