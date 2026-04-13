:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ccube'
.. highlight: bash

r-ccube
=======

.. conda:recipe:: r-ccube
   :replaces_section_title:
   :noindex:

   R package for clustering and estimating cancer cell fractions \(CCF\) of somatic variants \(SNVs\/SVs\) from bulk whole genome\/exome data.

   :homepage: https://github.com/keyuan/ccube
   :license: GPL3 / GPL-3
   :recipe: /`r-ccube <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccube>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccube/meta.yaml>`_

   


.. conda:package:: r-ccube

   |downloads_r-ccube| |docker_r-ccube|

   :versions:
      
      

      ``1.0_beta.1-7``,  ``1.0_beta.1-6``,  ``1.0_beta.1-5``,  ``1.0_beta.1-4``,  ``1.0_beta.1-3``,  ``1.0_beta.1-2``,  ``1.0_beta.1-1``,  ``1.0_beta.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-matrix: 
   :depends on r-pracma: 

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

    pixi global install r-ccube

to add into an existing workspace instead, run::

    pixi add r-ccube

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ccube

Alternatively, to install into a new environment, run::

    conda create -n envname r-ccube

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ccube:<tag>

(see `r-ccube/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ccube| image:: https://img.shields.io/conda/dn/bioconda/r-ccube.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ccube
   :alt:   (downloads)
.. |docker_r-ccube| image:: https://quay.io/repository/biocontainers/r-ccube/status
   :target: https://quay.io/repository/biocontainers/r-ccube
.. _`r-ccube/tags`: https://quay.io/repository/biocontainers/r-ccube?tab=tags


.. raw:: html

    <script>
        var package = "r-ccube";
        var versions = ["1.0_beta.1","1.0_beta.1","1.0_beta.1","1.0_beta.1","1.0_beta.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ccube/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ccube/README.html