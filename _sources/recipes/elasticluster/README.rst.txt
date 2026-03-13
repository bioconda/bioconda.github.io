:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elasticluster'
.. highlight: bash

elasticluster
=============

.. conda:recipe:: elasticluster
   :replaces_section_title:
   :noindex:

   Create\, manage and setup computing clusters hosted on a public or private cloud infrastructure.

   :homepage: https://github.com/gc3-uzh-ch/elasticluster
   :license: GPL
   :recipe: /`elasticluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster/meta.yaml>`_

   


.. conda:package:: elasticluster

   |downloads_elasticluster| |docker_elasticluster|

   :versions:
      
      

      ``0.1.3bcbio-12``,  ``0.1.3bcbio-11``

      

   
   :depends on ansible: 
   :depends on azure: 
   :depends on boto: 
   :depends on configobj: 
   :depends on google-api-python-client: 
   :depends on oauth2client: 
   :depends on paramiko: 
   :depends on pycli: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python-gflags: 
   :depends on voluptuous: 

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

    pixi global install elasticluster

to add into an existing workspace instead, run::

    pixi add elasticluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install elasticluster

Alternatively, to install into a new environment, run::

    conda create -n envname elasticluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/elasticluster:<tag>

(see `elasticluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_elasticluster| image:: https://img.shields.io/conda/dn/bioconda/elasticluster.svg?style=flat
   :target: https://anaconda.org/bioconda/elasticluster
   :alt:   (downloads)
.. |docker_elasticluster| image:: https://quay.io/repository/biocontainers/elasticluster/status
   :target: https://quay.io/repository/biocontainers/elasticluster
.. _`elasticluster/tags`: https://quay.io/repository/biocontainers/elasticluster?tab=tags


.. raw:: html

    <script>
        var package = "elasticluster";
        var versions = ["0.1.3bcbio","0.1.3bcbio"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elasticluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elasticluster/README.html