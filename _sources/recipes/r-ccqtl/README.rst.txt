:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ccqtl'
.. highlight: bash

r-ccqtl
=======

.. conda:recipe:: r-ccqtl
   :replaces_section_title:
   :noindex:

   CCQTL is a wrapper around the R\/qtl2 \(Broman et al\, Genetics 2019 10.1534\/genetics.118.301595\) functions\, with hard\-coded parameters tailored for QTL mapping in the Collaborative Cross.

   :homepage: https://gitlab.pasteur.fr/cc-qtl/ccqtl
   :license: GPL3 / GPL3
   :recipe: /`r-ccqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccqtl/meta.yaml>`_

   


.. conda:package:: r-ccqtl

   |downloads_r-ccqtl| |docker_r-ccqtl|

   :versions:
      
      

      ``0.0.1_beta.2-1``,  ``0.0.1_beta.2-0``,  ``0.0.1_beta.1-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-argparse: ``>=2.2.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-dplyr: 
   :depends on r-gtools: 
   :depends on r-qtl2: ``0.30``

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

    pixi global install r-ccqtl

to add into an existing workspace instead, run::

    pixi add r-ccqtl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ccqtl

Alternatively, to install into a new environment, run::

    conda create -n envname r-ccqtl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ccqtl:<tag>

(see `r-ccqtl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ccqtl| image:: https://img.shields.io/conda/dn/bioconda/r-ccqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ccqtl
   :alt:   (downloads)
.. |docker_r-ccqtl| image:: https://quay.io/repository/biocontainers/r-ccqtl/status
   :target: https://quay.io/repository/biocontainers/r-ccqtl
.. _`r-ccqtl/tags`: https://quay.io/repository/biocontainers/r-ccqtl?tab=tags


.. raw:: html

    <script>
        var package = "r-ccqtl";
        var versions = ["0.0.1_beta.2","0.0.1_beta.2","0.0.1_beta.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ccqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ccqtl/README.html