:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cats-rb'
.. highlight: bash

cats-rb
=======

.. conda:recipe:: cats-rb
   :replaces_section_title:
   :noindex:

   Reference\-based transcriptome assembly quality assessment tool.

   :homepage: https://github.com/bodulic/CATS-rb
   :documentation: https://github.com/bodulic/CATS-rb/blob/main/README.md
   
   :license: MIT
   :recipe: /`cats-rb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rb/meta.yaml>`_

   CATS\-rb evaluates transcriptome assemblies using the reference genome of the corresponding species.



.. conda:package:: cats-rb

   |downloads_cats-rb| |docker_cats-rb|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bash: 
   :depends on bioconductor-complexheatmap: 
   :depends on bioconductor-genomeinfodb: 
   :depends on bioconductor-genomicdistributions: 
   :depends on bioconductor-genomicranges: 
   :depends on coreutils: 
   :depends on gawk: 
   :depends on pandoc: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-egg: 
   :depends on r-ggdist: 
   :depends on r-ggplot2: 
   :depends on r-ggvenndiagram: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-rmarkdown: 
   :depends on r-upsetr: 
   :depends on sed: 
   :depends on spaln: ``>=3.0.0``

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

    pixi global install cats-rb

to add into an existing workspace instead, run::

    pixi add cats-rb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cats-rb

Alternatively, to install into a new environment, run::

    conda create -n envname cats-rb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cats-rb:<tag>

(see `cats-rb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cats-rb| image:: https://img.shields.io/conda/dn/bioconda/cats-rb.svg?style=flat
   :target: https://anaconda.org/bioconda/cats-rb
   :alt:   (downloads)
.. |docker_cats-rb| image:: https://quay.io/repository/biocontainers/cats-rb/status
   :target: https://quay.io/repository/biocontainers/cats-rb
.. _`cats-rb/tags`: https://quay.io/repository/biocontainers/cats-rb?tab=tags


.. raw:: html

    <script>
        var package = "cats-rb";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cats-rb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cats-rb/README.html