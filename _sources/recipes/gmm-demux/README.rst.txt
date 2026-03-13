:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmm-demux'
.. highlight: bash

gmm-demux
=========

.. conda:recipe:: gmm-demux
   :replaces_section_title:
   :noindex:

   GMM\-Demux is a Gaussian\-Mixture\-Model\-based software for processing sample barcoding data \(cell hashing and MULTI\-seq\).

   :homepage: https://github.com/CHPGenetics/GMM-demux
   :license: MIT / MIT
   :recipe: /`gmm-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmm-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmm-demux/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02084-2`

   


.. conda:package:: gmm-demux

   |downloads_gmm-demux| |docker_gmm-demux|

   :versions:
      
      

      ``0.2.2.3-1``,  ``0.2.2.3-0``

      

   
   :depends on bitvector: 
   :depends on numpy: ``>=1.22.4,<2.4``
   :depends on pandas: ``>=1.4.3``
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.12.0``
   :depends on tabulate: 

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

    pixi global install gmm-demux

to add into an existing workspace instead, run::

    pixi add gmm-demux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gmm-demux

Alternatively, to install into a new environment, run::

    conda create -n envname gmm-demux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gmm-demux:<tag>

(see `gmm-demux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gmm-demux| image:: https://img.shields.io/conda/dn/bioconda/gmm-demux.svg?style=flat
   :target: https://anaconda.org/bioconda/gmm-demux
   :alt:   (downloads)
.. |docker_gmm-demux| image:: https://quay.io/repository/biocontainers/gmm-demux/status
   :target: https://quay.io/repository/biocontainers/gmm-demux
.. _`gmm-demux/tags`: https://quay.io/repository/biocontainers/gmm-demux?tab=tags


.. raw:: html

    <script>
        var package = "gmm-demux";
        var versions = ["0.2.2.3","0.2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmm-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmm-demux/README.html