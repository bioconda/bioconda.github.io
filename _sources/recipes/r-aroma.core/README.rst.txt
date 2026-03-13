:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.core'
.. highlight: bash

r-aroma.core
============

.. conda:recipe:: r-aroma.core
   :replaces_section_title:
   :noindex:

   Core methods and classes used by higher\-level \'aroma.\*\' packages part of the Aroma Project\, e.g. \'aroma.affymetrix\' and \'aroma.cn\'.

   :homepage: https://www.aroma-project.org/
   :developer docs: https://github.com/HenrikBengtsson/aroma.core
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`r-aroma.core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core/meta.yaml>`_

   


.. conda:package:: r-aroma.core

   |downloads_r-aroma.core| |docker_r-aroma.core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.2-0</code>,  <code>3.3.1-1</code>,  <code>3.3.1-0</code>,  <code>3.3.0-1</code>,  <code>3.3.0-0</code>,  <code>3.2.2-2</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-2</code>,  </span></summary>
      

      ``3.3.2-0``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-biocmanager: 
   :depends on r-future: 
   :depends on r-listenv: 
   :depends on r-matrixstats: ``>=0.57.0``
   :depends on r-pscbs: ``>=0.65.0``
   :depends on r-r.cache: ``>=0.14.0``
   :depends on r-r.devices: ``>=2.16.1``
   :depends on r-r.filesets: ``>=2.14.0``
   :depends on r-r.methodss3: ``>=1.8.1``
   :depends on r-r.oo: ``>=1.24.0``
   :depends on r-r.rsp: ``>=0.44.0``
   :depends on r-r.utils: ``>=2.10.1``
   :depends on r-rcolorbrewer: ``>=1.1_2``

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

    pixi global install r-aroma.core

to add into an existing workspace instead, run::

    pixi add r-aroma.core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-aroma.core

Alternatively, to install into a new environment, run::

    conda create -n envname r-aroma.core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-aroma.core:<tag>

(see `r-aroma.core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-aroma.core| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.core.svg?style=flat
   :target: https://anaconda.org/bioconda/r-aroma.core
   :alt:   (downloads)
.. |docker_r-aroma.core| image:: https://quay.io/repository/biocontainers/r-aroma.core/status
   :target: https://quay.io/repository/biocontainers/r-aroma.core
.. _`r-aroma.core/tags`: https://quay.io/repository/biocontainers/r-aroma.core?tab=tags


.. raw:: html

    <script>
        var package = "r-aroma.core";
        var versions = ["3.3.2","3.3.1","3.3.1","3.3.0","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.core/README.html