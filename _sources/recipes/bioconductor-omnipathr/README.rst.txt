:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omnipathr'
.. highlight: bash

bioconductor-omnipathr
======================

.. conda:recipe:: bioconductor-omnipathr
   :replaces_section_title:
   :noindex:

   OmniPath web service client

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/OmnipathR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omnipathr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr/meta.yaml>`_

   A client for the OmniPath web service \(https\:\/\/www.omnipathdb.org\). It also includes functions to transform and pretty print some of the downloaded data.


.. conda:package:: bioconductor-omnipathr

   |downloads_bioconductor-omnipathr| |docker_bioconductor-omnipathr|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omnipathr

   and update with::

      conda update bioconductor-omnipathr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omnipathr:<tag>

   (see `bioconductor-omnipathr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omnipathr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omnipathr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omnipathr
   :alt:   (downloads)
.. |docker_bioconductor-omnipathr| image:: https://quay.io/repository/biocontainers/bioconductor-omnipathr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omnipathr
.. _`bioconductor-omnipathr/tags`: https://quay.io/repository/biocontainers/bioconductor-omnipathr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omnipathr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omnipathr/README.html