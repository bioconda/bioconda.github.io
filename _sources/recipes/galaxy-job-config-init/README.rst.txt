:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-job-config-init'
.. highlight: bash

galaxy-job-config-init
======================

.. conda:recipe:: galaxy-job-config-init
   :replaces_section_title:
   :noindex:

   Galaxy configuration.

   :homepage: https://github.com/galaxyproject/galaxy-job-config-init
   :license: MIT / MIT
   :recipe: /`galaxy-job-config-init <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-config-init>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-config-init/meta.yaml>`_

   


.. conda:package:: galaxy-job-config-init

   |downloads_galaxy-job-config-init| |docker_galaxy-job-config-init|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on jinja2: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on typing_extensions: 

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

    pixi global install galaxy-job-config-init

to add into an existing workspace instead, run::

    pixi add galaxy-job-config-init

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-job-config-init

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-job-config-init

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-job-config-init:<tag>

(see `galaxy-job-config-init/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-job-config-init| image:: https://img.shields.io/conda/dn/bioconda/galaxy-job-config-init.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-job-config-init
   :alt:   (downloads)
.. |docker_galaxy-job-config-init| image:: https://quay.io/repository/biocontainers/galaxy-job-config-init/status
   :target: https://quay.io/repository/biocontainers/galaxy-job-config-init
.. _`galaxy-job-config-init/tags`: https://quay.io/repository/biocontainers/galaxy-job-config-init?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-job-config-init";
        var versions = ["0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-job-config-init/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-job-config-init/README.html