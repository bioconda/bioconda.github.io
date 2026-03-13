:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delegation'
.. highlight: bash

delegation
==========

.. conda:recipe:: delegation
   :replaces_section_title:
   :noindex:

   Simple implementation of the delegate pattern.

   :homepage: https://github.com/symonsoft/delegation
   :license: BSD / BSD
   :recipe: /`delegation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delegation/meta.yaml>`_

   


.. conda:package:: delegation

   |downloads_delegation| |docker_delegation|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on python: 

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

    pixi global install delegation

to add into an existing workspace instead, run::

    pixi add delegation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install delegation

Alternatively, to install into a new environment, run::

    conda create -n envname delegation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/delegation:<tag>

(see `delegation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_delegation| image:: https://img.shields.io/conda/dn/bioconda/delegation.svg?style=flat
   :target: https://anaconda.org/bioconda/delegation
   :alt:   (downloads)
.. |docker_delegation| image:: https://quay.io/repository/biocontainers/delegation/status
   :target: https://quay.io/repository/biocontainers/delegation
.. _`delegation/tags`: https://quay.io/repository/biocontainers/delegation?tab=tags


.. raw:: html

    <script>
        var package = "delegation";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delegation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delegation/README.html