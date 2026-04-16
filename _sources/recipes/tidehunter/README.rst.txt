:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidehunter'
.. highlight: bash

tidehunter
==========

.. conda:recipe:: tidehunter
   :replaces_section_title:
   :noindex:

   TideHunter\: efficient and sensitive tandem repeat detection from noisy long reads using seed\-and\-chain

   :homepage: https://github.com/yangao07/TideHunter
   :license: MIT / MIT
   :recipe: /`tidehunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidehunter/meta.yaml>`_

   


.. conda:package:: tidehunter

   |downloads_tidehunter| |docker_tidehunter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-0</code>,  <code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-0</code>,  <code>1.5.4-2</code>,  <code>1.5.4-1</code>,  <code>1.5.4-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  </span></summary>
      

      ``1.5.6-0``,  ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-0``,  ``1.5.4-2``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install tidehunter

to add into an existing workspace instead, run::

    pixi add tidehunter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tidehunter

Alternatively, to install into a new environment, run::

    conda create -n envname tidehunter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tidehunter:<tag>

(see `tidehunter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tidehunter| image:: https://img.shields.io/conda/dn/bioconda/tidehunter.svg?style=flat
   :target: https://anaconda.org/bioconda/tidehunter
   :alt:   (downloads)
.. |docker_tidehunter| image:: https://quay.io/repository/biocontainers/tidehunter/status
   :target: https://quay.io/repository/biocontainers/tidehunter
.. _`tidehunter/tags`: https://quay.io/repository/biocontainers/tidehunter?tab=tags


.. raw:: html

    <script>
        var package = "tidehunter";
        var versions = ["1.5.6","1.5.5","1.5.5","1.5.5","1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidehunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidehunter/README.html