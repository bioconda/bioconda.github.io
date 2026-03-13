:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomath'
.. highlight: bash

nanomath
========

.. conda:recipe:: nanomath
   :replaces_section_title:
   :noindex:

   A few simple math function for other Oxford Nanopore processing scripts

   :homepage: https://github.com/wdecoster/nanomath
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanomath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath/meta.yaml>`_

   


.. conda:package:: nanomath

   |downloads_nanomath| |docker_nanomath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-0</code>,  <code>0.23.3-0</code>,  <code>0.23.2-0</code>,  <code>0.23.1-1</code>,  <code>0.23.1-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-1``,  ``0.23.1-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.21.0-2``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.18.1-0``,  ``0.16.2-0``,  ``0.14.2-0``,  ``0.12.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deprecated: 
   :depends on numpy: ``>1.8``
   :depends on pandas: 
   :depends on python: ``>=3``

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

    pixi global install nanomath

to add into an existing workspace instead, run::

    pixi add nanomath

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanomath

Alternatively, to install into a new environment, run::

    conda create -n envname nanomath

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanomath:<tag>

(see `nanomath/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanomath| image:: https://img.shields.io/conda/dn/bioconda/nanomath.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomath
   :alt:   (downloads)
.. |docker_nanomath| image:: https://quay.io/repository/biocontainers/nanomath/status
   :target: https://quay.io/repository/biocontainers/nanomath
.. _`nanomath/tags`: https://quay.io/repository/biocontainers/nanomath?tab=tags


.. raw:: html

    <script>
        var package = "nanomath";
        var versions = ["1.4.0","1.3.0","1.2.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomath/README.html