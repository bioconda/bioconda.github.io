:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcabrowser'
.. highlight: bash

bioconductor-hcabrowser
=======================

.. conda:recipe:: bioconductor-hcabrowser
   :replaces_section_title:
   :noindex:

   Browse the Human Cell Atlas data portal

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/HCABrowser.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hcabrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcabrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcabrowser/meta.yaml>`_

   Search\, browse\, reference\, and download resources from the Human Cell Atlas data portal. Development of this package is supported through funds from the Chan \/ Zuckerberg initiative.


.. conda:package:: bioconductor-hcabrowser

   |downloads_bioconductor-hcabrowser| |docker_bioconductor-hcabrowser|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-anvil: ``>=1.2.0,<1.3.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-googleauthr: 
   :depends r-httr: 
   :depends r-readr: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hcabrowser

   and update with::

      conda update bioconductor-hcabrowser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcabrowser:<tag>

   (see `bioconductor-hcabrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcabrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcabrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hcabrowser
   :alt:   (downloads)
.. |docker_bioconductor-hcabrowser| image:: https://quay.io/repository/biocontainers/bioconductor-hcabrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcabrowser
.. _`bioconductor-hcabrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-hcabrowser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hcabrowser";
        var versions = ["1.6.0","1.6.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcabrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcabrowser/README.html