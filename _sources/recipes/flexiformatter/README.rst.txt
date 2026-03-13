:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexiformatter'
.. highlight: bash

flexiformatter
==============

.. conda:recipe:: flexiformatter
   :replaces_section_title:
   :noindex:

   Moving flexiplex barcode and UMI to bam tags

   :homepage: https://github.com/ljwharbers/flexiformatter
   :license: MIT / MIT
   :recipe: /`flexiformatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiformatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiformatter/meta.yaml>`_

   


.. conda:package:: flexiformatter

   |downloads_flexiformatter| |docker_flexiformatter|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on python: ``>=3.7``
   :depends on samtools: 
   :depends on simplesam: 
   :depends on typer: ``>=0.9.0``

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

    pixi global install flexiformatter

to add into an existing workspace instead, run::

    pixi add flexiformatter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexiformatter

Alternatively, to install into a new environment, run::

    conda create -n envname flexiformatter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexiformatter:<tag>

(see `flexiformatter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexiformatter| image:: https://img.shields.io/conda/dn/bioconda/flexiformatter.svg?style=flat
   :target: https://anaconda.org/bioconda/flexiformatter
   :alt:   (downloads)
.. |docker_flexiformatter| image:: https://quay.io/repository/biocontainers/flexiformatter/status
   :target: https://quay.io/repository/biocontainers/flexiformatter
.. _`flexiformatter/tags`: https://quay.io/repository/biocontainers/flexiformatter?tab=tags


.. raw:: html

    <script>
        var package = "flexiformatter";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexiformatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexiformatter/README.html