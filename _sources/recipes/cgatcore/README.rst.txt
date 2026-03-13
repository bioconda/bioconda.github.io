:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgatcore'
.. highlight: bash

cgatcore
========

.. conda:recipe:: cgatcore
   :replaces_section_title:
   :noindex:

   CGAT \: the Computational Genomics Analysis Toolkit

   :homepage: https://github.com/cgat-developers/cgat-core
   :license: MIT / MIT
   :recipe: /`cgatcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgatcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgatcore/meta.yaml>`_

   


.. conda:package:: cgatcore

   |downloads_cgatcore| |docker_cgatcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.22-0</code>,  <code>0.6.21-0</code>,  <code>0.6.20-0</code>,  <code>0.6.19-0</code>,  <code>0.6.16-0</code>,  <code>0.6.15-0</code>,  <code>0.6.14-0</code>,  <code>0.6.11-0</code>,  <code>0.6.10-0</code>,  </span></summary>
      

      ``0.6.22-0``,  ``0.6.21-0``,  ``0.6.20-0``,  ``0.6.19-0``,  ``0.6.16-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.7-0``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.15-1``,  ``0.5.15-0``,  ``0.5.14-0``,  ``0.5.13-0``,  ``0.5.12-1``,  ``0.5.11-0``,  ``0.5.10-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on apsw: 
   :depends on boto3: 
   :depends on coreutils: 
   :depends on drmaa: 
   :depends on ftputil: 
   :depends on gevent: 
   :depends on google-cloud-sdk: 
   :depends on google-cloud-storage: 
   :depends on nomkl: 
   :depends on pandas: 
   :depends on pysftp: 
   :depends on python: ``>=3``
   :depends on pyyaml: ``>=5.1``
   :depends on ruffus: 
   :depends on six: 
   :depends on sqlalchemy: 
   :depends on time: 

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

    pixi global install cgatcore

to add into an existing workspace instead, run::

    pixi add cgatcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgatcore

Alternatively, to install into a new environment, run::

    conda create -n envname cgatcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgatcore:<tag>

(see `cgatcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgatcore| image:: https://img.shields.io/conda/dn/bioconda/cgatcore.svg?style=flat
   :target: https://anaconda.org/bioconda/cgatcore
   :alt:   (downloads)
.. |docker_cgatcore| image:: https://quay.io/repository/biocontainers/cgatcore/status
   :target: https://quay.io/repository/biocontainers/cgatcore
.. _`cgatcore/tags`: https://quay.io/repository/biocontainers/cgatcore?tab=tags


.. raw:: html

    <script>
        var package = "cgatcore";
        var versions = ["0.6.22","0.6.21","0.6.20","0.6.19","0.6.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgatcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgatcore/README.html