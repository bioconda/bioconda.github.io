:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyclone'
.. highlight: bash

phyclone
========

.. conda:recipe:: phyclone
   :replaces_section_title:
   :noindex:

   Accurate Bayesian reconstruction of cancer phylogenies from bulk sequencing.

   :homepage: https://github.com/Roth-Lab/PhyClone
   :license: GPL-3.0-or-later
   :recipe: /`phyclone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyclone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyclone/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaf344`

   


.. conda:package:: phyclone

   |downloads_phyclone| |docker_phyclone|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends on click: ``>=8.3``
   :depends on h5py: ``>=3.15``
   :depends on networkx: ``>=3.6.1``
   :depends on numba: ``>=0.61.2``
   :depends on numpy: ``>=2.0.0``
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.12``
   :depends on python-xxhash: ``>=3.3.0``
   :depends on rustworkx: ``>=0.15.1``
   :depends on scipy: 

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

    pixi global install phyclone

to add into an existing workspace instead, run::

    pixi add phyclone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyclone

Alternatively, to install into a new environment, run::

    conda create -n envname phyclone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyclone:<tag>

(see `phyclone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyclone| image:: https://img.shields.io/conda/dn/bioconda/phyclone.svg?style=flat
   :target: https://anaconda.org/bioconda/phyclone
   :alt:   (downloads)
.. |docker_phyclone| image:: https://quay.io/repository/biocontainers/phyclone/status
   :target: https://quay.io/repository/biocontainers/phyclone
.. _`phyclone/tags`: https://quay.io/repository/biocontainers/phyclone?tab=tags


.. raw:: html

    <script>
        var package = "phyclone";
        var versions = ["0.8.0","0.7.1","0.7.0","0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyclone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyclone/README.html