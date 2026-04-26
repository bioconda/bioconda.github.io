:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoq'
.. highlight: bash

nanoq
=====

.. conda:recipe:: nanoq
   :replaces_section_title:
   :noindex:

   Ultra\-fast quality control and summary reports for nanopore reads

   :homepage: https://github.com/esteinig/nanoq
   :license: MIT
   :recipe: /`nanoq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq/meta.yaml>`_

   


.. conda:package:: nanoq

   |downloads_nanoq| |docker_nanoq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-4</code>,  <code>0.10.0-3</code>,  <code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.6-1</code>,  <code>0.8.6-0</code>,  </span></summary>
      

      ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install nanoq

to add into an existing workspace instead, run::

    pixi add nanoq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanoq

Alternatively, to install into a new environment, run::

    conda create -n envname nanoq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanoq:<tag>

(see `nanoq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanoq| image:: https://img.shields.io/conda/dn/bioconda/nanoq.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoq
   :alt:   (downloads)
.. |docker_nanoq| image:: https://quay.io/repository/biocontainers/nanoq/status
   :target: https://quay.io/repository/biocontainers/nanoq
.. _`nanoq/tags`: https://quay.io/repository/biocontainers/nanoq?tab=tags


.. raw:: html

    <script>
        var package = "nanoq";
        var versions = ["0.10.0","0.10.0","0.10.0","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoq/README.html