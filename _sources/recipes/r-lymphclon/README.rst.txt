:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lymphclon'
.. highlight: bash

r-lymphclon
===========

.. conda:recipe:: r-lymphclon
   :replaces_section_title:
   :noindex:

   We provide a clonality score estimator that takes full advantage of the multi\-biological\-replicate structure of modern sequencing experiments\; it specifically takes into account the reality that\, typically\, the clonal coverage is well below 0.1\%.

   :homepage: https://CRAN.R-project.org/package=lymphclon
   :license: LGPL / LGPL-2
   :recipe: /`r-lymphclon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lymphclon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lymphclon/meta.yaml>`_

   


.. conda:package:: r-lymphclon

   |downloads_r-lymphclon| |docker_r-lymphclon|

   :versions:
      
      

      ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-corpcor: 
   :depends on r-expm: 
   :depends on r-mass: 

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

    pixi global install r-lymphclon

to add into an existing workspace instead, run::

    pixi add r-lymphclon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-lymphclon

Alternatively, to install into a new environment, run::

    conda create -n envname r-lymphclon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-lymphclon:<tag>

(see `r-lymphclon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-lymphclon| image:: https://img.shields.io/conda/dn/bioconda/r-lymphclon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lymphclon
   :alt:   (downloads)
.. |docker_r-lymphclon| image:: https://quay.io/repository/biocontainers/r-lymphclon/status
   :target: https://quay.io/repository/biocontainers/r-lymphclon
.. _`r-lymphclon/tags`: https://quay.io/repository/biocontainers/r-lymphclon?tab=tags


.. raw:: html

    <script>
        var package = "r-lymphclon";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lymphclon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lymphclon/README.html