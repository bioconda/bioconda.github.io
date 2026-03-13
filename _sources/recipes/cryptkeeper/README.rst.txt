:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryptkeeper'
.. highlight: bash

cryptkeeper
===========

.. conda:recipe:: cryptkeeper
   :replaces_section_title:
   :noindex:

   A negative design tool for predicting and visualizing undesired gene expression

   :homepage: https://github.com/barricklab/cryptkeeper
   :license: GPL3 / GPL-3.0-only
   :recipe: /`cryptkeeper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptkeeper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptkeeper/meta.yaml>`_

   


.. conda:package:: cryptkeeper

   |downloads_cryptkeeper| |docker_cryptkeeper|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on biopython: 
   :depends on bokeh: 
   :depends on ostir: 
   :depends on promotercalculator: 
   :depends on python: ``>=3.9``
   :depends on rhotermpredict: 

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

    pixi global install cryptkeeper

to add into an existing workspace instead, run::

    pixi add cryptkeeper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cryptkeeper

Alternatively, to install into a new environment, run::

    conda create -n envname cryptkeeper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cryptkeeper:<tag>

(see `cryptkeeper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cryptkeeper| image:: https://img.shields.io/conda/dn/bioconda/cryptkeeper.svg?style=flat
   :target: https://anaconda.org/bioconda/cryptkeeper
   :alt:   (downloads)
.. |docker_cryptkeeper| image:: https://quay.io/repository/biocontainers/cryptkeeper/status
   :target: https://quay.io/repository/biocontainers/cryptkeeper
.. _`cryptkeeper/tags`: https://quay.io/repository/biocontainers/cryptkeeper?tab=tags


.. raw:: html

    <script>
        var package = "cryptkeeper";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryptkeeper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryptkeeper/README.html