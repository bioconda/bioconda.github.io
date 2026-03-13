:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpclr'
.. highlight: bash

xpclr
=====

.. conda:recipe:: xpclr
   :replaces_section_title:
   :noindex:

   Code to compute xp\-clr values to detect selection as per Chen\, Patterson \& Reich 2010.

   :homepage: https://github.com/hardingnj/xpclr
   :license: MIT / MIT
   :recipe: /`xpclr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr/meta.yaml>`_

   


.. conda:package:: xpclr

   |downloads_xpclr| |docker_xpclr|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends on h5py: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on scikit-allel: ``>=1.2``
   :depends on scipy: 
   :depends on zarr: ``>=2.2``

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

    pixi global install xpclr

to add into an existing workspace instead, run::

    pixi add xpclr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xpclr

Alternatively, to install into a new environment, run::

    conda create -n envname xpclr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xpclr:<tag>

(see `xpclr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xpclr| image:: https://img.shields.io/conda/dn/bioconda/xpclr.svg?style=flat
   :target: https://anaconda.org/bioconda/xpclr
   :alt:   (downloads)
.. |docker_xpclr| image:: https://quay.io/repository/biocontainers/xpclr/status
   :target: https://quay.io/repository/biocontainers/xpclr
.. _`xpclr/tags`: https://quay.io/repository/biocontainers/xpclr?tab=tags


.. raw:: html

    <script>
        var package = "xpclr";
        var versions = ["1.1.2","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpclr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpclr/README.html