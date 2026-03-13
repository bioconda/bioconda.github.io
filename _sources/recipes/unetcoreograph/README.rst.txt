:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unetcoreograph'
.. highlight: bash

unetcoreograph
==============

.. conda:recipe:: unetcoreograph
   :replaces_section_title:
   :noindex:

   UNetCoreograph \- Automated segmentation of nuclei in 3D imaging data.

   :homepage: https://github.com/HMS-IDAC/UNetCoreograph
   :license: MIT / MIT
   :recipe: /`unetcoreograph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unetcoreograph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unetcoreograph/meta.yaml>`_

   UNetCoreograph is a Python tool for segmenting and analyzing nuclei in tissue images using a U\-Net based model.



.. conda:package:: unetcoreograph

   |downloads_unetcoreograph| |docker_unetcoreograph|

   :versions:
      
      

      ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.3-0``

      

   
   :depends on h5py: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on scikit-image: 
   :depends on scipy: 
   :depends on tifffile: 
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

    pixi global install unetcoreograph

to add into an existing workspace instead, run::

    pixi add unetcoreograph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unetcoreograph

Alternatively, to install into a new environment, run::

    conda create -n envname unetcoreograph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unetcoreograph:<tag>

(see `unetcoreograph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unetcoreograph| image:: https://img.shields.io/conda/dn/bioconda/unetcoreograph.svg?style=flat
   :target: https://anaconda.org/bioconda/unetcoreograph
   :alt:   (downloads)
.. |docker_unetcoreograph| image:: https://quay.io/repository/biocontainers/unetcoreograph/status
   :target: https://quay.io/repository/biocontainers/unetcoreograph
.. _`unetcoreograph/tags`: https://quay.io/repository/biocontainers/unetcoreograph?tab=tags


.. raw:: html

    <script>
        var package = "unetcoreograph";
        var versions = ["2.4.6","2.4.5","2.4.4","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unetcoreograph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unetcoreograph/README.html