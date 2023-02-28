:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anaquin'
.. highlight: bash

bioconductor-anaquin
====================

.. conda:recipe:: bioconductor-anaquin
   :replaces_section_title:
   :noindex:

   Statistical analysis of sequins

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Anaquin.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-anaquin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin/meta.yaml>`_

   The project is intended to support the use of sequins \(synthetic sequencing spike\-in controls\) owned and made available by the Garvan Institute of Medical Research. The goal is to provide a standard open source library for quantitative analysis\, modelling and visualization of spike\-in controls.


.. conda:package:: bioconductor-anaquin

   |downloads_bioconductor-anaquin| |docker_bioconductor-anaquin|

   :versions:
      
      

      ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-knitr: 
   :depends r-locfit: 
   :depends r-plyr: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anaquin

   and update with::

      conda update bioconductor-anaquin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anaquin:<tag>

   (see `bioconductor-anaquin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anaquin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anaquin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anaquin
   :alt:   (downloads)
.. |docker_bioconductor-anaquin| image:: https://quay.io/repository/biocontainers/bioconductor-anaquin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anaquin
.. _`bioconductor-anaquin/tags`: https://quay.io/repository/biocontainers/bioconductor-anaquin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anaquin";
        var versions = ["2.22.0","2.18.0","2.16.0","2.14.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anaquin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anaquin/README.html