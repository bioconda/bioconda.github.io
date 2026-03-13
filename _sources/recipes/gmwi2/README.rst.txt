:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmwi2'
.. highlight: bash

gmwi2
=====

.. conda:recipe:: gmwi2
   :replaces_section_title:
   :noindex:

   Enhanced Health Status Prediction from Gut Microbiome Taxonomic Profiles

   :homepage: https://github.com/danielchang2002/GMWI2
   :license: MIT / MIT
   :recipe: /`gmwi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmwi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmwi2/meta.yaml>`_

   GMWI2 \(Gut Microbiome Wellness Index 2\) is a robust and biologically interpretable predictor of health status based on gut microbiome taxonomic profiles. 
   On a stool metagenome sample\, this command\-line tool performs four major steps\:
   \(1\) Quality control\;
   \(2\) Taxonomic profiling using MetaPhlAn3 \(v3.0.13\) with the mpa\\\_v30\\\_CHOCOPhlAn\_201901 marker database\;
   \(3\) Transformation of taxonomic relative abundances into a binary presence\/absence profile\;
   \(4\) Computation of the GMWI2 score using a Lasso\-penalized logistic regression model trained on a meta\-dataset of 8\,069 health status labeled stool shotgun metagenomes.


.. conda:package:: gmwi2

   |downloads_gmwi2| |docker_gmwi2|

   :versions:
      
      

      ``1.6-0``,  ``1.5-0``

      

   
   :depends on bbmap: 
   :depends on bedtools: 
   :depends on fastqc: 
   :depends on halo: 
   :depends on metaphlan: ``3.0.13.*``
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on samtools: 
   :depends on scikit-learn: ``1.2.2.*``
   :depends on trimmomatic: 

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

    pixi global install gmwi2

to add into an existing workspace instead, run::

    pixi add gmwi2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gmwi2

Alternatively, to install into a new environment, run::

    conda create -n envname gmwi2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gmwi2:<tag>

(see `gmwi2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gmwi2| image:: https://img.shields.io/conda/dn/bioconda/gmwi2.svg?style=flat
   :target: https://anaconda.org/bioconda/gmwi2
   :alt:   (downloads)
.. |docker_gmwi2| image:: https://quay.io/repository/biocontainers/gmwi2/status
   :target: https://quay.io/repository/biocontainers/gmwi2
.. _`gmwi2/tags`: https://quay.io/repository/biocontainers/gmwi2?tab=tags


.. raw:: html

    <script>
        var package = "gmwi2";
        var versions = ["1.6","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmwi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmwi2/README.html