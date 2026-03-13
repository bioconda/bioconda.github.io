:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'albatradis'
.. highlight: bash

albatradis
==========

.. conda:recipe:: albatradis
   :replaces_section_title:
   :noindex:

   Comparative TraDIS analysis.

   :homepage: https://github.com/quadram-institute-bioscience/albatradis
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`albatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis/meta.yaml>`_

   


.. conda:package:: albatradis

   |downloads_albatradis| |docker_albatradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.0.4-4</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.0.5-4``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.68``
   :depends on cython: 
   :depends on dendropy: 
   :depends on libgcc: ``>=14``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyfastaq: ``>=3.12.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-graphviz: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on quatradis: 
   :depends on scipy: 
   :depends on seaborn-base: 

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

    pixi global install albatradis

to add into an existing workspace instead, run::

    pixi add albatradis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install albatradis

Alternatively, to install into a new environment, run::

    conda create -n envname albatradis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/albatradis:<tag>

(see `albatradis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_albatradis| image:: https://img.shields.io/conda/dn/bioconda/albatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/albatradis
   :alt:   (downloads)
.. |docker_albatradis| image:: https://quay.io/repository/biocontainers/albatradis/status
   :target: https://quay.io/repository/biocontainers/albatradis
.. _`albatradis/tags`: https://quay.io/repository/biocontainers/albatradis?tab=tags


.. raw:: html

    <script>
        var package = "albatradis";
        var versions = ["1.1.2","1.1.2","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/albatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/albatradis/README.html