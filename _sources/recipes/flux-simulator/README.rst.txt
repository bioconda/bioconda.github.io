:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flux-simulator'
.. highlight: bash

flux-simulator
==============

.. conda:recipe:: flux-simulator
   :replaces_section_title:
   :noindex:

   Tool for modeling RNA\-Seq experiments in silico

   :homepage: http://sammeth.net/confluence/display/SIM/Home
   :license: BSD
   :recipe: /`flux-simulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator/meta.yaml>`_

   


.. conda:package:: flux-simulator

   |downloads_flux-simulator| |docker_flux-simulator|

   :versions:
      
      

      ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends on openjdk: 

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

    pixi global install flux-simulator

to add into an existing workspace instead, run::

    pixi add flux-simulator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flux-simulator

Alternatively, to install into a new environment, run::

    conda create -n envname flux-simulator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flux-simulator:<tag>

(see `flux-simulator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flux-simulator| image:: https://img.shields.io/conda/dn/bioconda/flux-simulator.svg?style=flat
   :target: https://anaconda.org/bioconda/flux-simulator
   :alt:   (downloads)
.. |docker_flux-simulator| image:: https://quay.io/repository/biocontainers/flux-simulator/status
   :target: https://quay.io/repository/biocontainers/flux-simulator
.. _`flux-simulator/tags`: https://quay.io/repository/biocontainers/flux-simulator?tab=tags


.. raw:: html

    <script>
        var package = "flux-simulator";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flux-simulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flux-simulator/README.html