:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantms-utils'
.. highlight: bash

quantms-utils
=============

.. conda:recipe:: quantms-utils
   :replaces_section_title:
   :noindex:

   Python package with scripts and helpers for the quantms workflow.

   :homepage: https://www.github.com/bigbio/quantms-utils
   :documentation: https://quantms.org/home
   
   :license: MIT / MIT
   :recipe: /`quantms-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantms-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantms-utils/meta.yaml>`_

   


.. conda:package:: quantms-utils

   |downloads_quantms-utils| |docker_quantms-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.25-0</code>,  <code>0.0.24-0</code>,  <code>0.0.23-0</code>,  <code>0.0.22-0</code>,  <code>0.0.21-0</code>,  <code>0.0.20-0</code>,  <code>0.0.19-0</code>,  <code>0.0.18-0</code>,  <code>0.0.17-0</code>,  </span></summary>
      

      ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyarrow: ``>=16.1.0``
   :depends on pyopenms: ``>=3.3.0``
   :depends on python: ``>=3.9,<3.13``
   :depends on scipy: 
   :depends on sdrf-pipelines: ``>=0.0.33,<0.1.0``
   :depends on setuptools: ``<78``

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

    pixi global install quantms-utils

to add into an existing workspace instead, run::

    pixi add quantms-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quantms-utils

Alternatively, to install into a new environment, run::

    conda create -n envname quantms-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quantms-utils:<tag>

(see `quantms-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quantms-utils| image:: https://img.shields.io/conda/dn/bioconda/quantms-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/quantms-utils
   :alt:   (downloads)
.. |docker_quantms-utils| image:: https://quay.io/repository/biocontainers/quantms-utils/status
   :target: https://quay.io/repository/biocontainers/quantms-utils
.. _`quantms-utils/tags`: https://quay.io/repository/biocontainers/quantms-utils?tab=tags


.. raw:: html

    <script>
        var package = "quantms-utils";
        var versions = ["0.0.25","0.0.24","0.0.23","0.0.22","0.0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantms-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantms-utils/README.html