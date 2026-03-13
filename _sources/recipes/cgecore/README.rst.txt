:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgecore'
.. highlight: bash

cgecore
=======

.. conda:recipe:: cgecore
   :replaces_section_title:
   :noindex:

   Center for Genomic Epidemiology Core Module

   :homepage: https://bitbucket.org/genomicepidemiology/cge_core_module
   :license: Apache / Apache-2.0
   :recipe: /`cgecore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore/meta.yaml>`_

   


.. conda:package:: cgecore

   |downloads_cgecore| |docker_cgecore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.5.6-0</code>,  <code>1.5.5-1</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.6-0``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.81``
   :depends on gitpython: ``>=3.1.40``
   :depends on numpy: ``>=1.26.2``
   :depends on pandas: ``>=2.1.4``
   :depends on python: ``>=3.10``
   :depends on python-dateutil: ``>=2.8.2``

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

    pixi global install cgecore

to add into an existing workspace instead, run::

    pixi add cgecore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgecore

Alternatively, to install into a new environment, run::

    conda create -n envname cgecore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgecore:<tag>

(see `cgecore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgecore| image:: https://img.shields.io/conda/dn/bioconda/cgecore.svg?style=flat
   :target: https://anaconda.org/bioconda/cgecore
   :alt:   (downloads)
.. |docker_cgecore| image:: https://quay.io/repository/biocontainers/cgecore/status
   :target: https://quay.io/repository/biocontainers/cgecore
.. _`cgecore/tags`: https://quay.io/repository/biocontainers/cgecore?tab=tags


.. raw:: html

    <script>
        var package = "cgecore";
        var versions = ["2.0.1","2.0.0","1.5.6","1.5.5","1.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgecore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgecore/README.html