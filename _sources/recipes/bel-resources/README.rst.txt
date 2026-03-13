:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bel-resources'
.. highlight: bash

bel-resources
=============

.. conda:recipe:: bel-resources
   :replaces_section_title:
   :noindex:

   Utilities for BEL resource files.

   :homepage: https://github.com/pybel/bel-resources
   :license: MIT / MIT
   :recipe: /`bel-resources <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources/meta.yaml>`_

   


.. conda:package:: bel-resources

   |downloads_bel-resources| |docker_bel-resources|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on multisplitby: 
   :depends on python: ``>=3.5``
   :depends on requests: 
   :depends on requests-file: 

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

    pixi global install bel-resources

to add into an existing workspace instead, run::

    pixi add bel-resources

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bel-resources

Alternatively, to install into a new environment, run::

    conda create -n envname bel-resources

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bel-resources:<tag>

(see `bel-resources/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bel-resources| image:: https://img.shields.io/conda/dn/bioconda/bel-resources.svg?style=flat
   :target: https://anaconda.org/bioconda/bel-resources
   :alt:   (downloads)
.. |docker_bel-resources| image:: https://quay.io/repository/biocontainers/bel-resources/status
   :target: https://quay.io/repository/biocontainers/bel-resources
.. _`bel-resources/tags`: https://quay.io/repository/biocontainers/bel-resources?tab=tags


.. raw:: html

    <script>
        var package = "bel-resources";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bel-resources/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bel-resources/README.html