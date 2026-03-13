:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'madre'
.. highlight: bash

madre
=====

.. conda:recipe:: madre
   :replaces_section_title:
   :noindex:

   Strain\-level metagenomic classification with Metagenome Assembly driven Database Reduction approach.

   :homepage: https://github.com/lbcb-sci/MADRe
   :documentation: https://github.com/lbcb-sci/MADRe/blob/v0.0.5/README.md
   
   :license: MIT / MIT
   :recipe: /`madre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/madre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/madre/meta.yaml>`_

   


.. conda:package:: madre

   |downloads_madre| |docker_madre|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on flye: 
   :depends on hairsplitter: 
   :depends on kraken2: 
   :depends on metamdbg: 
   :depends on minimap2: ``>=2.28``
   :depends on myloasm: 
   :depends on python: ``>=3``
   :depends on scikit-learn: 
   :depends on seqkit: 

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

    pixi global install madre

to add into an existing workspace instead, run::

    pixi add madre

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install madre

Alternatively, to install into a new environment, run::

    conda create -n envname madre

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/madre:<tag>

(see `madre/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_madre| image:: https://img.shields.io/conda/dn/bioconda/madre.svg?style=flat
   :target: https://anaconda.org/bioconda/madre
   :alt:   (downloads)
.. |docker_madre| image:: https://quay.io/repository/biocontainers/madre/status
   :target: https://quay.io/repository/biocontainers/madre
.. _`madre/tags`: https://quay.io/repository/biocontainers/madre?tab=tags


.. raw:: html

    <script>
        var package = "madre";
        var versions = ["0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/madre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/madre/README.html