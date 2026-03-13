:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tobias'
.. highlight: bash

tobias
======

.. conda:recipe:: tobias
   :replaces_section_title:
   :noindex:

   Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal.

   :homepage: https://github.com/loosolab/TOBIAS
   :documentation: https://github.com/loosolab/TOBIAS/wiki
   
   :license: MIT / MIT
   :recipe: /`tobias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias/meta.yaml>`_
   :links: biotools: :biotools:`TOBIAS`, doi: :doi:`10.1038/s41467-020-18035-1`

   TOBIAS \(Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal\) is a collection
   of command\-line bioinformatics tools for performing footprinting analysis on ATAC\-seq data.



.. conda:package:: tobias

   |downloads_tobias| |docker_tobias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.17.3-1</code>,  <code>0.17.3-0</code>,  <code>0.17.2-0</code>,  <code>0.17.1-1</code>,  <code>0.17.1-0</code>,  <code>0.17.0-1</code>,  <code>0.17.0-0</code>,  <code>0.16.1-1</code>,  <code>0.16.1-0</code>,  </span></summary>
      

      ``0.17.3-1``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-1``,  ``0.17.1-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.13.3-1``,  ``0.13.3-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.12-0``,  ``0.12.11-0``,  ``0.12.10-1``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.6-1``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on boto3: 
   :depends on importlib-metadata: 
   :depends on kneed: 
   :depends on libgcc: ``>=13``
   :depends on logomaker: 
   :depends on matplotlib-base: ``>=2``
   :depends on moods: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pybigwig: ``>=0.3``
   :depends on pypdf2: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: ``>5.1``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: ``>=0.9.1``
   :depends on svist4get: ``>=1.2.24``
   :depends on xgboost: ``>=0.71``
   :depends on xlsxwriter: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install tobias

to add into an existing workspace instead, run::

    pixi add tobias

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tobias

Alternatively, to install into a new environment, run::

    conda create -n envname tobias

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tobias:<tag>

(see `tobias/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tobias| image:: https://img.shields.io/conda/dn/bioconda/tobias.svg?style=flat
   :target: https://anaconda.org/bioconda/tobias
   :alt:   (downloads)
.. |docker_tobias| image:: https://quay.io/repository/biocontainers/tobias/status
   :target: https://quay.io/repository/biocontainers/tobias
.. _`tobias/tags`: https://quay.io/repository/biocontainers/tobias?tab=tags


.. raw:: html

    <script>
        var package = "tobias";
        var versions = ["0.17.3","0.17.3","0.17.2","0.17.1","0.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tobias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tobias/README.html