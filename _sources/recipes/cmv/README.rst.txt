:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmv'
.. highlight: bash

cmv
===

.. conda:recipe:: cmv
   :replaces_section_title:
   :noindex:

   A collection of tools for the visualisation of Hidden Markov Models \(HMMV\) and RNA\-family models \(CMV\).

   :homepage: https://github.com/eggzilla/cmv
   :license: GPL-3
   :recipe: /`cmv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv/meta.yaml>`_

   


.. conda:package:: cmv

   |downloads_cmv| |docker_cmv|

   :versions:
      
      

      ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.2-0``

      

   
   :depends on cairo: 
   :depends on gmp: ``5.1*``
   :depends on libgcc: 
   :depends on libxml2: 
   :depends on pango: 
   :depends on pthread-stubs: 
   :depends on xorg-libsm: 
   :depends on xorg-libxext: 
   :depends on xorg-libxrender: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install cmv

to add into an existing workspace instead, run::

    pixi add cmv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cmv

Alternatively, to install into a new environment, run::

    conda create -n envname cmv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cmv:<tag>

(see `cmv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cmv| image:: https://img.shields.io/conda/dn/bioconda/cmv.svg?style=flat
   :target: https://anaconda.org/bioconda/cmv
   :alt:   (downloads)
.. |docker_cmv| image:: https://quay.io/repository/biocontainers/cmv/status
   :target: https://quay.io/repository/biocontainers/cmv
.. _`cmv/tags`: https://quay.io/repository/biocontainers/cmv?tab=tags


.. raw:: html

    <script>
        var package = "cmv";
        var versions = ["1.0.8","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmv/README.html