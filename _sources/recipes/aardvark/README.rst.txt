:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aardvark'
.. highlight: bash

aardvark
========

.. conda:recipe:: aardvark
   :replaces_section_title:
   :noindex:

   A tool for sniffing out the differences in vari\-Ants.

   :homepage: https://github.com/PacificBiosciences/aardvark
   :license: MIT / MIT
   :recipe: /`aardvark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aardvark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aardvark/meta.yaml>`_

   


.. conda:package:: aardvark

   |downloads_aardvark| |docker_aardvark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  </span></summary>
      

      ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install aardvark

to add into an existing workspace instead, run::

    pixi add aardvark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aardvark

Alternatively, to install into a new environment, run::

    conda create -n envname aardvark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aardvark:<tag>

(see `aardvark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aardvark| image:: https://img.shields.io/conda/dn/bioconda/aardvark.svg?style=flat
   :target: https://anaconda.org/bioconda/aardvark
   :alt:   (downloads)
.. |docker_aardvark| image:: https://quay.io/repository/biocontainers/aardvark/status
   :target: https://quay.io/repository/biocontainers/aardvark
.. _`aardvark/tags`: https://quay.io/repository/biocontainers/aardvark?tab=tags


.. raw:: html

    <script>
        var package = "aardvark";
        var versions = ["0.10.4","0.10.3","0.10.2","0.10.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aardvark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aardvark/README.html