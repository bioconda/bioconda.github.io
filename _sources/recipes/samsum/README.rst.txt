:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsum'
.. highlight: bash

samsum
======

.. conda:recipe:: samsum
   :replaces_section_title:
   :noindex:

   A light\-weight python package for summarizing sequence coverage from SAM and BAM files.

   :homepage: https://github.com/hallamlab/samsum
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`samsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum/meta.yaml>`_

   


.. conda:package:: samsum

   |downloads_samsum| |docker_samsum|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-7</code>,  <code>0.1.4-6</code>,  <code>0.1.4-5</code>,  <code>0.1.4-4</code>,  <code>0.1.4-3</code>,  <code>0.1.4-2</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.2-2</code>,  </span></summary>
      

      ``0.1.4-7``,  ``0.1.4-6``,  ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pyfastx: 
   :depends on pytest: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install samsum

to add into an existing workspace instead, run::

    pixi add samsum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samsum

Alternatively, to install into a new environment, run::

    conda create -n envname samsum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samsum:<tag>

(see `samsum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samsum| image:: https://img.shields.io/conda/dn/bioconda/samsum.svg?style=flat
   :target: https://anaconda.org/bioconda/samsum
   :alt:   (downloads)
.. |docker_samsum| image:: https://quay.io/repository/biocontainers/samsum/status
   :target: https://quay.io/repository/biocontainers/samsum
.. _`samsum/tags`: https://quay.io/repository/biocontainers/samsum?tab=tags


.. raw:: html

    <script>
        var package = "samsum";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsum/README.html