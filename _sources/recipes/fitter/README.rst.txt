:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fitter'
.. highlight: bash

fitter
======

.. conda:recipe:: fitter
   :replaces_section_title:
   :noindex:

   A tool to fit data to many distributions and best one\(s\)

   :homepage: https://github.com/cokelaer/fitter
   :license: GPL-3.0-only
   :recipe: /`fitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fitter/meta.yaml>`_

   


.. conda:package:: fitter

   |downloads_fitter| |docker_fitter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.3-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.11-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.4-1</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.11-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.4-1``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on easydev: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scipy: 

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

    pixi global install fitter

to add into an existing workspace instead, run::

    pixi add fitter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fitter

Alternatively, to install into a new environment, run::

    conda create -n envname fitter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fitter:<tag>

(see `fitter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fitter| image:: https://img.shields.io/conda/dn/bioconda/fitter.svg?style=flat
   :target: https://anaconda.org/bioconda/fitter
   :alt:   (downloads)
.. |docker_fitter| image:: https://quay.io/repository/biocontainers/fitter/status
   :target: https://quay.io/repository/biocontainers/fitter
.. _`fitter/tags`: https://quay.io/repository/biocontainers/fitter?tab=tags


.. raw:: html

    <script>
        var package = "fitter";
        var versions = ["1.4.1","1.4.0","1.2.3","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fitter/README.html