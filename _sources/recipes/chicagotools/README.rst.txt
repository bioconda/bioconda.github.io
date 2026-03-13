:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chicagotools'
.. highlight: bash

chicagotools
============

.. conda:recipe:: chicagotools
   :replaces_section_title:
   :noindex:

   chicagoTools are an assorted set of scripts associated with the Chicago R package.

   :homepage: https://bitbucket.org/chicagoTeam/chicago/src/c95eda46cb72e30e25ece06780e517efb3c06cc2/chicagoTools/?at=master
   :license: artistic license 2.0
   :recipe: /`chicagotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chicagotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chicagotools/meta.yaml>`_

   


.. conda:package:: chicagotools

   |downloads_chicagotools| |docker_chicagotools|

   :versions:
      
      

      ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-chicago: 
   :depends on python: 
   :depends on r-argparser: 
   :depends on r-base: 

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

    pixi global install chicagotools

to add into an existing workspace instead, run::

    pixi add chicagotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chicagotools

Alternatively, to install into a new environment, run::

    conda create -n envname chicagotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chicagotools:<tag>

(see `chicagotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chicagotools| image:: https://img.shields.io/conda/dn/bioconda/chicagotools.svg?style=flat
   :target: https://anaconda.org/bioconda/chicagotools
   :alt:   (downloads)
.. |docker_chicagotools| image:: https://quay.io/repository/biocontainers/chicagotools/status
   :target: https://quay.io/repository/biocontainers/chicagotools
.. _`chicagotools/tags`: https://quay.io/repository/biocontainers/chicagotools?tab=tags


.. raw:: html

    <script>
        var package = "chicagotools";
        var versions = ["1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chicagotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chicagotools/README.html