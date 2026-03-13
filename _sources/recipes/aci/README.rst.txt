:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aci'
.. highlight: bash

aci
===

.. conda:recipe:: aci
   :replaces_section_title:
   :noindex:

   Visualizes coverage for amplicons.

   :homepage: https://github.com/erinyoung/ACI
   :documentation: https://github.com/erinyoung/ACI/blob/1.45.251125/README.md
   
   :license: MIT / MIT
   :recipe: /`aci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aci/meta.yaml>`_

   


.. conda:package:: aci

   |downloads_aci| |docker_aci|

   :versions:
      
      

      ``1.45.251125-0``,  ``1.15.250702-0``,  ``1.4.20240116-0``,  ``1.2.20231229-0``

      

   
   :depends on intervaltree: 
   :depends on matplotlib-base: ``>=3.8.2``
   :depends on numpy: ``>=1.26.2``
   :depends on pandas: ``>=2.1.4``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.8,<4.0``

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

    pixi global install aci

to add into an existing workspace instead, run::

    pixi add aci

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aci

Alternatively, to install into a new environment, run::

    conda create -n envname aci

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aci:<tag>

(see `aci/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aci| image:: https://img.shields.io/conda/dn/bioconda/aci.svg?style=flat
   :target: https://anaconda.org/bioconda/aci
   :alt:   (downloads)
.. |docker_aci| image:: https://quay.io/repository/biocontainers/aci/status
   :target: https://quay.io/repository/biocontainers/aci
.. _`aci/tags`: https://quay.io/repository/biocontainers/aci?tab=tags


.. raw:: html

    <script>
        var package = "aci";
        var versions = ["1.45.251125","1.15.250702","1.4.20240116","1.2.20231229"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aci/README.html