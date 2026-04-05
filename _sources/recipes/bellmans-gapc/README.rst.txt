:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bellmans-gapc'
.. highlight: bash

bellmans-gapc
=============

.. conda:recipe:: bellmans-gapc
   :replaces_section_title:
   :noindex:

   A language and compiler for algebraic dynamic programming.

   :homepage: https://github.com/jlab/gapc
   :documentation: https://bibiserv.cebitec.uni-bielefeld.de/gapc
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bellmans-gapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc/meta.yaml>`_

   


.. conda:package:: bellmans-gapc

   |downloads_bellmans-gapc| |docker_bellmans-gapc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.01.12-5</code>,  <code>2024.01.12-4</code>,  <code>2024.01.12-3</code>,  <code>2024.01.12-2</code>,  <code>2024.01.12-1</code>,  <code>2024.01.12-0</code>,  <code>2023.07.05-0</code>,  <code>2022.07.04-2</code>,  <code>2022.07.04-1</code>,  </span></summary>
      

      ``2024.01.12-5``,  ``2024.01.12-4``,  ``2024.01.12-3``,  ``2024.01.12-2``,  ``2024.01.12-1``,  ``2024.01.12-0``,  ``2023.07.05-0``,  ``2022.07.04-2``,  ``2022.07.04-1``,  ``2022.07.04-0``,  ``2021.04.28-2``,  ``2021.04.28-1``,  ``2021.04.28-0``,  ``2020.12.08-1``,  ``2020.12.08-0``,  ``2020.07.07-0``,  ``2020.01.08-1``,  ``2020.01.08-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blas: 
   :depends on boost-cpp: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on make: 
   :depends on sed: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install bellmans-gapc

to add into an existing workspace instead, run::

    pixi add bellmans-gapc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bellmans-gapc

Alternatively, to install into a new environment, run::

    conda create -n envname bellmans-gapc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bellmans-gapc:<tag>

(see `bellmans-gapc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bellmans-gapc| image:: https://img.shields.io/conda/dn/bioconda/bellmans-gapc.svg?style=flat
   :target: https://anaconda.org/bioconda/bellmans-gapc
   :alt:   (downloads)
.. |docker_bellmans-gapc| image:: https://quay.io/repository/biocontainers/bellmans-gapc/status
   :target: https://quay.io/repository/biocontainers/bellmans-gapc
.. _`bellmans-gapc/tags`: https://quay.io/repository/biocontainers/bellmans-gapc?tab=tags


.. raw:: html

    <script>
        var package = "bellmans-gapc";
        var versions = ["2024.01.12","2024.01.12","2024.01.12","2024.01.12","2024.01.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bellmans-gapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bellmans-gapc/README.html