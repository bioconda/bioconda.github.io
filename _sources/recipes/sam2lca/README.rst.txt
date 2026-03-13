:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam2lca'
.. highlight: bash

sam2lca
=======

.. conda:recipe:: sam2lca
   :replaces_section_title:
   :noindex:

   Lowest Common Ancestor on SAM\/BAM\/CRAM alignment files

   :homepage: https://github.com/maxibor/sam2lca
   :license: GPL-3.0
   :recipe: /`sam2lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca/meta.yaml>`_

   


.. conda:package:: sam2lca

   |downloads_sam2lca| |docker_sam2lca|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on click: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on python-rocksdb: 
   :depends on scipy: 
   :depends on taxopy: ``>=0.10.2``
   :depends on tqdm: 
   :depends on xopen: 

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

    pixi global install sam2lca

to add into an existing workspace instead, run::

    pixi add sam2lca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sam2lca

Alternatively, to install into a new environment, run::

    conda create -n envname sam2lca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sam2lca:<tag>

(see `sam2lca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sam2lca| image:: https://img.shields.io/conda/dn/bioconda/sam2lca.svg?style=flat
   :target: https://anaconda.org/bioconda/sam2lca
   :alt:   (downloads)
.. |docker_sam2lca| image:: https://quay.io/repository/biocontainers/sam2lca/status
   :target: https://quay.io/repository/biocontainers/sam2lca
.. _`sam2lca/tags`: https://quay.io/repository/biocontainers/sam2lca?tab=tags


.. raw:: html

    <script>
        var package = "sam2lca";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam2lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam2lca/README.html