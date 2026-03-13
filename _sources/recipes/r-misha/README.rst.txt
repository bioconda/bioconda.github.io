:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-misha'
.. highlight: bash

r-misha
=======

.. conda:recipe:: r-misha
   :replaces_section_title:
   :noindex:

   Toolkit for analysis of genomic data

   :homepage: https://tanaylab.github.io/misha/index.html
   :license: GPL-2
   :recipe: /`r-misha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha/meta.yaml>`_

   


.. conda:package:: r-misha

   |downloads_r-misha| |docker_r-misha|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-8</code>,  <code>4.1.0-7</code>,  <code>4.1.0-6</code>,  <code>4.1.0-5</code>,  <code>4.1.0-4</code>,  <code>4.1.0-3</code>,  <code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  </span></summary>
      

      ``4.1.0-8``,  ``4.1.0-7``,  ``4.1.0-6``,  ``4.1.0-5``,  ``4.1.0-4``,  ``4.1.0-3``,  ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.11-0``,  ``4.0.10-1``,  ``4.0.10-0``,  ``4.0.6-1``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-1``,  ``3.7.1-1``,  ``3.7.1-0``,  ``3.7.0-1``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-misha

to add into an existing workspace instead, run::

    pixi add r-misha

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-misha

Alternatively, to install into a new environment, run::

    conda create -n envname r-misha

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-misha:<tag>

(see `r-misha/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-misha| image:: https://img.shields.io/conda/dn/bioconda/r-misha.svg?style=flat
   :target: https://anaconda.org/bioconda/r-misha
   :alt:   (downloads)
.. |docker_r-misha| image:: https://quay.io/repository/biocontainers/r-misha/status
   :target: https://quay.io/repository/biocontainers/r-misha
.. _`r-misha/tags`: https://quay.io/repository/biocontainers/r-misha?tab=tags


.. raw:: html

    <script>
        var package = "r-misha";
        var versions = ["4.1.0","4.1.0","4.1.0","4.1.0","4.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-misha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-misha/README.html