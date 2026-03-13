:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbcan'
.. highlight: bash

dbcan
=====

.. conda:recipe:: dbcan
   :replaces_section_title:
   :noindex:

   Standalone version of dbCAN annotation tool for automated CAZyme annotation.

   :homepage: https://bcb.unl.edu/dbCAN2
   :documentation: https://run-dbcan.readthedocs.io/en/latest
   
   :developer docs: https://github.com/bcb-unl/run_dbcan
   :license: GPL3 / GPL-3.0-only
   :recipe: /`dbcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx894`, doi: :doi:`10.1093/nar/gky418`, doi: :doi:`10.1093/nar/gkad328`, biotools: :biotools:`dbcan2`

   


.. conda:package:: dbcan

   |downloads_dbcan| |docker_dbcan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2.8-0</code>,  <code>5.2.7-0</code>,  <code>5.2.6-0</code>,  <code>5.2.5-0</code>,  <code>5.2.4-0</code>,  <code>5.2.2-0</code>,  <code>5.2.1-0</code>,  <code>5.1.2-1</code>,  <code>5.1.2-0</code>,  </span></summary>
      

      ``5.2.8-0``,  ``5.2.7-0``,  ``5.2.6-0``,  ``5.2.5-0``,  ``5.2.4-0``,  ``5.2.2-0``,  ``5.2.1-0``,  ``5.1.2-1``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.6-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.0-0``,  ``4.1.4-1``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.0.7-0``,  ``3.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on diamond: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on numpy: ``>1.19``
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pycirclize: 
   :depends on pyhmmer: 
   :depends on pyrodigal: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on rich-click: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on session-info: 
   :depends on tqdm: 

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

    pixi global install dbcan

to add into an existing workspace instead, run::

    pixi add dbcan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dbcan

Alternatively, to install into a new environment, run::

    conda create -n envname dbcan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dbcan:<tag>

(see `dbcan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dbcan| image:: https://img.shields.io/conda/dn/bioconda/dbcan.svg?style=flat
   :target: https://anaconda.org/bioconda/dbcan
   :alt:   (downloads)
.. |docker_dbcan| image:: https://quay.io/repository/biocontainers/dbcan/status
   :target: https://quay.io/repository/biocontainers/dbcan
.. _`dbcan/tags`: https://quay.io/repository/biocontainers/dbcan?tab=tags


.. raw:: html

    <script>
        var package = "dbcan";
        var versions = ["5.2.8","5.2.7","5.2.6","5.2.5","5.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbcan/README.html