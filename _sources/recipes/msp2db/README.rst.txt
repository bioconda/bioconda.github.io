:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msp2db'
.. highlight: bash

msp2db
======

.. conda:recipe:: msp2db
   :replaces_section_title:
   :noindex:

   Python package to create an SQLite database from a collection of MSP mass spectromertry spectra files. Currently works with MSP files formated as MassBank records or as MoNA records. The resulting SQLite database can be used for spectral matching with msPurity Bioconductor R package\,

   :homepage: https://github.com/computational-metabolomics/msp2db
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`msp2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msp2db/meta.yaml>`_

   


.. conda:package:: msp2db

   |downloads_msp2db| |docker_msp2db|

   :versions:
      
      

      ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.6-0``

      

   
   :depends on pubchempy: 
   :depends on python: 
   :depends on six: 

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

    pixi global install msp2db

to add into an existing workspace instead, run::

    pixi add msp2db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msp2db

Alternatively, to install into a new environment, run::

    conda create -n envname msp2db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msp2db:<tag>

(see `msp2db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msp2db| image:: https://img.shields.io/conda/dn/bioconda/msp2db.svg?style=flat
   :target: https://anaconda.org/bioconda/msp2db
   :alt:   (downloads)
.. |docker_msp2db| image:: https://quay.io/repository/biocontainers/msp2db/status
   :target: https://quay.io/repository/biocontainers/msp2db
.. _`msp2db/tags`: https://quay.io/repository/biocontainers/msp2db?tab=tags


.. raw:: html

    <script>
        var package = "msp2db";
        var versions = ["0.0.9","0.0.9","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msp2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msp2db/README.html