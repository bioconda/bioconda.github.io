:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-jetset'
.. highlight: bash

r-jetset
========

.. conda:recipe:: r-jetset
   :replaces_section_title:
   :noindex:

   On Affymetrix gene expression microarrays\, a single gene may be measured by multiple probe sets. This can present a mild conundrum when attempting to evaluate a gene \"signature\" that is defined by gene names rather than by specific probe sets. This package provides a one\-to\-one mapping from gene to \"best\" probe set for four Affymetrix human gene expression microarrays\: hgu95av2\, hgu133a\, hgu133plus2\, and u133x3p. This package also includes the pre\-calculated probe set quality scores that were used to define the mapping.

   :homepage: http://www.cbs.dtu.dk/biotools/jetset/
   :license: OTHER / Artistic-2.0
   :recipe: /`r-jetset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jetset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jetset/meta.yaml>`_

   


.. conda:package:: r-jetset

   |downloads_r-jetset| |docker_r-jetset|

   :versions:
      
      

      ``3.4.0-1``,  ``3.4.0-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-org.hs.eg.db: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-jetset

   and update with::

      conda update r-jetset

   or use the docker container::

      docker pull quay.io/biocontainers/r-jetset:<tag>

   (see `r-jetset/tags`_ for valid values for ``<tag>``)


.. |downloads_r-jetset| image:: https://img.shields.io/conda/dn/bioconda/r-jetset.svg?style=flat
   :target: https://anaconda.org/bioconda/r-jetset
   :alt:   (downloads)
.. |docker_r-jetset| image:: https://quay.io/repository/biocontainers/r-jetset/status
   :target: https://quay.io/repository/biocontainers/r-jetset
.. _`r-jetset/tags`: https://quay.io/repository/biocontainers/r-jetset?tab=tags


.. raw:: html

    <script>
        var package = "r-jetset";
        var versions = ["3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-jetset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-jetset/README.html