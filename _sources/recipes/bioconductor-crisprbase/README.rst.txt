:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbase'
.. highlight: bash

bioconductor-crisprbase
=======================

.. conda:recipe:: bioconductor-crisprbase
   :replaces_section_title:
   :noindex:

   Base functions and classes for CRISPR gRNA design

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/crisprBase.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbase/meta.yaml>`_

   Provides S4 classes for general nucleases\, CRISPR nucleases\, CRISPR nickases\, and base editors.Several CRISPR\-specific genome arithmetic functions are implemented to help extract genomic coordinates of spacer and protospacer sequences. Commonly\-used CRISPR nuclease objects are provided that can be readily used in other packages. Both DNA\- and RNA\-targeting nucleases are supported.


.. conda:package:: bioconductor-crisprbase

   |downloads_bioconductor-crisprbase| |docker_bioconductor-crisprbase|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprbase

   and update with::

      conda update bioconductor-crisprbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprbase:<tag>

   (see `bioconductor-crisprbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbase
   :alt:   (downloads)
.. |docker_bioconductor-crisprbase| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbase
.. _`bioconductor-crisprbase/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbase";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbase/README.html