:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbimeta'
.. highlight: bash

ncbimeta
========

.. conda:recipe:: ncbimeta
   :replaces_section_title:
   :noindex:

   Efficient and comprehensive metadata acquisition from the NCBI databases \(includes SRA\).

   :homepage: https://github.com/ktmeaton/NCBImeta
   :license: MIT
   :recipe: /`ncbimeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta/meta.yaml>`_

   


.. conda:package:: ncbimeta

   |downloads_ncbimeta| |docker_ncbimeta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.74``
   :depends on lxml: ``>=4.6.3``
   :depends on numpy: 
   :depends on python: ``>=3.6,<3.10``
   :depends on pyyaml: ``>=5.4``

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

    pixi global install ncbimeta

to add into an existing workspace instead, run::

    pixi add ncbimeta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbimeta

Alternatively, to install into a new environment, run::

    conda create -n envname ncbimeta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbimeta:<tag>

(see `ncbimeta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbimeta| image:: https://img.shields.io/conda/dn/bioconda/ncbimeta.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbimeta
   :alt:   (downloads)
.. |docker_ncbimeta| image:: https://quay.io/repository/biocontainers/ncbimeta/status
   :target: https://quay.io/repository/biocontainers/ncbimeta
.. _`ncbimeta/tags`: https://quay.io/repository/biocontainers/ncbimeta?tab=tags


.. raw:: html

    <script>
        var package = "ncbimeta";
        var versions = ["0.8.3","0.8.2","0.8.1","0.7.0","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbimeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbimeta/README.html