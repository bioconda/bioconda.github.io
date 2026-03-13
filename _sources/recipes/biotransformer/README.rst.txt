:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotransformer'
.. highlight: bash

biotransformer
==============

.. conda:recipe:: biotransformer
   :replaces_section_title:
   :noindex:

   Predicts small molecule metabolism.

   :homepage: https://bitbucket.org/wishartlab/biotransformer3.0jar/src
   :license: GPL3
   :recipe: /`biotransformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotransformer/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321‐018‐0324‐5`, doi: :doi:`10.1093/nar/gkv1229`

   BioTransformer is a software tool that predicts small molecule metabolism in mammals\, their gut microbiota\,
   as well as the soil\/aquatic microbiota. BioTransformer also assists scientists in metabolite identification\,
   based on the metabolism prediction.



.. conda:package:: biotransformer

   |downloads_biotransformer| |docker_biotransformer|

   :versions:
      
      

      ``3.0.20230403-0``,  ``3.0-0``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends on openjdk: ``>=8``
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

    pixi global install biotransformer

to add into an existing workspace instead, run::

    pixi add biotransformer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biotransformer

Alternatively, to install into a new environment, run::

    conda create -n envname biotransformer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biotransformer:<tag>

(see `biotransformer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biotransformer| image:: https://img.shields.io/conda/dn/bioconda/biotransformer.svg?style=flat
   :target: https://anaconda.org/bioconda/biotransformer
   :alt:   (downloads)
.. |docker_biotransformer| image:: https://quay.io/repository/biocontainers/biotransformer/status
   :target: https://quay.io/repository/biocontainers/biotransformer
.. _`biotransformer/tags`: https://quay.io/repository/biocontainers/biotransformer?tab=tags


.. raw:: html

    <script>
        var package = "biotransformer";
        var versions = ["3.0.20230403","3.0","1.1.5","1.1.5","1.1.5"];
    </script>





Notes
-----
Biotransformer is Java program that comes with a custom wrapper python script.
This python wrapper is called \"biotransformer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"biotransformer \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotransformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotransformer/README.html