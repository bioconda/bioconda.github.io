:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'easel'
.. highlight: bash

easel
=====

.. conda:recipe:: easel
   :replaces_section_title:
   :noindex:

   Easel is an ANSI C code library for computational analysis of biological sequences using probabilistic models.

   :homepage: https://github.com/EddyRivasLab/easel
   :license: BSD / BSD
   :recipe: /`easel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easel/meta.yaml>`_

   


.. conda:package:: easel

   |downloads_easel| |docker_easel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.49-3</code>,  <code>0.49-2</code>,  <code>0.49-1</code>,  <code>0.49-0</code>,  <code>0.48-3</code>,  <code>0.48-2</code>,  <code>0.48-1</code>,  <code>0.48-0</code>,  <code>0.47-0</code>,  </span></summary>
      

      ``0.49-3``,  ``0.49-2``,  ``0.49-1``,  ``0.49-0``,  ``0.48-3``,  ``0.48-2``,  ``0.48-1``,  ``0.48-0``,  ``0.47-0``,  ``0.45-1``,  ``0.45-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

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

    pixi global install easel

to add into an existing workspace instead, run::

    pixi add easel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install easel

Alternatively, to install into a new environment, run::

    conda create -n envname easel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/easel:<tag>

(see `easel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_easel| image:: https://img.shields.io/conda/dn/bioconda/easel.svg?style=flat
   :target: https://anaconda.org/bioconda/easel
   :alt:   (downloads)
.. |docker_easel| image:: https://quay.io/repository/biocontainers/easel/status
   :target: https://quay.io/repository/biocontainers/easel
.. _`easel/tags`: https://quay.io/repository/biocontainers/easel?tab=tags


.. raw:: html

    <script>
        var package = "easel";
        var versions = ["0.49","0.49","0.49","0.49","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/easel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/easel/README.html