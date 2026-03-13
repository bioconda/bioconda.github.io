:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pixelator'
.. highlight: bash

pixelator
=========

.. conda:recipe:: pixelator
   :replaces_section_title:
   :noindex:

   A command\-line tool and library to process and analyze sequencing data from Molecular Pixelation \(MPX\) assays.

   :homepage: https://github.com/PixelgenTechnologies/pixelator
   :documentation: https://software.pixelgen.com
   
   :license: MIT / MIT
   :recipe: /`pixelator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixelator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixelator/meta.yaml>`_

   


.. conda:package:: pixelator

   |downloads_pixelator| |docker_pixelator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.19.0-0</code>,  <code>0.18.3-0</code>,  <code>0.18.2-0</code>,  <code>0.18.1-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.2-0</code>,  <code>0.15.2-0</code>,  <code>0.15.0-0</code>,  </span></summary>
      

      ``0.19.0-0``,  ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.2-0``,  ``0.15.2-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.8.0``
   :depends on click: 
   :depends on cssselect: 
   :depends on cutadapt: ``>=4.2``
   :depends on fastp: 
   :depends on fastparquet: ``>=2023.8.0,<2024.0.0``
   :depends on fsspec: ``>=2023.12.2,<2024.0.0``
   :depends on graspologic: ``>=3.3.0,<4.0.0``
   :depends on importlib-resources: ``>=5.12.0,<6.0.0``
   :depends on lxml: 
   :depends on numba: ``>=0.56.4``
   :depends on numpy: ``<1.24.0``
   :depends on pandas: ``>=2.0.0,<3.0.0``
   :depends on plotly: 
   :depends on polars: ``>=1.1.0,<2.0``
   :depends on pyarrow: ``>=14,<16``
   :depends on pydantic: ``>=2.0,<2.5``
   :depends on pyfastx: 
   :depends on python: ``>=3.10,<3.12``
   :depends on python-annoy: ``<=1.17.0``
   :depends on python-xxhash: 
   :depends on ruamel.yaml: ``>=0.17.21,<0.18.0``
   :depends on scanpy: 
   :depends on scipy: ``<1.13.0``
   :depends on semver: ``>=3.0.0,<4.0.0``
   :depends on typing_extensions: 
   :depends on umi_tools: ``>=1.1.4,<2.0.0``
   :depends on xopen: ``<1.9.0``
   :depends on yapf: 
   :depends on yappi: 

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

    pixi global install pixelator

to add into an existing workspace instead, run::

    pixi add pixelator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pixelator

Alternatively, to install into a new environment, run::

    conda create -n envname pixelator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pixelator:<tag>

(see `pixelator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pixelator| image:: https://img.shields.io/conda/dn/bioconda/pixelator.svg?style=flat
   :target: https://anaconda.org/bioconda/pixelator
   :alt:   (downloads)
.. |docker_pixelator| image:: https://quay.io/repository/biocontainers/pixelator/status
   :target: https://quay.io/repository/biocontainers/pixelator
.. _`pixelator/tags`: https://quay.io/repository/biocontainers/pixelator?tab=tags


.. raw:: html

    <script>
        var package = "pixelator";
        var versions = ["0.19.0","0.18.3","0.18.2","0.18.1","0.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pixelator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pixelator/README.html