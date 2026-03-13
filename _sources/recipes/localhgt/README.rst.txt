:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'localhgt'
.. highlight: bash

localhgt
========

.. conda:recipe:: localhgt
   :replaces_section_title:
   :noindex:

   An ultrafast horizontal gene transfer detection method from large microbial communities

   :homepage: https://github.com/deepomicslab/LocalHGT
   :license: MIT
   :recipe: /`localhgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/localhgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/localhgt/meta.yaml>`_
   :links: biotools: :biotools:`localhgt`

   


.. conda:package:: localhgt

   |downloads_localhgt| |docker_localhgt|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on biopython: 
   :depends on bwa: ``>=0.7.17``
   :depends on fastp: ``>=0.23.2``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on networkx: ``>=2.6.3``
   :depends on numpy: ``<=1.24``
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.7.12``
   :depends on samtools: ``>=1.11``
   :depends on scikit-bio: ``>=0.5.6``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seqkit: ``>=2.6.1``
   :depends on typing-extensions: ``>=4.11.0``

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

    pixi global install localhgt

to add into an existing workspace instead, run::

    pixi add localhgt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install localhgt

Alternatively, to install into a new environment, run::

    conda create -n envname localhgt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/localhgt:<tag>

(see `localhgt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_localhgt| image:: https://img.shields.io/conda/dn/bioconda/localhgt.svg?style=flat
   :target: https://anaconda.org/bioconda/localhgt
   :alt:   (downloads)
.. |docker_localhgt| image:: https://quay.io/repository/biocontainers/localhgt/status
   :target: https://quay.io/repository/biocontainers/localhgt
.. _`localhgt/tags`: https://quay.io/repository/biocontainers/localhgt?tab=tags


.. raw:: html

    <script>
        var package = "localhgt";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/localhgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/localhgt/README.html