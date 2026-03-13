:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geofetch'
.. highlight: bash

geofetch
========

.. conda:recipe:: geofetch
   :replaces_section_title:
   :noindex:

   Downloads data and metadata from GEO and SRA and creates standard PEPs.

   :homepage: https://github.com/pepkit/geofetch
   :documentation: http://geofetch.databio.org
   
   :license: BSD / BSD-2-Clause
   :recipe: /`geofetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geofetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geofetch/meta.yaml>`_

   


.. conda:package:: geofetch

   |downloads_geofetch| |docker_geofetch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.10-0</code>,  <code>0.12.9-0</code>,  <code>0.12.8-0</code>,  <code>0.12.7-0</code>,  <code>0.12.6-0</code>,  <code>0.12.5-0</code>,  <code>0.12.4-0</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  </span></summary>
      

      ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attmap: ``>=0.1.8``
   :depends on colorama: ``>=0.3.9``
   :depends on coloredlogs: ``>=15.0.1``
   :depends on logmuse: ``>=0.2.6``
   :depends on pandas: ``>=1.3.5``
   :depends on peppy: ``>=0.35.1``
   :depends on piper: ``>=0.12.3``
   :depends on python: ``>=3.8``
   :depends on requests: ``>=2.28.1``
   :depends on rich: ``>=12.5.1``
   :depends on ubiquerg: ``>=0.6.0``
   :depends on xmltodict: ``>=0.13.0``

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

    pixi global install geofetch

to add into an existing workspace instead, run::

    pixi add geofetch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install geofetch

Alternatively, to install into a new environment, run::

    conda create -n envname geofetch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/geofetch:<tag>

(see `geofetch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_geofetch| image:: https://img.shields.io/conda/dn/bioconda/geofetch.svg?style=flat
   :target: https://anaconda.org/bioconda/geofetch
   :alt:   (downloads)
.. |docker_geofetch| image:: https://quay.io/repository/biocontainers/geofetch/status
   :target: https://quay.io/repository/biocontainers/geofetch
.. _`geofetch/tags`: https://quay.io/repository/biocontainers/geofetch?tab=tags


.. raw:: html

    <script>
        var package = "geofetch";
        var versions = ["0.12.10","0.12.9","0.12.8","0.12.7","0.12.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geofetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geofetch/README.html