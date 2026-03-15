:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntjoin'
.. highlight: bash

ntjoin
======

.. conda:recipe:: ntjoin
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using minimizer graphs

   :homepage: https://github.com/BirolLab/ntJoin
   :license: GPL-3.0-or-later
   :recipe: /`ntjoin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin/meta.yaml>`_

   


.. conda:package:: ntjoin

   |downloads_ntjoin| |docker_ntjoin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-3</code>,  <code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-2</code>,  </span></summary>
      

      ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.21.0``
   :depends on btllib: ``>=1.7.1``
   :depends on make: 
   :depends on packaging: 
   :depends on pybedtools: 
   :depends on pymannkendall: 
   :depends on pysam: ``>=0.16.0``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python-igraph: 
   :depends on samtools: ``>=1.10``
   :depends on zlib: 

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

    pixi global install ntjoin

to add into an existing workspace instead, run::

    pixi add ntjoin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntjoin

Alternatively, to install into a new environment, run::

    conda create -n envname ntjoin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntjoin:<tag>

(see `ntjoin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntjoin| image:: https://img.shields.io/conda/dn/bioconda/ntjoin.svg?style=flat
   :target: https://anaconda.org/bioconda/ntjoin
   :alt:   (downloads)
.. |docker_ntjoin| image:: https://quay.io/repository/biocontainers/ntjoin/status
   :target: https://quay.io/repository/biocontainers/ntjoin
.. _`ntjoin/tags`: https://quay.io/repository/biocontainers/ntjoin?tab=tags


.. raw:: html

    <script>
        var package = "ntjoin";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.5","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntjoin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntjoin/README.html