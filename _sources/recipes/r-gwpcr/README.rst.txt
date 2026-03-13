:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gwpcr'
.. highlight: bash

r-gwpcr
=======

.. conda:recipe:: r-gwpcr
   :replaces_section_title:
   :noindex:

   Implements the necessary distributions and parameter estimation procedures for a model of amplification and high\-troughput sequencing. The model is based on a mechanistic model of PCR amplification as a Galton\-Watson branching process\, and on Poissonan sampling to model high\-throughput sequencing.

   :homepage: http://www.cibiv.at/~pflug_/trumicount
   :license: AGPLv3
   :recipe: /`r-gwpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr/meta.yaml>`_

   


.. conda:package:: r-gwpcr

   |downloads_r-gwpcr| |docker_r-gwpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-6</code>,  <code>1.0.4-5</code>,  <code>1.0.4-4</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.4-6``,  ``1.0.4-5``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0-0``,  ``0.9.11-2``,  ``0.9.11-1``,  ``0.9.11-0``,  ``0.9.10-4``,  ``0.9.10-3``,  ``0.9.10-2``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on r-akima: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-statmod: 

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

    pixi global install r-gwpcr

to add into an existing workspace instead, run::

    pixi add r-gwpcr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-gwpcr

Alternatively, to install into a new environment, run::

    conda create -n envname r-gwpcr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-gwpcr:<tag>

(see `r-gwpcr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-gwpcr| image:: https://img.shields.io/conda/dn/bioconda/r-gwpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gwpcr
   :alt:   (downloads)
.. |docker_r-gwpcr| image:: https://quay.io/repository/biocontainers/r-gwpcr/status
   :target: https://quay.io/repository/biocontainers/r-gwpcr
.. _`r-gwpcr/tags`: https://quay.io/repository/biocontainers/r-gwpcr?tab=tags


.. raw:: html

    <script>
        var package = "r-gwpcr";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gwpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gwpcr/README.html