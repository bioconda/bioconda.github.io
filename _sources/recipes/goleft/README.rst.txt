:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goleft'
.. highlight: bash

goleft
======

.. conda:recipe:: goleft
   :replaces_section_title:
   :noindex:

   goleft is a collection of bioinformatics tools distributed under MIT license in a single static binary.

   :homepage: https://github.com/brentp/goleft
   :documentation: https://github.com/brentp/goleft/blob/v0.2.6/README.md
   
   :license: MIT / MIT
   :recipe: /`goleft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goleft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goleft/meta.yaml>`_

   


.. conda:package:: goleft

   |downloads_goleft| |docker_goleft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.0-0</code>,  <code>0.1.18-1</code>,  <code>0.1.18-0</code>,  <code>0.1.17-0</code>,  <code>0.1.16-1</code>,  </span></summary>
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.0-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.14-0``,  ``0.1.13-1``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on samtools: 

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

    pixi global install goleft

to add into an existing workspace instead, run::

    pixi add goleft

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install goleft

Alternatively, to install into a new environment, run::

    conda create -n envname goleft

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/goleft:<tag>

(see `goleft/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_goleft| image:: https://img.shields.io/conda/dn/bioconda/goleft.svg?style=flat
   :target: https://anaconda.org/bioconda/goleft
   :alt:   (downloads)
.. |docker_goleft| image:: https://quay.io/repository/biocontainers/goleft/status
   :target: https://quay.io/repository/biocontainers/goleft
.. _`goleft/tags`: https://quay.io/repository/biocontainers/goleft?tab=tags


.. raw:: html

    <script>
        var package = "goleft";
        var versions = ["0.2.6","0.2.6","0.2.4","0.2.4","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goleft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goleft/README.html