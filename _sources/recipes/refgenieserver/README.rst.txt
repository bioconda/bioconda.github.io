:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenieserver'
.. highlight: bash

refgenieserver
==============

.. conda:recipe:: refgenieserver
   :replaces_section_title:
   :noindex:

   This server provides both a web interface and a RESTful API. Users may explore and download archived indexes from the web interface or develop tools that programmatically query the API.

   :homepage: https://refgenie.databio.org/
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenieserver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenieserver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenieserver/meta.yaml>`_

   


.. conda:package:: refgenieserver

   |downloads_refgenieserver| |docker_refgenieserver|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiofiles: 
   :depends on fastapi: 
   :depends on jinja2: 
   :depends on logmuse: ``>=0.2``
   :depends on python: ``>=3.6``
   :depends on refgenconf: ``>=0.10.0``
   :depends on ubiquerg: ``>=0.6.1``
   :depends on uvicorn: ``>=0.7.1``

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

    pixi global install refgenieserver

to add into an existing workspace instead, run::

    pixi add refgenieserver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install refgenieserver

Alternatively, to install into a new environment, run::

    conda create -n envname refgenieserver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/refgenieserver:<tag>

(see `refgenieserver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_refgenieserver| image:: https://img.shields.io/conda/dn/bioconda/refgenieserver.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenieserver
   :alt:   (downloads)
.. |docker_refgenieserver| image:: https://quay.io/repository/biocontainers/refgenieserver/status
   :target: https://quay.io/repository/biocontainers/refgenieserver
.. _`refgenieserver/tags`: https://quay.io/repository/biocontainers/refgenieserver?tab=tags


.. raw:: html

    <script>
        var package = "refgenieserver";
        var versions = ["0.7.0","0.6.0","0.5.1","0.5.0","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenieserver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenieserver/README.html