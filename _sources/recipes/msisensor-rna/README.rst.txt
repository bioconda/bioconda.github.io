:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor-rna'
.. highlight: bash

msisensor-rna
=============

.. conda:recipe:: msisensor-rna
   :replaces_section_title:
   :noindex:

   MSIsensor\-RNA\: Microsatellite instability detection using RNA sequencing data.

   :homepage: https://github.com/xjtu-omics/msisensor-rna
   :license: Community-Spec-1.0
   :recipe: /`msisensor-rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-rna/meta.yaml>`_
   :links: doi: :doi:`10.1093/gpbjnl/qzae004`

   


.. conda:package:: msisensor-rna

   |downloads_msisensor-rna| |docker_msisensor-rna|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.6a-0``

      

   
   :depends on imbalanced-learn: ``>=0.8.0``
   :depends on numpy: ``>=1.16``
   :depends on pandas: ``>=1.0``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.24``

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

    pixi global install msisensor-rna

to add into an existing workspace instead, run::

    pixi add msisensor-rna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msisensor-rna

Alternatively, to install into a new environment, run::

    conda create -n envname msisensor-rna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msisensor-rna:<tag>

(see `msisensor-rna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msisensor-rna| image:: https://img.shields.io/conda/dn/bioconda/msisensor-rna.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor-rna
   :alt:   (downloads)
.. |docker_msisensor-rna| image:: https://quay.io/repository/biocontainers/msisensor-rna/status
   :target: https://quay.io/repository/biocontainers/msisensor-rna
.. _`msisensor-rna/tags`: https://quay.io/repository/biocontainers/msisensor-rna?tab=tags


.. raw:: html

    <script>
        var package = "msisensor-rna";
        var versions = ["0.1.6","0.1.6a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor-rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor-rna/README.html