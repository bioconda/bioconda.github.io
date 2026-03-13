:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacus'
.. highlight: bash

panacus
=======

.. conda:recipe:: panacus
   :replaces_section_title:
   :noindex:

   panacus is a tool for computing counting statistics for GFA files.

   :homepage: https://github.com/codialab/panacus
   :license: MIT / MIT
   :recipe: /`panacus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus/meta.yaml>`_

   


.. conda:package:: panacus

   |downloads_panacus| |docker_panacus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.3-0</code>,  <code>0.3.0.2-0</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.4-2</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.0.2-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install panacus

to add into an existing workspace instead, run::

    pixi add panacus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panacus

Alternatively, to install into a new environment, run::

    conda create -n envname panacus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panacus:<tag>

(see `panacus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panacus| image:: https://img.shields.io/conda/dn/bioconda/panacus.svg?style=flat
   :target: https://anaconda.org/bioconda/panacus
   :alt:   (downloads)
.. |docker_panacus| image:: https://quay.io/repository/biocontainers/panacus/status
   :target: https://quay.io/repository/biocontainers/panacus
.. _`panacus/tags`: https://quay.io/repository/biocontainers/panacus?tab=tags


.. raw:: html

    <script>
        var package = "panacus";
        var versions = ["0.4.1","0.4.0","0.3.3","0.3.0.2","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacus/README.html