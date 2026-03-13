:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai-wrapper'
.. highlight: bash

spliceai-wrapper
================

.. conda:recipe:: spliceai-wrapper
   :replaces_section_title:
   :noindex:

   A caching wrapper for Illumina SpliceAI.

   :homepage: https://github.com/bihealth/spliceai-wrapper
   :license: MIT / MIT
   :recipe: /`spliceai-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper/meta.yaml>`_

   


.. conda:package:: spliceai-wrapper

   |downloads_spliceai-wrapper| |docker_spliceai-wrapper|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bcftools: 
   :depends on logzero: 
   :depends on ncls: 
   :depends on pysam: 
   :depends on spliceai: 
   :depends on tqdm: 
   :depends on xdg: 

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

    pixi global install spliceai-wrapper

to add into an existing workspace instead, run::

    pixi add spliceai-wrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spliceai-wrapper

Alternatively, to install into a new environment, run::

    conda create -n envname spliceai-wrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spliceai-wrapper:<tag>

(see `spliceai-wrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spliceai-wrapper| image:: https://img.shields.io/conda/dn/bioconda/spliceai-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai-wrapper
   :alt:   (downloads)
.. |docker_spliceai-wrapper| image:: https://quay.io/repository/biocontainers/spliceai-wrapper/status
   :target: https://quay.io/repository/biocontainers/spliceai-wrapper
.. _`spliceai-wrapper/tags`: https://quay.io/repository/biocontainers/spliceai-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "spliceai-wrapper";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai-wrapper/README.html