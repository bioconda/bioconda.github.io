:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypore'
.. highlight: bash

pypore
======

.. conda:recipe:: pypore
   :replaces_section_title:
   :noindex:

   Pythonic\/Cythonic Nanopore Translocation Analysis

   :homepage: http://parkin.github.io/pypore/
   :license: Apache 2.0
   :recipe: /`pypore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypore/meta.yaml>`_

   


.. conda:package:: pypore

   |downloads_pypore| |docker_pypore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6.dev20180702231556-5</code>,  <code>0.0.6.dev20180702231556-4</code>,  <code>0.0.6.dev20180702231556-3</code>,  <code>0.0.6.dev20180702231556-2</code>,  <code>0.0.6.dev20180702231556-1</code>,  <code>0.0.6.dev20180702231556-0</code>,  <code>0.0.6.dev20161116235131-1</code>,  <code>0.0.6.dev20161116235131-0</code>,  <code>0.0.5.dev20160304220337-1</code>,  </span></summary>
      

      ``0.0.6.dev20180702231556-5``,  ``0.0.6.dev20180702231556-4``,  ``0.0.6.dev20180702231556-3``,  ``0.0.6.dev20180702231556-2``,  ``0.0.6.dev20180702231556-1``,  ``0.0.6.dev20180702231556-0``,  ``0.0.6.dev20161116235131-1``,  ``0.0.6.dev20161116235131-0``,  ``0.0.5.dev20160304220337-1``,  ``0.0.5.dev20160304220337-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on numpy: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``

   :additional platforms:
      

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

    pixi global install pypore

to add into an existing workspace instead, run::

    pixi add pypore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pypore

Alternatively, to install into a new environment, run::

    conda create -n envname pypore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pypore:<tag>

(see `pypore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pypore| image:: https://img.shields.io/conda/dn/bioconda/pypore.svg?style=flat
   :target: https://anaconda.org/bioconda/pypore
   :alt:   (downloads)
.. |docker_pypore| image:: https://quay.io/repository/biocontainers/pypore/status
   :target: https://quay.io/repository/biocontainers/pypore
.. _`pypore/tags`: https://quay.io/repository/biocontainers/pypore?tab=tags


.. raw:: html

    <script>
        var package = "pypore";
        var versions = ["0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556","0.0.6.dev20180702231556"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypore/README.html