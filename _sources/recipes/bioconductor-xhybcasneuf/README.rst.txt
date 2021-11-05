:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xhybcasneuf'
.. highlight: bash

bioconductor-xhybcasneuf
========================

.. conda:recipe:: bioconductor-xhybcasneuf
   :replaces_section_title:
   :noindex:

   EBI\/PSB cross\-hybridisation study package

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/XhybCasneuf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xhybcasneuf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xhybcasneuf/meta.yaml>`_

   Cross\-hybridisation study on the ATH1 Affymetrix GeneChip


.. conda:package:: bioconductor-xhybcasneuf

   |downloads_bioconductor-xhybcasneuf| |docker_bioconductor-xhybcasneuf|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-ath1121501cdf: ``>=2.18.0,<2.19.0``
   :depends bioconductor-tinesath1cdf: ``>=1.32.0,<1.33.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xhybcasneuf

   and update with::

      conda update bioconductor-xhybcasneuf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xhybcasneuf:<tag>

   (see `bioconductor-xhybcasneuf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xhybcasneuf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xhybcasneuf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xhybcasneuf
   :alt:   (downloads)
.. |docker_bioconductor-xhybcasneuf| image:: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf
.. _`bioconductor-xhybcasneuf/tags`: https://quay.io/repository/biocontainers/bioconductor-xhybcasneuf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xhybcasneuf";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xhybcasneuf/README.html