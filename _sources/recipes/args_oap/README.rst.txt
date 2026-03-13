:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'args_oap'
.. highlight: bash

args_oap
========

.. conda:recipe:: args_oap
   :replaces_section_title:
   :noindex:

   ARGs\-OAP\: Online Analysis Pipeline for Antibiotic Resistance Genes Detection from Metagenomic Data Using an Integrated Structured ARG Database

   :homepage: https://github.com/xinehc/args_oap
   :license: MIT / MIT
   :recipe: /`args_oap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/args_oap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/args_oap/meta.yaml>`_

   


.. conda:package:: args_oap

   |downloads_args_oap| |docker_args_oap|

   :versions:
      
      

      ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``

      

   
   :depends on blast: ``>=2.12``
   :depends on bwa: ``>=0.7.17``
   :depends on diamond: ``>=2.0.15``
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.15``

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

    pixi global install args_oap

to add into an existing workspace instead, run::

    pixi add args_oap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install args_oap

Alternatively, to install into a new environment, run::

    conda create -n envname args_oap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/args_oap:<tag>

(see `args_oap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_args_oap| image:: https://img.shields.io/conda/dn/bioconda/args_oap.svg?style=flat
   :target: https://anaconda.org/bioconda/args_oap
   :alt:   (downloads)
.. |docker_args_oap| image:: https://quay.io/repository/biocontainers/args_oap/status
   :target: https://quay.io/repository/biocontainers/args_oap
.. _`args_oap/tags`: https://quay.io/repository/biocontainers/args_oap?tab=tags


.. raw:: html

    <script>
        var package = "args_oap";
        var versions = ["3.2.4","3.2.3","3.2.2","3.2.1","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/args_oap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/args_oap/README.html