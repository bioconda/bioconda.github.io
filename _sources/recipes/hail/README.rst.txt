:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hail'
.. highlight: bash

hail
====

.. conda:recipe:: hail
   :replaces_section_title:
   :noindex:

   Hail is Python\-based data analysis tool for working with genomic data.

   :homepage: https://hail.is
   :developer docs: https://github.com/hail-is/hail
   :license: MIT / MIT
   :recipe: /`hail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail/meta.yaml>`_

   


.. conda:package:: hail

   |downloads_hail| |docker_hail|

   :versions:
      
      

      ``0.2.61-3``,  ``0.2.61-2``,  ``0.2.61-1``,  ``0.2.61-0``,  ``0.2.58-0``,  ``0.2.33-1``,  ``0.2.33-0``

      

   
   :depends on aiohttp: 
   :depends on aiohttp-session: 
   :depends on asyncinit: 
   :depends on bokeh: ``>=2.4.0,<3.0.0``
   :depends on decorator: ``<5``
   :depends on deprecated: 
   :depends on dill: 
   :depends on gcsfs: 
   :depends on google-api-core: 
   :depends on google-cloud-sdk: 
   :depends on google-cloud-storage: 
   :depends on humanize: 
   :depends on hurry.filesize: 
   :depends on jinja2: ``<3.1``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on nest-asyncio: 
   :depends on numpy: ``<1.24``
   :depends on numpy: ``>=1.23.5,<2.0a0``
   :depends on openjdk: ``8.*``
   :depends on parsimonious: 
   :depends on pyjwt: 
   :depends on pyspark: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python-json-logger: ``0.1.11``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on requests: 
   :depends on scipy: 
   :depends on tabulate: ``0.8.3``
   :depends on tqdm: ``4.42.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install hail

to add into an existing workspace instead, run::

    pixi add hail

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hail

Alternatively, to install into a new environment, run::

    conda create -n envname hail

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hail:<tag>

(see `hail/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hail| image:: https://img.shields.io/conda/dn/bioconda/hail.svg?style=flat
   :target: https://anaconda.org/bioconda/hail
   :alt:   (downloads)
.. |docker_hail| image:: https://quay.io/repository/biocontainers/hail/status
   :target: https://quay.io/repository/biocontainers/hail
.. _`hail/tags`: https://quay.io/repository/biocontainers/hail?tab=tags


.. raw:: html

    <script>
        var package = "hail";
        var versions = ["0.2.61","0.2.61","0.2.61","0.2.61","0.2.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hail/README.html