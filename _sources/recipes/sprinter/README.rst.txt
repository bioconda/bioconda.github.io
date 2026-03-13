:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sprinter'
.. highlight: bash

sprinter
========

.. conda:recipe:: sprinter
   :replaces_section_title:
   :noindex:

   Single\-cell Proliferation Rate Inference in Non\-homogeneous Tumours through Evolutionary Routes \(SPRINTER\)

   :homepage: https://github.com/zaccaria-lab/SPRINTER
   :documentation: https://github.com/zaccaria-lab/SPRINTER/blob/v1.0.0/README.md
   
   :license: OTHER / ACADEMIC NON-COMMERCIAL SOFTWARE LICENSE
   :recipe: /`sprinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinter/meta.yaml>`_

   SPRINTER is an algorithm that uses single\-cell whole\-genome DNA sequencing data to enable the accurate identification of actively replicating cells in both the S and G2 phases of the cell cycle and their assignment to distinct tumour clones\, thus providing a proxy to estimate clone\-specific proliferation rates.


.. conda:package:: sprinter

   |downloads_sprinter| |docker_sprinter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on hmmlearn: ``>=0.2.7``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numba: ``>=0.55.0``
   :depends on numpy: ``>=1.22.0,<=1.26.4``
   :depends on pandas: ``>=1.3.0``
   :depends on pybedtools: ``>=0.8.0``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``>=1.0.0,<2.0.0``
   :depends on scipy: ``>=1.7.0,<2.0.0``
   :depends on seaborn: ``>=0.11.0``
   :depends on statsmodels: ``>=0.13.0``

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

    pixi global install sprinter

to add into an existing workspace instead, run::

    pixi add sprinter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sprinter

Alternatively, to install into a new environment, run::

    conda create -n envname sprinter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sprinter:<tag>

(see `sprinter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sprinter| image:: https://img.shields.io/conda/dn/bioconda/sprinter.svg?style=flat
   :target: https://anaconda.org/bioconda/sprinter
   :alt:   (downloads)
.. |docker_sprinter| image:: https://quay.io/repository/biocontainers/sprinter/status
   :target: https://quay.io/repository/biocontainers/sprinter
.. _`sprinter/tags`: https://quay.io/repository/biocontainers/sprinter?tab=tags


.. raw:: html

    <script>
        var package = "sprinter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sprinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sprinter/README.html