:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circexplorer'
.. highlight: bash

circexplorer
============

.. conda:recipe:: circexplorer
   :replaces_section_title:
   :noindex:

   A combined strategy to identify circular RNAs \(circRNAs and ciRNAs\)

   :homepage: https://github.com/YangLab/CIRCexplorer
   :license: MIT
   :recipe: /`circexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer/meta.yaml>`_

   


.. conda:package:: circexplorer

   |downloads_circexplorer| |docker_circexplorer|

   :versions:
      
      

      ``1.1.10-4``,  ``1.1.10-3``,  ``1.1.10-2``,  ``1.1.10-0``,  ``1.1.9-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on docopt: 
   :depends on pysam: ``>=0.8.4``
   :depends on python: ``<3``

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

    pixi global install circexplorer

to add into an existing workspace instead, run::

    pixi add circexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname circexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circexplorer:<tag>

(see `circexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circexplorer| image:: https://img.shields.io/conda/dn/bioconda/circexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/circexplorer
   :alt:   (downloads)
.. |docker_circexplorer| image:: https://quay.io/repository/biocontainers/circexplorer/status
   :target: https://quay.io/repository/biocontainers/circexplorer
.. _`circexplorer/tags`: https://quay.io/repository/biocontainers/circexplorer?tab=tags


.. raw:: html

    <script>
        var package = "circexplorer";
        var versions = ["1.1.10","1.1.10","1.1.10","1.1.10","1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circexplorer/README.html