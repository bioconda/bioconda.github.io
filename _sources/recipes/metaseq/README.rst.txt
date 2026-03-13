:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaseq'
.. highlight: bash

metaseq
=======

.. conda:recipe:: metaseq
   :replaces_section_title:
   :noindex:

   Framework for integrated analysis and plotting of ChIP\/RIP\/RNA\/\*\-seq data.

   :homepage: http://github.com/daler/metaseq
   :license: MIT / MIT
   :recipe: /`metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq/meta.yaml>`_

   


.. conda:package:: metaseq

   |downloads_metaseq| |docker_metaseq|

   :versions:
      
      

      ``0.5.6-5``,  ``0.5.6-4``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-0``

      

   
   :depends on biopython: 
   :depends on bx-python: ``>=0.7.1``
   :depends on fisher: 
   :depends on gffutils: ``>=0.8.2``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on matplotlib: ``>=1.3.1``
   :depends on numpy: ``>=1.8.0``
   :depends on pandas: ``>=0.13.1``
   :depends on pybedtools: ``>=0.6.6``
   :depends on pysam: ``>=0.7``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on pyyaml: ``>=3.10``
   :depends on scikit-learn: 
   :depends on scipy: ``>=0.10.1``

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

    pixi global install metaseq

to add into an existing workspace instead, run::

    pixi add metaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaseq

Alternatively, to install into a new environment, run::

    conda create -n envname metaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaseq:<tag>

(see `metaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaseq| image:: https://img.shields.io/conda/dn/bioconda/metaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/metaseq
   :alt:   (downloads)
.. |docker_metaseq| image:: https://quay.io/repository/biocontainers/metaseq/status
   :target: https://quay.io/repository/biocontainers/metaseq
.. _`metaseq/tags`: https://quay.io/repository/biocontainers/metaseq?tab=tags


.. raw:: html

    <script>
        var package = "metaseq";
        var versions = ["0.5.6","0.5.6","0.5.6","0.5.6","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq/README.html