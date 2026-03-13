:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmlst_api'
.. highlight: bash

rmlst_api
=========

.. conda:recipe:: rmlst_api
   :replaces_section_title:
   :noindex:

   Python package to perform rMLST through the PubMLST API.

   :homepage: https://github.com/domenico-simone/rmlst_api
   :documentation: https://pubmlst.org/species-id/species-identification-via-api
   
   :license: MIT / MIT
   :recipe: /`rmlst_api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmlst_api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmlst_api/meta.yaml>`_

   


.. conda:package:: rmlst_api

   |downloads_rmlst_api| |docker_rmlst_api|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.3-0``

      

   
   :depends on click: 
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.32.3``

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

    pixi global install rmlst_api

to add into an existing workspace instead, run::

    pixi add rmlst_api

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmlst_api

Alternatively, to install into a new environment, run::

    conda create -n envname rmlst_api

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmlst_api:<tag>

(see `rmlst_api/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmlst_api| image:: https://img.shields.io/conda/dn/bioconda/rmlst_api.svg?style=flat
   :target: https://anaconda.org/bioconda/rmlst_api
   :alt:   (downloads)
.. |docker_rmlst_api| image:: https://quay.io/repository/biocontainers/rmlst_api/status
   :target: https://quay.io/repository/biocontainers/rmlst_api
.. _`rmlst_api/tags`: https://quay.io/repository/biocontainers/rmlst_api?tab=tags


.. raw:: html

    <script>
        var package = "rmlst_api";
        var versions = ["0.1.8","0.1.6","0.1.5","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmlst_api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmlst_api/README.html