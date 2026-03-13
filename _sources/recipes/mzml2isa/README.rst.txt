:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzml2isa'
.. highlight: bash

mzml2isa
========

.. conda:recipe:: mzml2isa
   :replaces_section_title:
   :noindex:

   mzml2isa \- mzML to ISA\-tab parsing tool

   :homepage: https://github.com/ISA-tools/mzml2isa
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`mzml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa/meta.yaml>`_

   


.. conda:package:: mzml2isa

   |downloads_mzml2isa| |docker_mzml2isa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.24-2``,  ``0.4.24-1``,  ``0.4.24-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cached-property: 
   :depends on fs: 
   :depends on lxml: 
   :depends on openpyxl: 
   :depends on pronto: ``>=2.0,<3``
   :depends on python: ``<3.10``
   :depends on six: 

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

    pixi global install mzml2isa

to add into an existing workspace instead, run::

    pixi add mzml2isa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mzml2isa

Alternatively, to install into a new environment, run::

    conda create -n envname mzml2isa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mzml2isa:<tag>

(see `mzml2isa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mzml2isa| image:: https://img.shields.io/conda/dn/bioconda/mzml2isa.svg?style=flat
   :target: https://anaconda.org/bioconda/mzml2isa
   :alt:   (downloads)
.. |docker_mzml2isa| image:: https://quay.io/repository/biocontainers/mzml2isa/status
   :target: https://quay.io/repository/biocontainers/mzml2isa
.. _`mzml2isa/tags`: https://quay.io/repository/biocontainers/mzml2isa?tab=tags


.. raw:: html

    <script>
        var package = "mzml2isa";
        var versions = ["1.1.1","1.0.4","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzml2isa/README.html