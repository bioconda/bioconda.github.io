:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogist'
.. highlight: bash

pathogist
=========

.. conda:recipe:: pathogist
   :replaces_section_title:
   :noindex:

   Calibrated multi\-criterion genomic analysis for public health microbiology

   :homepage: https://github.com/WGS-TB/PathOGiST
   :license: GPL-3.0
   :recipe: /`pathogist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist/meta.yaml>`_

   


.. conda:package:: pathogist

   |downloads_pathogist| |docker_pathogist|

   :versions:
      
      

      ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2.3-0``

      

   
   :depends on coincbc: ``>=2.9.9``
   :depends on khmer: 
   :depends on kwip: 
   :depends on matplotlib: 
   :depends on mentalist: 
   :depends on networkx: 
   :depends on numpy: ``>=1.15.1``
   :depends on pandas: ``>=0.23.4``
   :depends on prince: 
   :depends on pulp: ``>=1.6.8``
   :depends on python: 
   :depends on pyyaml: ``>=3.13``
   :depends on scikit-learn: ``>=0.19.1``
   :depends on scipy: ``>=1.1.0``
   :depends on snippy: ``3.2``
   :depends on spotyping3: 
   :depends on vcflib: 

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

    pixi global install pathogist

to add into an existing workspace instead, run::

    pixi add pathogist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathogist

Alternatively, to install into a new environment, run::

    conda create -n envname pathogist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathogist:<tag>

(see `pathogist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathogist| image:: https://img.shields.io/conda/dn/bioconda/pathogist.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogist
   :alt:   (downloads)
.. |docker_pathogist| image:: https://quay.io/repository/biocontainers/pathogist/status
   :target: https://quay.io/repository/biocontainers/pathogist
.. _`pathogist/tags`: https://quay.io/repository/biocontainers/pathogist?tab=tags


.. raw:: html

    <script>
        var package = "pathogist";
        var versions = ["0.3.6","0.3.6","0.3.2","0.3.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogist/README.html