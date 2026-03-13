:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sample-sheet'
.. highlight: bash

sample-sheet
============

.. conda:recipe:: sample-sheet
   :replaces_section_title:
   :noindex:

   An Illumina Sample Sheet parsing library

   :homepage: https://github.com/clintval/sample-sheet
   :documentation: https://sample-sheet.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`sample-sheet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet/meta.yaml>`_

   


.. conda:package:: sample-sheet

   |downloads_sample-sheet| |docker_sample-sheet|

   :versions:
      
      

      ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``

      

   
   :depends on click: 
   :depends on python: ``>=3.6``
   :depends on requests: 
   :depends on smart_open: ``>=1.5.4``
   :depends on tabulate: 
   :depends on terminaltables: 

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

    pixi global install sample-sheet

to add into an existing workspace instead, run::

    pixi add sample-sheet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sample-sheet

Alternatively, to install into a new environment, run::

    conda create -n envname sample-sheet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sample-sheet:<tag>

(see `sample-sheet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sample-sheet| image:: https://img.shields.io/conda/dn/bioconda/sample-sheet.svg?style=flat
   :target: https://anaconda.org/bioconda/sample-sheet
   :alt:   (downloads)
.. |docker_sample-sheet| image:: https://quay.io/repository/biocontainers/sample-sheet/status
   :target: https://quay.io/repository/biocontainers/sample-sheet
.. _`sample-sheet/tags`: https://quay.io/repository/biocontainers/sample-sheet?tab=tags


.. raw:: html

    <script>
        var package = "sample-sheet";
        var versions = ["0.13.0","0.12.0","0.11.0","0.10.0","0.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sample-sheet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sample-sheet/README.html