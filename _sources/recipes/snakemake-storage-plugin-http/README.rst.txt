:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-http'
.. highlight: bash

snakemake-storage-plugin-http
=============================

.. conda:recipe:: snakemake-storage-plugin-http
   :replaces_section_title:
   :noindex:

   Snakemake storage plugin for donwloading input files from HTTP\(s\).

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-http
   :license: MIT
   :recipe: /`snakemake-storage-plugin-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-http/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-http

   |downloads_snakemake-storage-plugin-http| |docker_snakemake-storage-plugin-http|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on requests: ``>=2.31.0,<3.0.0``
   :depends on requests-oauthlib: ``>=1.3.1,<2.0.0``
   :depends on snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends on snakemake-interface-storage-plugins: ``>=4.1.0,<5.0.0``

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

    pixi global install snakemake-storage-plugin-http

to add into an existing workspace instead, run::

    pixi add snakemake-storage-plugin-http

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-storage-plugin-http

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-storage-plugin-http

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-storage-plugin-http:<tag>

(see `snakemake-storage-plugin-http/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-storage-plugin-http| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-http.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-http
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-http| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http
.. _`snakemake-storage-plugin-http/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-http";
        var versions = ["0.3.0","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-http/README.html