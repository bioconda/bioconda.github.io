:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-corncob'
.. highlight: bash

r-corncob
=========

.. conda:recipe:: r-corncob
   :replaces_section_title:
   :noindex:

   Statistical modeling for correlated count data using the beta\-binomial distribution\, described in Martin et al. \(2020\) \<doi\:10.1214\/19\-AOAS1283\>. It allows for both mean and overdispersion covariates.

   :homepage: https://github.com/bryandmartin/corncob
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-corncob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corncob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corncob/meta.yaml>`_

   


.. conda:package:: r-corncob

   |downloads_r-corncob| |docker_r-corncob|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-0</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-detectseparation: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-numderiv: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-trust: 
   :depends on r-vgam: 

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

    pixi global install r-corncob

to add into an existing workspace instead, run::

    pixi add r-corncob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-corncob

Alternatively, to install into a new environment, run::

    conda create -n envname r-corncob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-corncob:<tag>

(see `r-corncob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-corncob| image:: https://img.shields.io/conda/dn/bioconda/r-corncob.svg?style=flat
   :target: https://anaconda.org/bioconda/r-corncob
   :alt:   (downloads)
.. |docker_r-corncob| image:: https://quay.io/repository/biocontainers/r-corncob/status
   :target: https://quay.io/repository/biocontainers/r-corncob
.. _`r-corncob/tags`: https://quay.io/repository/biocontainers/r-corncob?tab=tags


.. raw:: html

    <script>
        var package = "r-corncob";
        var versions = ["0.4.2","0.4.1","0.4.1","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-corncob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-corncob/README.html