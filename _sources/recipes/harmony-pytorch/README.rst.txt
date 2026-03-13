:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harmony-pytorch'
.. highlight: bash

harmony-pytorch
===============

.. conda:recipe:: harmony-pytorch
   :replaces_section_title:
   :noindex:

   This is a Pytorch implementation of Harmony algorithm on single\-cell sequencing data integration.

   :homepage: https://github.com/lilab-bcb/harmony-pytorch
   :license: BSD / BSD-3-Clause
   :recipe: /`harmony-pytorch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0619-0`

   


.. conda:package:: harmony-pytorch

   |downloads_harmony-pytorch| |docker_harmony-pytorch|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on python: ``>=3.7``
   :depends on pytorch: 
   :depends on scikit-learn: ``>=0.23``
   :depends on threadpoolctl: 

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

    pixi global install harmony-pytorch

to add into an existing workspace instead, run::

    pixi add harmony-pytorch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install harmony-pytorch

Alternatively, to install into a new environment, run::

    conda create -n envname harmony-pytorch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/harmony-pytorch:<tag>

(see `harmony-pytorch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_harmony-pytorch| image:: https://img.shields.io/conda/dn/bioconda/harmony-pytorch.svg?style=flat
   :target: https://anaconda.org/bioconda/harmony-pytorch
   :alt:   (downloads)
.. |docker_harmony-pytorch| image:: https://quay.io/repository/biocontainers/harmony-pytorch/status
   :target: https://quay.io/repository/biocontainers/harmony-pytorch
.. _`harmony-pytorch/tags`: https://quay.io/repository/biocontainers/harmony-pytorch?tab=tags


.. raw:: html

    <script>
        var package = "harmony-pytorch";
        var versions = ["0.1.8","0.1.7","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harmony-pytorch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harmony-pytorch/README.html