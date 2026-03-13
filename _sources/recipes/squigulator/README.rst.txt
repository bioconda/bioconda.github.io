:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squigulator'
.. highlight: bash

squigulator
===========

.. conda:recipe:: squigulator
   :replaces_section_title:
   :noindex:

   A tool for simulating nanopore raw signal data

   :homepage: https://github.com/hasindu2008/squigulator
   :license: MIT / MIT
   :recipe: /`squigulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator/meta.yaml>`_

   squigulator is a tool for simulating nanopore raw signal data.


.. conda:package:: squigulator

   |downloads_squigulator| |docker_squigulator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install squigulator

to add into an existing workspace instead, run::

    pixi add squigulator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install squigulator

Alternatively, to install into a new environment, run::

    conda create -n envname squigulator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/squigulator:<tag>

(see `squigulator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_squigulator| image:: https://img.shields.io/conda/dn/bioconda/squigulator.svg?style=flat
   :target: https://anaconda.org/bioconda/squigulator
   :alt:   (downloads)
.. |docker_squigulator| image:: https://quay.io/repository/biocontainers/squigulator/status
   :target: https://quay.io/repository/biocontainers/squigulator
.. _`squigulator/tags`: https://quay.io/repository/biocontainers/squigulator?tab=tags


.. raw:: html

    <script>
        var package = "squigulator";
        var versions = ["0.5.0","0.4.0","0.4.0","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squigulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squigulator/README.html