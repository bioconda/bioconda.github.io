:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iced'
.. highlight: bash

iced
====

.. conda:recipe:: iced
   :replaces_section_title:
   :noindex:

   The python module iced implements the ICE normalization of hic data.

   :homepage: https://github.com/hiclib/iced
   :documentation: https://members.cbio.mines-paristech.fr/~nvaroquaux/iced
   
   :license: BSD / BSD-3-Clause
   :recipe: /`iced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced/meta.yaml>`_

   


.. conda:package:: iced

   |downloads_iced| |docker_iced|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.13-0</code>,  <code>0.5.10-2</code>,  <code>0.5.10-1</code>,  <code>0.5.10-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-1</code>,  <code>0.5.8-0</code>,  <code>0.5.6-3</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.13-0``,  ``0.5.10-2``,  ``0.5.10-1``,  ``0.5.10-0``,  ``0.5.9-0``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: 
   :depends on scipy: ``>=0.19.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install iced

to add into an existing workspace instead, run::

    pixi add iced

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iced

Alternatively, to install into a new environment, run::

    conda create -n envname iced

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iced:<tag>

(see `iced/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iced| image:: https://img.shields.io/conda/dn/bioconda/iced.svg?style=flat
   :target: https://anaconda.org/bioconda/iced
   :alt:   (downloads)
.. |docker_iced| image:: https://quay.io/repository/biocontainers/iced/status
   :target: https://quay.io/repository/biocontainers/iced
.. _`iced/tags`: https://quay.io/repository/biocontainers/iced?tab=tags


.. raw:: html

    <script>
        var package = "iced";
        var versions = ["0.6.0","0.5.13","0.5.10","0.5.10","0.5.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iced/README.html