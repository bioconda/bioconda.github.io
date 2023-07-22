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
   On a stool metagenome sample\, this command\-line tool performs three major steps\:
   \(1\) Taxonomic profiling using MetaPhlAn3 \(v3.0.13\) with the mpa\\\_v30\\\_CHOCOPhlAn\_201901 marker database\;
   \(2\) Transformation of taxonomic relative abundances into a binary presence\/absence profile\;
   \(3\) Computation of the GMWI2 score using a Lasso\-penalized logistic regression model trained on a meta\-dataset of 8\,069 health status labeled stool shotgun metagenomes.


.. conda:package:: gmwi2

   |downloads_gmwi2| |docker_gmwi2|

   :versions:
      
      

      ``1.4-0``,  ``1.3-0``

      

   
   :depends halo: 
   :depends metaphlan: ``3.0.13.*``
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends scikit-learn: ``1.2.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmwi2

   and update with::

      conda update gmwi2

   or use the docker container::

      docker pull quay.io/biocontainers/gmwi2:<tag>

   (see `gmwi2/tags`_ for valid values for ``<tag>``)


.. |downloads_gmwi2| image:: https://img.shields.io/conda/dn/bioconda/gmwi2.svg?style=flat
   :target: https://anaconda.org/bioconda/gmwi2
   :alt:   (downloads)
.. |docker_gmwi2| image:: https://quay.io/repository/biocontainers/gmwi2/status
   :target: https://quay.io/repository/biocontainers/gmwi2
.. _`gmwi2/tags`: https://quay.io/repository/biocontainers/gmwi2?tab=tags


.. raw:: html

    <script>
        var package = "gmwi2";
        var versions = ["1.4","1.3"];
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