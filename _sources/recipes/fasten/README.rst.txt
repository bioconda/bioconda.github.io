:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasten'
.. highlight: bash

fasten
======

.. conda:recipe:: fasten
   :replaces_section_title:
   :noindex:

   Perform random operations on fastq files\, using unix streaming. Secure your analysis with Fasten\!

   :homepage: https://github.com/lskatz/fasten
   :license: MIT / MIT
   :recipe: /`fasten <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten/meta.yaml>`_

   


.. conda:package:: fasten

   |downloads_fasten| |docker_fasten|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0-0</code>,  <code>0.8.9-0</code>,  <code>0.8.8-0</code>,  <code>0.8.7-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-1</code>,  <code>0.8.4-0</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  </span></summary>
      

      ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.13-2``,  ``0.1.13-1``,  ``0.1.13-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install fasten

to add into an existing workspace instead, run::

    pixi add fasten

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fasten

Alternatively, to install into a new environment, run::

    conda create -n envname fasten

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fasten:<tag>

(see `fasten/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fasten| image:: https://img.shields.io/conda/dn/bioconda/fasten.svg?style=flat
   :target: https://anaconda.org/bioconda/fasten
   :alt:   (downloads)
.. |docker_fasten| image:: https://quay.io/repository/biocontainers/fasten/status
   :target: https://quay.io/repository/biocontainers/fasten
.. _`fasten/tags`: https://quay.io/repository/biocontainers/fasten?tab=tags


.. raw:: html

    <script>
        var package = "fasten";
        var versions = ["0.9.0","0.8.9","0.8.8","0.8.7","0.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasten/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasten/README.html