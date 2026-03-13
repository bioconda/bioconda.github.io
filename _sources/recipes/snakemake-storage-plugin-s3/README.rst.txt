:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-s3'
.. highlight: bash

snakemake-storage-plugin-s3
===========================

.. conda:recipe:: snakemake-storage-plugin-s3
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin for S3 API storage \(AWS S3\, MinIO\, etc.\)

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-s3
   :documentation: https://snakemake.github.io/snakemake-plugin-catalog/plugins/storage/s3.html
   
   :license: MIT / MIT
   :recipe: /`snakemake-storage-plugin-s3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-s3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-s3/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-s3

   |downloads_snakemake-storage-plugin-s3| |docker_snakemake-storage-plugin-s3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.13-0</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.34.63,<2.0.0``
   :depends on botocore: ``>=1.34.63,<2.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends on snakemake-interface-storage-plugins: ``>=4.2.3,<5.0.0``

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

    pixi global install snakemake-storage-plugin-s3

to add into an existing workspace instead, run::

    pixi add snakemake-storage-plugin-s3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-storage-plugin-s3

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-storage-plugin-s3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-storage-plugin-s3:<tag>

(see `snakemake-storage-plugin-s3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-storage-plugin-s3| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-s3.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-s3
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-s3| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3
.. _`snakemake-storage-plugin-s3/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-s3";
        var versions = ["0.3.6","0.3.5","0.3.4","0.3.3","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-s3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-s3/README.html