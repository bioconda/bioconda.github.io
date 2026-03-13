:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krocus'
.. highlight: bash

krocus
======

.. conda:recipe:: krocus
   :replaces_section_title:
   :noindex:

   krocus performs multi\-locus sequence typing from uncorrected long reads.

   :homepage: https://github.com/andrewjpage/krocus
   :license: GPL / GPL-3.0
   :recipe: /`krocus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus/meta.yaml>`_

   Krocus can predict a sequence type directly from uncorrected long reads\, 
   and was designed to consume read data as it is produced\, providing results 
   in minutes.



.. conda:package:: krocus

   |downloads_krocus| |docker_krocus|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on pyfastaq: ``>=3.14.0``
   :depends on python: ``>=3``
   :depends on setuptools: 

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

    pixi global install krocus

to add into an existing workspace instead, run::

    pixi add krocus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install krocus

Alternatively, to install into a new environment, run::

    conda create -n envname krocus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/krocus:<tag>

(see `krocus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_krocus| image:: https://img.shields.io/conda/dn/bioconda/krocus.svg?style=flat
   :target: https://anaconda.org/bioconda/krocus
   :alt:   (downloads)
.. |docker_krocus| image:: https://quay.io/repository/biocontainers/krocus/status
   :target: https://quay.io/repository/biocontainers/krocus
.. _`krocus/tags`: https://quay.io/repository/biocontainers/krocus?tab=tags


.. raw:: html

    <script>
        var package = "krocus";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krocus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krocus/README.html