:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'egglib'
.. highlight: bash

egglib
======

.. conda:recipe:: egglib
   :replaces_section_title:
   :noindex:

   Evolutionary Genetics and Genomics Library. EggLib is a C\+\+\/Python library and program package for evolutionary genetics and genomics. Main features are sequence data management\, sequence polymorphism analysis\, and coalescent simulations. EggLib is a flexible Python module with a performant underlying C\+\+ library and allows fast and intuitive development of Python programs and scripts.

   :homepage: https://egglib.org
   :documentation: https://www.egglib.org/index.html
   
   :developer docs: https://gitlab.com/demita/egglib
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`egglib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib/meta.yaml>`_
   :links: doi: :doi:`10.1111/1755-0998.13672`, biotools: :biotools:`egglib`

   


.. conda:package:: egglib

   |downloads_egglib| |docker_egglib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.5.2-0</code>,  <code>3.3.5-0</code>,  <code>3.3.4-1</code>,  <code>3.3.4-0</code>,  <code>3.3.3-1</code>,  <code>3.3.3-0</code>,  <code>3.3.2-1</code>,  </span></summary>
      

      ``3.6.0-1``,  ``3.6.0-0``,  ``3.5.2-0``,  ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.1.0-3``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0b21-1``,  ``3.0.0b21-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on platformdirs: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
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

    pixi global install egglib

to add into an existing workspace instead, run::

    pixi add egglib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install egglib

Alternatively, to install into a new environment, run::

    conda create -n envname egglib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/egglib:<tag>

(see `egglib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_egglib| image:: https://img.shields.io/conda/dn/bioconda/egglib.svg?style=flat
   :target: https://anaconda.org/bioconda/egglib
   :alt:   (downloads)
.. |docker_egglib| image:: https://quay.io/repository/biocontainers/egglib/status
   :target: https://quay.io/repository/biocontainers/egglib
.. _`egglib/tags`: https://quay.io/repository/biocontainers/egglib?tab=tags


.. raw:: html

    <script>
        var package = "egglib";
        var versions = ["3.6.0","3.6.0","3.5.2","3.3.5","3.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/egglib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/egglib/README.html