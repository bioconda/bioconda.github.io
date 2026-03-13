:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lisi'
.. highlight: bash

r-lisi
======

.. conda:recipe:: r-lisi
   :replaces_section_title:
   :noindex:

   A method to assess how well mixed cells with different labels are in single cell RNAseq.

   :homepage: https://github.com/immunogenomics/LISI
   :license: GPL3 / GPL-3
   :recipe: /`r-lisi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi/meta.yaml>`_

   


.. conda:package:: r-lisi

   |downloads_r-lisi| |docker_r-lisi|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rann: 
   :depends on r-rcpparmadillo: 
   :depends on r-testthat: 
   :depends on r-tidyr: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install r-lisi

to add into an existing workspace instead, run::

    pixi add r-lisi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-lisi

Alternatively, to install into a new environment, run::

    conda create -n envname r-lisi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-lisi:<tag>

(see `r-lisi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-lisi| image:: https://img.shields.io/conda/dn/bioconda/r-lisi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lisi
   :alt:   (downloads)
.. |docker_r-lisi| image:: https://quay.io/repository/biocontainers/r-lisi/status
   :target: https://quay.io/repository/biocontainers/r-lisi
.. _`r-lisi/tags`: https://quay.io/repository/biocontainers/r-lisi?tab=tags


.. raw:: html

    <script>
        var package = "r-lisi";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lisi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lisi/README.html