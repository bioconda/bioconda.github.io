:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isva'
.. highlight: bash

r-isva
======

.. conda:recipe:: r-isva
   :replaces_section_title:
   :noindex:

   Independent Surrogate Variable Analysis is an algorithm for feature selection in the presence of potential confounding factors \(see Teschendorff AE et al 2011\, \<doi\: 10.1093\/bioinformatics\/btr171\>\).

   :homepage: https://CRAN.R-project.org/package=isva
   :license: GPL2 / GPL-2
   :recipe: /`r-isva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva/meta.yaml>`_

   


.. conda:package:: r-isva

   |downloads_r-isva| |docker_r-isva|

   :versions:
      
      

      ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``

      

   
   :depends on bioconductor-qvalue: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fastica: 
   :depends on r-jade: 

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

    pixi global install r-isva

to add into an existing workspace instead, run::

    pixi add r-isva

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-isva

Alternatively, to install into a new environment, run::

    conda create -n envname r-isva

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-isva:<tag>

(see `r-isva/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-isva| image:: https://img.shields.io/conda/dn/bioconda/r-isva.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isva
   :alt:   (downloads)
.. |docker_r-isva| image:: https://quay.io/repository/biocontainers/r-isva/status
   :target: https://quay.io/repository/biocontainers/r-isva
.. _`r-isva/tags`: https://quay.io/repository/biocontainers/r-isva?tab=tags


.. raw:: html

    <script>
        var package = "r-isva";
        var versions = ["1.9","1.9","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isva/README.html