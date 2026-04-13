:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlrho'
.. highlight: bash

mlrho
=====

.. conda:recipe:: mlrho
   :replaces_section_title:
   :noindex:

   Takes as input a file with assembled reads from a single diploid individual and returns maximum likelihood estimates of the population mutation rate\, \, the sequencing error \, the zygosity correlation\, and the population recombination rate.

   :homepage: http://guanine.evolbio.mpg.de/mlRho/
   :license: file
   :recipe: /`mlrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho/meta.yaml>`_
   :links: biotools: :biotools:`mlRho`, doi: :doi:`10.1111/j.1365-294X.2009.04482.x`

   


.. conda:package:: mlrho

   |downloads_mlrho| |docker_mlrho|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9-9</code>,  <code>2.9-8</code>,  <code>2.9-7</code>,  <code>2.9-6</code>,  <code>2.9-5</code>,  <code>2.9-4</code>,  <code>2.9-3</code>,  <code>2.9-2</code>,  <code>2.9-1</code>,  </span></summary>
      

      ``2.9-9``,  ``2.9-8``,  ``2.9-7``,  ``2.9-6``,  ``2.9-5``,  ``2.9-4``,  ``2.9-3``,  ``2.9-2``,  ``2.9-1``,  ``2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``

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

    pixi global install mlrho

to add into an existing workspace instead, run::

    pixi add mlrho

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mlrho

Alternatively, to install into a new environment, run::

    conda create -n envname mlrho

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mlrho:<tag>

(see `mlrho/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mlrho| image:: https://img.shields.io/conda/dn/bioconda/mlrho.svg?style=flat
   :target: https://anaconda.org/bioconda/mlrho
   :alt:   (downloads)
.. |docker_mlrho| image:: https://quay.io/repository/biocontainers/mlrho/status
   :target: https://quay.io/repository/biocontainers/mlrho
.. _`mlrho/tags`: https://quay.io/repository/biocontainers/mlrho?tab=tags


.. raw:: html

    <script>
        var package = "mlrho";
        var versions = ["2.9","2.9","2.9","2.9","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlrho/README.html