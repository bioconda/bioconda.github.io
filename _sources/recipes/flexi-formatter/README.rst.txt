:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexi-formatter'
.. highlight: bash

flexi-formatter
===============

.. conda:recipe:: flexi-formatter
   :replaces_section_title:
   :noindex:

   Moving flexiplex barcode and UMI to bam tags

   :homepage: https://github.com/VIB-CCB-BioIT/flexiplex_tag_formatter
   :license: MIT
   :recipe: /`flexi-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexi-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexi-formatter/meta.yaml>`_

   


.. conda:package:: flexi-formatter

   |downloads_flexi-formatter| |docker_flexi-formatter|

   :versions:
      
      

      ``1.0.1-0``,  ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on python: ``>=3``
   :depends on samtools: 
   :depends on simplesam: 
   :depends on typer: 

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

    pixi global install flexi-formatter

to add into an existing workspace instead, run::

    pixi add flexi-formatter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexi-formatter

Alternatively, to install into a new environment, run::

    conda create -n envname flexi-formatter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexi-formatter:<tag>

(see `flexi-formatter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexi-formatter| image:: https://img.shields.io/conda/dn/bioconda/flexi-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/flexi-formatter
   :alt:   (downloads)
.. |docker_flexi-formatter| image:: https://quay.io/repository/biocontainers/flexi-formatter/status
   :target: https://quay.io/repository/biocontainers/flexi-formatter
.. _`flexi-formatter/tags`: https://quay.io/repository/biocontainers/flexi-formatter?tab=tags


.. raw:: html

    <script>
        var package = "flexi-formatter";
        var versions = ["1.0.1","0.0.4","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexi-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexi-formatter/README.html