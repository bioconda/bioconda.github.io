:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dxua'
.. highlight: bash

dxua
====

.. conda:recipe:: dxua
   :replaces_section_title:
   :noindex:

   command\-line tool for uploading files to the DNAnexus Platform

   :homepage: https://documentation.dnanexus.com/user/objects/uploading-and-downloading-files/batch/upload-agent
   :license: Apache / Apache 2.0
   :recipe: /`dxua <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua/meta.yaml>`_

   


.. conda:package:: dxua

   |downloads_dxua| |docker_dxua|

   :versions:
      
      

      ``1.5.31-0``,  ``1.5.26-1``,  ``1.5.26-0``,  ``1.5.11-0``

      

   

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

    pixi global install dxua

to add into an existing workspace instead, run::

    pixi add dxua

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dxua

Alternatively, to install into a new environment, run::

    conda create -n envname dxua

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dxua:<tag>

(see `dxua/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dxua| image:: https://img.shields.io/conda/dn/bioconda/dxua.svg?style=flat
   :target: https://anaconda.org/bioconda/dxua
   :alt:   (downloads)
.. |docker_dxua| image:: https://quay.io/repository/biocontainers/dxua/status
   :target: https://quay.io/repository/biocontainers/dxua
.. _`dxua/tags`: https://quay.io/repository/biocontainers/dxua?tab=tags


.. raw:: html

    <script>
        var package = "dxua";
        var versions = ["1.5.31","1.5.26","1.5.26","1.5.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxua/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxua/README.html