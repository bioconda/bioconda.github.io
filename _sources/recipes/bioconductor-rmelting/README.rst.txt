:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmelting'
.. highlight: bash

bioconductor-rmelting
=====================

.. conda:recipe:: bioconductor-rmelting
   :replaces_section_title:
   :noindex:

   R Interface to MELTING 5

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rmelting.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-rmelting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmelting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmelting/meta.yaml>`_

   R interface to the MELTING 5 program \(https\:\/\/www.ebi.ac.uk\/biomodels\-static\/tools\/melting\/\) to compute melting temperatures of nucleic acid duplexes along with other thermodynamic parameters.


.. conda:package:: bioconductor-rmelting

   |downloads_bioconductor-rmelting| |docker_bioconductor-rmelting|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends openjdk: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rdpack: 
   :depends r-rjava: ``>=0.5-0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmelting

   and update with::

      conda update bioconductor-rmelting

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmelting:<tag>

   (see `bioconductor-rmelting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmelting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmelting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmelting
   :alt:   (downloads)
.. |docker_bioconductor-rmelting| image:: https://quay.io/repository/biocontainers/bioconductor-rmelting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmelting
.. _`bioconductor-rmelting/tags`: https://quay.io/repository/biocontainers/bioconductor-rmelting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmelting";
        var versions = ["1.8.0","1.6.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmelting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmelting/README.html