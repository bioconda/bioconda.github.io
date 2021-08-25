:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyebias'
.. highlight: bash

bioconductor-dyebias
====================

.. conda:recipe:: bioconductor-dyebias
   :replaces_section_title:
   :noindex:

   The GASSCO method for correcting for slide\-dependent gene\-specific dye bias

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/dyebias.html
   :license: GPL-3
   :recipe: /`bioconductor-dyebias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebias/meta.yaml>`_
   :links: biotools: :biotools:`dyebias`

   Many two\-colour hybridizations suffer from a dye bias that is both gene\-specific and slide\-specific. The former depends on the content of the nucleotide used for labeling\; the latter depends on the labeling percentage. The slide\-dependency was hitherto not recognized\, and made addressing the artefact impossible.  Given a reasonable number of dye\-swapped pairs of hybridizations\, or of same vs. same hybridizations\, both the gene\- and slide\-biases can be estimated and corrected using the GASSCO method \(Margaritis et al.\, Mol. Sys. Biol. 5\:266 \(2009\)\, doi\:10.1038\/msb.2009.21\)


.. conda:package:: bioconductor-dyebias

   |downloads_bioconductor-dyebias| |docker_bioconductor-dyebias|

   :versions:
      
      

      ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-marray: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dyebias

   and update with::

      conda update bioconductor-dyebias

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyebias:<tag>

   (see `bioconductor-dyebias/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyebias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyebias.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyebias
   :alt:   (downloads)
.. |docker_bioconductor-dyebias| image:: https://quay.io/repository/biocontainers/bioconductor-dyebias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyebias
.. _`bioconductor-dyebias/tags`: https://quay.io/repository/biocontainers/bioconductor-dyebias?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dyebias";
        var versions = ["1.52.0","1.50.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyebias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyebias/README.html