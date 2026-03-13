:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mquad'
.. highlight: bash

mquad
=====

.. conda:recipe:: mquad
   :replaces_section_title:
   :noindex:

   MQuad\: Mixture Model for Mitochondrial Mutation detection in single\-cell omics data.

   :homepage: https://github.com/aaronkwc/MQuad
   :documentation: https://github.com/single-cell-genetics/MQuad/blob/main/README.rst
   
   :license: APACHE / Apache-2.0
   :recipe: /`mquad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mquad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mquad/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-022-28845-0`, biotools: :biotools:`mquad`

   


.. conda:package:: mquad

   |downloads_mquad| |docker_mquad|

   :versions:
      
      

      ``0.1.8b-0``

      

   
   :depends on bbmix: ``>=0.2.2``
   :depends on kneed: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.9.0``
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.4.0``
   :depends on seaborn-base: 
   :depends on vireosnp: 

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

    pixi global install mquad

to add into an existing workspace instead, run::

    pixi add mquad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mquad

Alternatively, to install into a new environment, run::

    conda create -n envname mquad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mquad:<tag>

(see `mquad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mquad| image:: https://img.shields.io/conda/dn/bioconda/mquad.svg?style=flat
   :target: https://anaconda.org/bioconda/mquad
   :alt:   (downloads)
.. |docker_mquad| image:: https://quay.io/repository/biocontainers/mquad/status
   :target: https://quay.io/repository/biocontainers/mquad
.. _`mquad/tags`: https://quay.io/repository/biocontainers/mquad?tab=tags


.. raw:: html

    <script>
        var package = "mquad";
        var versions = ["0.1.8b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mquad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mquad/README.html