:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaseq-all'
.. highlight: bash

metaseq-all
===========

.. conda:recipe:: metaseq-all
   :replaces_section_title:
   :noindex:

   Meta\-package for metaseq including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`metaseq-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all/meta.yaml>`_

   


.. conda:package:: metaseq-all

   |downloads_metaseq-all| |docker_metaseq-all|

   :versions:
      
      

      ``0.5.6-4``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``

      

   
   :depends on bedtools: 
   :depends on metaseq: 
   :depends on samtools: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-bigbedtobed: 
   :depends on ucsc-bigwigsummary: 

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

    pixi global install metaseq-all

to add into an existing workspace instead, run::

    pixi add metaseq-all

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaseq-all

Alternatively, to install into a new environment, run::

    conda create -n envname metaseq-all

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaseq-all:<tag>

(see `metaseq-all/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaseq-all| image:: https://img.shields.io/conda/dn/bioconda/metaseq-all.svg?style=flat
   :target: https://anaconda.org/bioconda/metaseq-all
   :alt:   (downloads)
.. |docker_metaseq-all| image:: https://quay.io/repository/biocontainers/metaseq-all/status
   :target: https://quay.io/repository/biocontainers/metaseq-all
.. _`metaseq-all/tags`: https://quay.io/repository/biocontainers/metaseq-all?tab=tags


.. raw:: html

    <script>
        var package = "metaseq-all";
        var versions = ["0.5.6","0.5.6","0.5.6","0.5.6","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq-all/README.html