:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alevin-fry'
.. highlight: bash

alevin-fry
==========

.. conda:recipe:: alevin-fry
   :replaces_section_title:
   :noindex:

   alevin\-fry is a tool for the efficient processing of single\-cell data based on RAD files produced by alevin

   :homepage: https://github.com/COMBINE-lab/alevin-fry
   :license: BSD 3-Clause
   :recipe: /`alevin-fry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry/meta.yaml>`_

   


.. conda:package:: alevin-fry

   |downloads_alevin-fry| |docker_alevin-fry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-2</code>,  </span></summary>
      

      ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
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

    pixi global install alevin-fry

to add into an existing workspace instead, run::

    pixi add alevin-fry

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alevin-fry

Alternatively, to install into a new environment, run::

    conda create -n envname alevin-fry

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alevin-fry:<tag>

(see `alevin-fry/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alevin-fry| image:: https://img.shields.io/conda/dn/bioconda/alevin-fry.svg?style=flat
   :target: https://anaconda.org/bioconda/alevin-fry
   :alt:   (downloads)
.. |docker_alevin-fry| image:: https://quay.io/repository/biocontainers/alevin-fry/status
   :target: https://quay.io/repository/biocontainers/alevin-fry
.. _`alevin-fry/tags`: https://quay.io/repository/biocontainers/alevin-fry?tab=tags


.. raw:: html

    <script>
        var package = "alevin-fry";
        var versions = ["0.11.2","0.11.1","0.11.0","0.11.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alevin-fry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alevin-fry/README.html