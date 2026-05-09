:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasamba'
.. highlight: bash

rnasamba
========

.. conda:recipe:: rnasamba
   :replaces_section_title:
   :noindex:

   A tool for computing the coding potential of RNA transcript sequences using deep learning.

   :homepage: http://apcamargo.github.io/RNAsamba/
   :license: GPL / GPL-3
   :recipe: /`rnasamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba/meta.yaml>`_

   


.. conda:package:: rnasamba

   |downloads_rnasamba| |docker_rnasamba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on h5py: ``<3.0.0``
   :depends on keras: ``>=2.1.0,<2.3.0``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on numpy: ``<1.17``
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on tensorflow: ``>=1.5.0,<2.0``

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

    pixi global install rnasamba

to add into an existing workspace instead, run::

    pixi add rnasamba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnasamba

Alternatively, to install into a new environment, run::

    conda create -n envname rnasamba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnasamba:<tag>

(see `rnasamba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnasamba| image:: https://img.shields.io/conda/dn/bioconda/rnasamba.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasamba
   :alt:   (downloads)
.. |docker_rnasamba| image:: https://quay.io/repository/biocontainers/rnasamba/status
   :target: https://quay.io/repository/biocontainers/rnasamba
.. _`rnasamba/tags`: https://quay.io/repository/biocontainers/rnasamba?tab=tags


.. raw:: html

    <script>
        var package = "rnasamba";
        var versions = ["0.2.5","0.2.5","0.2.4","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasamba/README.html