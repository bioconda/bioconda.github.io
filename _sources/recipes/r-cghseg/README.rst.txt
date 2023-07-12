:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cghseg'
.. highlight: bash

r-cghseg
========

.. conda:recipe:: r-cghseg
   :replaces_section_title:
   :noindex:

   Dedicated to the analysis of CGH \(Comparative Genomic Hybridization\) array profiles using segmentation models. \'cghseg\' package is intended to detect breakpoints from CGH profiles. It can handle both single and multiple profiles analysis\, to perform segmentation\, normalization and calling. Methods for joint segmentation are described in Picard and al. \(2011\).

   :homepage: https://CRAN.R-project.org/package=cghseg
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-cghseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg/meta.yaml>`_

   


.. conda:package:: r-cghseg

   |downloads_r-cghseg| |docker_r-cghseg|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cghseg

   and update with::

      conda update r-cghseg

   or use the docker container::

      docker pull quay.io/biocontainers/r-cghseg:<tag>

   (see `r-cghseg/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cghseg| image:: https://img.shields.io/conda/dn/bioconda/r-cghseg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cghseg
   :alt:   (downloads)
.. |docker_r-cghseg| image:: https://quay.io/repository/biocontainers/r-cghseg/status
   :target: https://quay.io/repository/biocontainers/r-cghseg
.. _`r-cghseg/tags`: https://quay.io/repository/biocontainers/r-cghseg?tab=tags


.. raw:: html

    <script>
        var package = "r-cghseg";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cghseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cghseg/README.html