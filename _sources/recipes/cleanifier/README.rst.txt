:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cleanifier'
.. highlight: bash

cleanifier
==========

.. conda:recipe:: cleanifier
   :replaces_section_title:
   :noindex:

   A fast lightweight tool to remove contamination using k\-mers.

   :homepage: https://gitlab.com/rahmannlab/cleanifier
   :license: MIT / MIT
   :recipe: /`cleanifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cleanifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cleanifier/meta.yaml>`_

   


.. conda:package:: cleanifier

   |downloads_cleanifier| |docker_cleanifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.2.1-0</code>,  <code>0.1.3-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: 
   :depends on clangdev: 
   :depends on jsonargparse: ``>=4.29.0``
   :depends on llvmlite: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pytest: 
   :depends on python: ``>=3.12``
   :depends on tabix: 
   :depends on xz: 

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

    pixi global install cleanifier

to add into an existing workspace instead, run::

    pixi add cleanifier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cleanifier

Alternatively, to install into a new environment, run::

    conda create -n envname cleanifier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cleanifier:<tag>

(see `cleanifier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cleanifier| image:: https://img.shields.io/conda/dn/bioconda/cleanifier.svg?style=flat
   :target: https://anaconda.org/bioconda/cleanifier
   :alt:   (downloads)
.. |docker_cleanifier| image:: https://quay.io/repository/biocontainers/cleanifier/status
   :target: https://quay.io/repository/biocontainers/cleanifier
.. _`cleanifier/tags`: https://quay.io/repository/biocontainers/cleanifier?tab=tags


.. raw:: html

    <script>
        var package = "cleanifier";
        var versions = ["1.2.0","1.1.4","1.1.3","1.1.2","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cleanifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cleanifier/README.html