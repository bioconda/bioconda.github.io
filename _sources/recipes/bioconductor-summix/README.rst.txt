:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summix'
.. highlight: bash

bioconductor-summix
===================

.. conda:recipe:: bioconductor-summix
   :replaces_section_title:
   :noindex:

   Summix\: A method to estimate and adjust for population structure in genetic summary data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Summix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-summix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix/meta.yaml>`_

   This package contains the Summix method for estimating and adjusting for ancestry in genetic summary allele frequency data. The function summix estimates reference ancestry proportions using a mixture model. The adjAF function produces ancestry adjusted allele frequencies for an observed sample with ancestry proportions matching a target person or sample.


.. conda:package:: bioconductor-summix

   |downloads_bioconductor-summix| |docker_bioconductor-summix|

   :versions:
      
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-nloptr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-summix

   and update with::

      conda update bioconductor-summix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-summix:<tag>

   (see `bioconductor-summix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-summix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summix
   :alt:   (downloads)
.. |docker_bioconductor-summix| image:: https://quay.io/repository/biocontainers/bioconductor-summix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summix
.. _`bioconductor-summix/tags`: https://quay.io/repository/biocontainers/bioconductor-summix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-summix";
        var versions = ["2.4.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summix/README.html