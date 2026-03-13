:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosg'
.. highlight: bash

cosg
====

.. conda:recipe:: cosg
   :replaces_section_title:
   :noindex:

   Accurate and fast cell marker gene identification with COSG.

   :homepage: https://github.com/genecell/COSG
   :license: BSD / BSD-3-Clause
   :recipe: /`cosg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosg/meta.yaml>`_

   


.. conda:package:: cosg

   |downloads_cosg| |docker_cosg|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on anndata: ``>=0.8``
   :depends on matplotlib-base: ``>=3.5.2``
   :depends on networkx: ``>=2.8.8``
   :depends on numpy: ``>=1.17.0``
   :depends on pandas: ``>=0.21``
   :depends on python: ``>=3.6``
   :depends on scanpy: ``>=1.6.0``
   :depends on scikit-learn: ``>=0.21.2``
   :depends on scipy: ``>=1.4``
   :depends on typing_extensions: 

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

    pixi global install cosg

to add into an existing workspace instead, run::

    pixi add cosg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cosg

Alternatively, to install into a new environment, run::

    conda create -n envname cosg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cosg:<tag>

(see `cosg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cosg| image:: https://img.shields.io/conda/dn/bioconda/cosg.svg?style=flat
   :target: https://anaconda.org/bioconda/cosg
   :alt:   (downloads)
.. |docker_cosg| image:: https://quay.io/repository/biocontainers/cosg/status
   :target: https://quay.io/repository/biocontainers/cosg
.. _`cosg/tags`: https://quay.io/repository/biocontainers/cosg?tab=tags


.. raw:: html

    <script>
        var package = "cosg";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosg/README.html