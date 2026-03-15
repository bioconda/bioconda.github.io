:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignstats'
.. highlight: bash

alignstats
==========

.. conda:recipe:: alignstats
   :replaces_section_title:
   :noindex:

   Comprehensive alignment\, whole\-genome coverage\, and capture coverage statistics.

   :homepage: https://github.com/jfarek/alignstats
   :license: BSD-3-Clause
   :recipe: /`alignstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats/meta.yaml>`_

   


.. conda:package:: alignstats

   |downloads_alignstats| |docker_alignstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11-0</code>,  <code>0.10-3</code>,  <code>0.10-2</code>,  <code>0.10-1</code>,  <code>0.10-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9-0</code>,  </span></summary>
      

      ``0.11-0``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.5-1``,  ``0.5-0``,  ``0.3-1``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>1.4``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libgcc: ``>=13``

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

    pixi global install alignstats

to add into an existing workspace instead, run::

    pixi add alignstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alignstats

Alternatively, to install into a new environment, run::

    conda create -n envname alignstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alignstats:<tag>

(see `alignstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alignstats| image:: https://img.shields.io/conda/dn/bioconda/alignstats.svg?style=flat
   :target: https://anaconda.org/bioconda/alignstats
   :alt:   (downloads)
.. |docker_alignstats| image:: https://quay.io/repository/biocontainers/alignstats/status
   :target: https://quay.io/repository/biocontainers/alignstats
.. _`alignstats/tags`: https://quay.io/repository/biocontainers/alignstats?tab=tags


.. raw:: html

    <script>
        var package = "alignstats";
        var versions = ["0.11","0.10","0.10","0.10","0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignstats/README.html