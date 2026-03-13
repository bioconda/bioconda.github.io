:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spagrn'
.. highlight: bash

spagrn
======

.. conda:recipe:: spagrn
   :replaces_section_title:
   :noindex:

   A comprehensive tool to infer TF\-centered\, spatial gene regulatory networks for the spatially resolved transcriptomics \(SRT\) data.

   :homepage: https://github.com/BGI-Qingdao/SpaGRN
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`spagrn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spagrn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spagrn/meta.yaml>`_

   


.. conda:package:: spagrn

   |downloads_spagrn| |docker_spagrn|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.4-0``

      

   
   :depends on anndata: 
   :depends on dask: 
   :depends on esda: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22,<1.25``
   :depends on pandas: ``<2.0.0,>=1.3.4``
   :depends on pysal: 
   :depends on python: ``>=3.8,<3.9``
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tqdm: 

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

    pixi global install spagrn

to add into an existing workspace instead, run::

    pixi add spagrn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spagrn

Alternatively, to install into a new environment, run::

    conda create -n envname spagrn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spagrn:<tag>

(see `spagrn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spagrn| image:: https://img.shields.io/conda/dn/bioconda/spagrn.svg?style=flat
   :target: https://anaconda.org/bioconda/spagrn
   :alt:   (downloads)
.. |docker_spagrn| image:: https://quay.io/repository/biocontainers/spagrn/status
   :target: https://quay.io/repository/biocontainers/spagrn
.. _`spagrn/tags`: https://quay.io/repository/biocontainers/spagrn?tab=tags


.. raw:: html

    <script>
        var package = "spagrn";
        var versions = ["1.1.0","1.0.7","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spagrn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spagrn/README.html