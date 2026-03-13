:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phyext2'
.. highlight: bash

r-phyext2
=========

.. conda:recipe:: r-phyext2
   :replaces_section_title:
   :noindex:

   Based on \(but not identical to\) the no\-longer\-maintained package \'phyext\'\, provides enhancements to \'phylobase\' classes\, specifically for use by package \'SigTree\'\; provides classes and methods which help users manipulate branch\-annotated trees \(as in \'SigTree\'\)\; also provides support for a few other extra features.

   :homepage: https://CRAN.R-project.org/package=phyext2
   :license: GPL3 / GPL-3
   :recipe: /`r-phyext2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2/meta.yaml>`_

   


.. conda:package:: r-phyext2

   |downloads_r-phyext2| |docker_r-phyext2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.4-11</code>,  <code>0.0.4-10</code>,  <code>0.0.4-9</code>,  <code>0.0.4-8</code>,  <code>0.0.4-7</code>,  <code>0.0.4-6</code>,  <code>0.0.4-5</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  </span></summary>
      

      ``0.0.4-11``,  ``0.0.4-10``,  ``0.0.4-9``,  ``0.0.4-8``,  ``0.0.4-7``,  ``0.0.4-6``,  ``0.0.4-5``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-phylobase: 

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

    pixi global install r-phyext2

to add into an existing workspace instead, run::

    pixi add r-phyext2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-phyext2

Alternatively, to install into a new environment, run::

    conda create -n envname r-phyext2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-phyext2:<tag>

(see `r-phyext2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-phyext2| image:: https://img.shields.io/conda/dn/bioconda/r-phyext2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phyext2
   :alt:   (downloads)
.. |docker_r-phyext2| image:: https://quay.io/repository/biocontainers/r-phyext2/status
   :target: https://quay.io/repository/biocontainers/r-phyext2
.. _`r-phyext2/tags`: https://quay.io/repository/biocontainers/r-phyext2?tab=tags


.. raw:: html

    <script>
        var package = "r-phyext2";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phyext2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phyext2/README.html