:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phiercc'
.. highlight: bash

phiercc
=======

.. conda:recipe:: phiercc
   :replaces_section_title:
   :noindex:

   Hierarchical Clustering of cgMLST profiles

   :homepage: https://github.com/zheminzhou/pHierCC
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`phiercc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phiercc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phiercc/meta.yaml>`_

   


.. conda:package:: phiercc

   |downloads_phiercc| |docker_phiercc|

   :versions:
      
      

      ``1.24-0``

      

   
   :depends on click: ``>=7.0``
   :depends on matplotlib-base: ``>=3.2.1``
   :depends on numba: ``>=0.38.0``
   :depends on numpy: ``>=1.18.1``
   :depends on pandas: ``>=0.24.2``
   :depends on python: ``>=3.6,<3.9``
   :depends on scikit-learn: ``>=0.23.1``
   :depends on scipy: ``>=1.3.2``
   :depends on sharedarray: ``>=3.2.1``

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

    pixi global install phiercc

to add into an existing workspace instead, run::

    pixi add phiercc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phiercc

Alternatively, to install into a new environment, run::

    conda create -n envname phiercc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phiercc:<tag>

(see `phiercc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phiercc| image:: https://img.shields.io/conda/dn/bioconda/phiercc.svg?style=flat
   :target: https://anaconda.org/bioconda/phiercc
   :alt:   (downloads)
.. |docker_phiercc| image:: https://quay.io/repository/biocontainers/phiercc/status
   :target: https://quay.io/repository/biocontainers/phiercc
.. _`phiercc/tags`: https://quay.io/repository/biocontainers/phiercc?tab=tags


.. raw:: html

    <script>
        var package = "phiercc";
        var versions = ["1.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phiercc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phiercc/README.html