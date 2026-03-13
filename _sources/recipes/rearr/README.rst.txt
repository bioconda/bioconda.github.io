:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rearr'
.. highlight: bash

rearr
=====

.. conda:recipe:: rearr
   :replaces_section_title:
   :noindex:

   Chimeric alignment of CRISPR\-seq

   :homepage: https://github.com/ljw20180420/rearr
   :documentation: https://ljw20180420.github.io/rearr
   
   :license: MIT / MIT
   :recipe: /`rearr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rearr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rearr/meta.yaml>`_

   rearr is a package to demultiplex and align CRISPR\-seq data.



.. conda:package:: rearr

   |downloads_rearr| |docker_rearr|

   :versions:
      
      

      ``1.0.11-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bedtools: 
   :depends on bowtie2: 
   :depends on cutadapt: 
   :depends on file: 
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on make: 
   :depends on numpy: 
   :depends on perl: 
   :depends on python: 
   :depends on samtools: 
   :depends on sed: 

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

    pixi global install rearr

to add into an existing workspace instead, run::

    pixi add rearr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rearr

Alternatively, to install into a new environment, run::

    conda create -n envname rearr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rearr:<tag>

(see `rearr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rearr| image:: https://img.shields.io/conda/dn/bioconda/rearr.svg?style=flat
   :target: https://anaconda.org/bioconda/rearr
   :alt:   (downloads)
.. |docker_rearr| image:: https://quay.io/repository/biocontainers/rearr/status
   :target: https://quay.io/repository/biocontainers/rearr
.. _`rearr/tags`: https://quay.io/repository/biocontainers/rearr?tab=tags


.. raw:: html

    <script>
        var package = "rearr";
        var versions = ["1.0.11","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rearr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rearr/README.html