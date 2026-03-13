:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-efglmh'
.. highlight: bash

r-efglmh
========

.. conda:recipe:: r-efglmh
   :replaces_section_title:
   :noindex:

   Functions For Working With Microhaps for EFGL

   :homepage: https://github.com/delomast/EFGLmh
   :license: MIT
   :recipe: /`r-efglmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-efglmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-efglmh/meta.yaml>`_

   Written to work with microhaps and SNPs \(which are just short microhaps\). 
   More generally\, will function with codominant\, diploid genotypes.
   Uses \"Progeny\-style\" \(and FishGen\-style\) inputs. 
   Performs basic manipulations\, data summaries\, and exporting data in
   formats for other packages\/programs.



.. conda:package:: r-efglmh

   |downloads_r-efglmh| |docker_r-efglmh|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-readr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install r-efglmh

to add into an existing workspace instead, run::

    pixi add r-efglmh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-efglmh

Alternatively, to install into a new environment, run::

    conda create -n envname r-efglmh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-efglmh:<tag>

(see `r-efglmh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-efglmh| image:: https://img.shields.io/conda/dn/bioconda/r-efglmh.svg?style=flat
   :target: https://anaconda.org/bioconda/r-efglmh
   :alt:   (downloads)
.. |docker_r-efglmh| image:: https://quay.io/repository/biocontainers/r-efglmh/status
   :target: https://quay.io/repository/biocontainers/r-efglmh
.. _`r-efglmh/tags`: https://quay.io/repository/biocontainers/r-efglmh?tab=tags


.. raw:: html

    <script>
        var package = "r-efglmh";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-efglmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-efglmh/README.html