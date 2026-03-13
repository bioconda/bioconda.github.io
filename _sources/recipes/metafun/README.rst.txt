:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metafun'
.. highlight: bash

metafun
=======

.. conda:recipe:: metafun
   :replaces_section_title:
   :noindex:

   Scalable and agile analysis pipeline for metagenomic and comparative genomic analysis

   :homepage: https://github.com/aababc1/metaFun
   :documentation: https://metafun-doc.readthedocs.io/
   
   :license: MIT
   :recipe: /`metafun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun/meta.yaml>`_

   metaFun is a comprehensive pipeline for metagenomic analysis including quality control\, assembly\, binning\, taxonomy profiling\, and functional analysis. Version 1.0.0 adds WMS\_STRAIN module for strain\-level microbial diversity analysis.


.. conda:package:: metafun

   |downloads_metafun| |docker_metafun|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends on apptainer: ``1.3.0.*``
   :depends on dash: ``2.17.1.*``
   :depends on dash-bootstrap-components: 
   :depends on dash-core-components: 
   :depends on dash-daq: 
   :depends on dash-html-components: 
   :depends on dash-table: 
   :depends on nextflow: ``24.04.2.*``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2.0``
   :depends on plotly: ``>=5.0``
   :depends on python: ``>=3.10``
   :depends on squashfuse: 
   :depends on sylph: ``0.6.1.*``
   :depends on tqdm: 

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

    pixi global install metafun

to add into an existing workspace instead, run::

    pixi add metafun

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metafun

Alternatively, to install into a new environment, run::

    conda create -n envname metafun

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metafun:<tag>

(see `metafun/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metafun| image:: https://img.shields.io/conda/dn/bioconda/metafun.svg?style=flat
   :target: https://anaconda.org/bioconda/metafun
   :alt:   (downloads)
.. |docker_metafun| image:: https://quay.io/repository/biocontainers/metafun/status
   :target: https://quay.io/repository/biocontainers/metafun
.. _`metafun/tags`: https://quay.io/repository/biocontainers/metafun?tab=tags


.. raw:: html

    <script>
        var package = "metafun";
        var versions = ["1.0.0","0.3.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metafun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metafun/README.html