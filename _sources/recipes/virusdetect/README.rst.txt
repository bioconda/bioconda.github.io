:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virusdetect'
.. highlight: bash

virusdetect
===========

.. conda:recipe:: virusdetect
   :replaces_section_title:
   :noindex:

   Python rewrite of the VirusDetect plant virus discovery pipeline

   :homepage: https://github.com/kentnf/VirusDetect
   :license: MIT
   :recipe: /`virusdetect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusdetect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusdetect/meta.yaml>`_

   


.. conda:package:: virusdetect

   |downloads_virusdetect| |docker_virusdetect|

   :versions:
      
      

      ``2.0.0a0-0``

      

   
   :depends on blast: 
   :depends on bwa: 
   :depends on hisat2: 
   :depends on python: ``>=3.10``
   :depends on samtools: 
   :depends on spades: 
   :depends on velvet: 

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

    pixi global install virusdetect

to add into an existing workspace instead, run::

    pixi add virusdetect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virusdetect

Alternatively, to install into a new environment, run::

    conda create -n envname virusdetect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virusdetect:<tag>

(see `virusdetect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virusdetect| image:: https://img.shields.io/conda/dn/bioconda/virusdetect.svg?style=flat
   :target: https://anaconda.org/bioconda/virusdetect
   :alt:   (downloads)
.. |docker_virusdetect| image:: https://quay.io/repository/biocontainers/virusdetect/status
   :target: https://quay.io/repository/biocontainers/virusdetect
.. _`virusdetect/tags`: https://quay.io/repository/biocontainers/virusdetect?tab=tags


.. raw:: html

    <script>
        var package = "virusdetect";
        var versions = ["2.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virusdetect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virusdetect/README.html