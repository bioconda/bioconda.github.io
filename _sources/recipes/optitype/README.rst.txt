:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optitype'
.. highlight: bash

optitype
========

.. conda:recipe:: optitype
   :replaces_section_title:
   :noindex:

   Precision HLA typing from next\-generation sequencing data

   :homepage: https://github.com/FRED-2/OptiType
   :license: BSD
   :recipe: /`optitype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype/meta.yaml>`_

   


.. conda:package:: optitype

   |downloads_optitype| |docker_optitype|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.5-3</code>,  <code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.1-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on future: 
   :depends on glpk: 
   :depends on hdf5: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyomo: 
   :depends on pysam: 
   :depends on pytables: ``<3.10``
   :depends on python: 
   :depends on razers3: 
   :depends on samtools: 
   :depends on six: 

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

    pixi global install optitype

to add into an existing workspace instead, run::

    pixi add optitype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install optitype

Alternatively, to install into a new environment, run::

    conda create -n envname optitype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/optitype:<tag>

(see `optitype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_optitype| image:: https://img.shields.io/conda/dn/bioconda/optitype.svg?style=flat
   :target: https://anaconda.org/bioconda/optitype
   :alt:   (downloads)
.. |docker_optitype| image:: https://quay.io/repository/biocontainers/optitype/status
   :target: https://quay.io/repository/biocontainers/optitype
.. _`optitype/tags`: https://quay.io/repository/biocontainers/optitype?tab=tags


.. raw:: html

    <script>
        var package = "optitype";
        var versions = ["1.3.5","1.3.5","1.3.5","1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optitype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optitype/README.html