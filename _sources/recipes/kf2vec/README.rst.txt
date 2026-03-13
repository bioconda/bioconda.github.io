:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kf2vec'
.. highlight: bash

kf2vec
======

.. conda:recipe:: kf2vec
   :replaces_section_title:
   :noindex:

   K\-mer frequency to vector tool.

   :homepage: https://github.com/noraracht/kf2vec
   :license: APACHE / Apache-2.0
   :recipe: /`kf2vec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kf2vec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kf2vec/meta.yaml>`_

   


.. conda:package:: kf2vec

   |downloads_kf2vec| |docker_kf2vec|

   :versions:
      
      

      ``1.0.62-0``,  ``0.1.3-0``

      

   
   :depends on kmer-jellyfish: 
   :depends on numpy: ``>=1.22,<1.27``
   :depends on openmpi: ``4.*``
   :depends on pandas: 
   :depends on pip: 
   :depends on python: ``>=3.11,<3.12``
   :depends on pytorch: 
   :depends on scikit-learn: 
   :depends on seqkit: 
   :depends on seqtk: 
   :depends on treecluster: ``>=1.0.3``
   :depends on treeswift: ``>=1.1.45``

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

    pixi global install kf2vec

to add into an existing workspace instead, run::

    pixi add kf2vec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kf2vec

Alternatively, to install into a new environment, run::

    conda create -n envname kf2vec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kf2vec:<tag>

(see `kf2vec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kf2vec| image:: https://img.shields.io/conda/dn/bioconda/kf2vec.svg?style=flat
   :target: https://anaconda.org/bioconda/kf2vec
   :alt:   (downloads)
.. |docker_kf2vec| image:: https://quay.io/repository/biocontainers/kf2vec/status
   :target: https://quay.io/repository/biocontainers/kf2vec
.. _`kf2vec/tags`: https://quay.io/repository/biocontainers/kf2vec?tab=tags


.. raw:: html

    <script>
        var package = "kf2vec";
        var versions = ["1.0.62","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kf2vec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kf2vec/README.html