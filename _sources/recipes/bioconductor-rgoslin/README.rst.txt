:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgoslin'
.. highlight: bash

bioconductor-rgoslin
====================

.. conda:recipe:: bioconductor-rgoslin
   :replaces_section_title:
   :noindex:

   Lipid Shorthand Name Parsing and Normalization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rgoslin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgoslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgoslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgoslin/meta.yaml>`_

   The R implementation for the Grammar of Succint Lipid Nomenclature parses different short hand notation dialects for lipid names. It normalizes them to a standard name. It further provides calculated monoisotopic masses and sum formulas for each successfully parsed lipid name and supplements it with LIPID MAPS Category and Class information. Also\, the structural level and further structural details about the head group\, fatty acyls and functional groups are returned\, where applicable.


.. conda:package:: bioconductor-rgoslin

   |downloads_bioconductor-rgoslin| |docker_bioconductor-rgoslin|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-rcpp: ``>=1.0.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgoslin

   and update with::

      conda update bioconductor-rgoslin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgoslin:<tag>

   (see `bioconductor-rgoslin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgoslin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgoslin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgoslin
   :alt:   (downloads)
.. |docker_bioconductor-rgoslin| image:: https://quay.io/repository/biocontainers/bioconductor-rgoslin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgoslin
.. _`bioconductor-rgoslin/tags`: https://quay.io/repository/biocontainers/bioconductor-rgoslin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgoslin";
        var versions = ["1.4.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgoslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgoslin/README.html