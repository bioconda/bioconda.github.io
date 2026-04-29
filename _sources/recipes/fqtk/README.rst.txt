:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtk'
.. highlight: bash

fqtk
====

.. conda:recipe:: fqtk
   :replaces_section_title:
   :noindex:

   A toolkit for working with FASTQ files.

   :homepage: https://github.com/fulcrumgenomics/fqtk
   :documentation: https://github.com/fulcrumgenomics/fqtk/blob/v0.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`fqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtk/meta.yaml>`_

   


.. conda:package:: fqtk

   |downloads_fqtk| |docker_fqtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install fqtk

to add into an existing workspace instead, run::

    pixi add fqtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fqtk

Alternatively, to install into a new environment, run::

    conda create -n envname fqtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fqtk:<tag>

(see `fqtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fqtk| image:: https://img.shields.io/conda/dn/bioconda/fqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtk
   :alt:   (downloads)
.. |docker_fqtk| image:: https://quay.io/repository/biocontainers/fqtk/status
   :target: https://quay.io/repository/biocontainers/fqtk
.. _`fqtk/tags`: https://quay.io/repository/biocontainers/fqtk?tab=tags


.. raw:: html

    <script>
        var package = "fqtk";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtk/README.html