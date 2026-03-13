:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylowgs'
.. highlight: bash

phylowgs
========

.. conda:recipe:: phylowgs
   :replaces_section_title:
   :noindex:

   Application for inferring subclonal composition and evolution from whole\-genome sequencing data

   :homepage: https://github.com/morrislab/phylowgs
   :license: GPLv3
   :recipe: /`phylowgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs/meta.yaml>`_

   


.. conda:package:: phylowgs

   |downloads_phylowgs| |docker_phylowgs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20181105-8</code>,  <code>20181105-7</code>,  <code>20181105-6</code>,  <code>20181105-5</code>,  <code>20181105-4</code>,  <code>20181105-3</code>,  <code>20181105-2</code>,  <code>20181105-1</code>,  <code>20181105-0</code>,  </span></summary>
      

      ``20181105-8``,  ``20181105-7``,  ``20181105-6``,  ``20181105-5``,  ``20181105-4``,  ``20181105-3``,  ``20181105-2``,  ``20181105-1``,  ``20181105-0``,  ``20180317-2``,  ``20180317-1``,  ``20180317-0``,  ``20150714-1``

      
      .. raw:: html

         </details>
      

   
   :depends on ete2: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on pyvcf: 
   :depends on scipy: 

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

    pixi global install phylowgs

to add into an existing workspace instead, run::

    pixi add phylowgs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylowgs

Alternatively, to install into a new environment, run::

    conda create -n envname phylowgs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylowgs:<tag>

(see `phylowgs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylowgs| image:: https://img.shields.io/conda/dn/bioconda/phylowgs.svg?style=flat
   :target: https://anaconda.org/bioconda/phylowgs
   :alt:   (downloads)
.. |docker_phylowgs| image:: https://quay.io/repository/biocontainers/phylowgs/status
   :target: https://quay.io/repository/biocontainers/phylowgs
.. _`phylowgs/tags`: https://quay.io/repository/biocontainers/phylowgs?tab=tags


.. raw:: html

    <script>
        var package = "phylowgs";
        var versions = ["20181105","20181105","20181105","20181105","20181105"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylowgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylowgs/README.html