:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbitax2lin'
.. highlight: bash

ncbitax2lin
===========

.. conda:recipe:: ncbitax2lin
   :replaces_section_title:
   :noindex:

   NCBItax2lin

   :homepage: https://github.com/zyxue/ncbitax2lin
   :license: MIT / MIT
   :recipe: /`ncbitax2lin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitax2lin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitax2lin/meta.yaml>`_

   A tool that converts NCBI taxonomy dump into lineages



.. conda:package:: ncbitax2lin

   |downloads_ncbitax2lin| |docker_ncbitax2lin|

   :versions:
      
      

      ``3.0.0-0``,  ``2.4.1-0``,  ``2.3.2-0``

      

   
   :depends on fire: ``>=0.7.1,<0.8.0``
   :depends on pandas: ``>=2.3.2,<3.0.0``
   :depends on python: ``>=3.9,<3.14``
   :depends on typing-extensions: ``>=4.15.0,<5.0.0``

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

    pixi global install ncbitax2lin

to add into an existing workspace instead, run::

    pixi add ncbitax2lin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbitax2lin

Alternatively, to install into a new environment, run::

    conda create -n envname ncbitax2lin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbitax2lin:<tag>

(see `ncbitax2lin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbitax2lin| image:: https://img.shields.io/conda/dn/bioconda/ncbitax2lin.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbitax2lin
   :alt:   (downloads)
.. |docker_ncbitax2lin| image:: https://quay.io/repository/biocontainers/ncbitax2lin/status
   :target: https://quay.io/repository/biocontainers/ncbitax2lin
.. _`ncbitax2lin/tags`: https://quay.io/repository/biocontainers/ncbitax2lin?tab=tags


.. raw:: html

    <script>
        var package = "ncbitax2lin";
        var versions = ["3.0.0","2.4.1","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbitax2lin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbitax2lin/README.html