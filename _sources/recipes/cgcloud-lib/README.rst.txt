:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgcloud-lib'
.. highlight: bash

cgcloud-lib
===========

.. conda:recipe:: cgcloud-lib
   :replaces_section_title:
   :noindex:

   Components shared between cgcloud\-core and cgcloud\-agent

   :homepage: https://github.com/BD2KGenomics/cgcloud
   :license: Apache 2.0
   :recipe: /`cgcloud-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgcloud-lib/meta.yaml>`_

   


.. conda:package:: cgcloud-lib

   |downloads_cgcloud-lib| |docker_cgcloud-lib|

   :versions:
      
      

      ``1.6.0-4``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4a1.dev195-0``

      

   
   :depends on bd2k-python-lib: 
   :depends on boto: ``>=2.38.0``
   :depends on future: 
   :depends on python: ``>=3``

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

    pixi global install cgcloud-lib

to add into an existing workspace instead, run::

    pixi add cgcloud-lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgcloud-lib

Alternatively, to install into a new environment, run::

    conda create -n envname cgcloud-lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgcloud-lib:<tag>

(see `cgcloud-lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgcloud-lib| image:: https://img.shields.io/conda/dn/bioconda/cgcloud-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/cgcloud-lib
   :alt:   (downloads)
.. |docker_cgcloud-lib| image:: https://quay.io/repository/biocontainers/cgcloud-lib/status
   :target: https://quay.io/repository/biocontainers/cgcloud-lib
.. _`cgcloud-lib/tags`: https://quay.io/repository/biocontainers/cgcloud-lib?tab=tags


.. raw:: html

    <script>
        var package = "cgcloud-lib";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.4a1.dev195"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgcloud-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgcloud-lib/README.html