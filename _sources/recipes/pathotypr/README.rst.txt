:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathotypr'
.. highlight: bash

pathotypr
=========

.. conda:recipe:: pathotypr
   :replaces_section_title:
   :noindex:

   Alignment\-free genome classification using SNP markers and machine learning for genomic surveillance

   :homepage: https://github.com/PathoGenOmics-Lab/pathotypr
   :license: AGPL / AGPL-3.0-only
   :recipe: /`pathotypr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathotypr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathotypr/meta.yaml>`_

   Pathotypr is a high\-performance\, alignment\-free tool for genome classification
   using SNP markers and a pre\-trained Random Forest model. It can be adapted to
   any organism given a custom set of markers or a trained model. The current
   curated models support Mycobacterium tuberculosis complex \(MTBC\) lineage
   assignment \(L1\-L10\, A1\-A4\) and drug resistance genotyping using the WHO
   mutation catalogue \(grades 1\-2\).



.. conda:package:: pathotypr

   |downloads_pathotypr| |docker_pathotypr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on libcxx: ``>=19``
   :depends on openssl: ``>=3.5.5,<4.0a0``

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

    pixi global install pathotypr

to add into an existing workspace instead, run::

    pixi add pathotypr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathotypr

Alternatively, to install into a new environment, run::

    conda create -n envname pathotypr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathotypr:<tag>

(see `pathotypr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathotypr| image:: https://img.shields.io/conda/dn/bioconda/pathotypr.svg?style=flat
   :target: https://anaconda.org/bioconda/pathotypr
   :alt:   (downloads)
.. |docker_pathotypr| image:: https://quay.io/repository/biocontainers/pathotypr/status
   :target: https://quay.io/repository/biocontainers/pathotypr
.. _`pathotypr/tags`: https://quay.io/repository/biocontainers/pathotypr?tab=tags


.. raw:: html

    <script>
        var package = "pathotypr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathotypr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathotypr/README.html