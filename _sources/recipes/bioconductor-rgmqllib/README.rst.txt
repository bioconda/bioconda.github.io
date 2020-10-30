:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgmqllib'
.. highlight: bash

bioconductor-rgmqllib
=====================

.. conda:recipe:: bioconductor-rgmqllib
   :replaces_section_title:
   :noindex:

   RGMQLlib\, java libraries to run GMQL scala API

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/RGMQLlib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgmqllib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmqllib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmqllib/meta.yaml>`_

   A package that contains scala libraries to call GMQL from R used by RGMQL package. It contains a scalable data management engine written in Scala programming language.


.. conda:package:: bioconductor-rgmqllib

   |downloads_bioconductor-rgmqllib| |docker_bioconductor-rgmqllib|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgmqllib

   and update with::

      conda update bioconductor-rgmqllib

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgmqllib:<tag>

   (see `bioconductor-rgmqllib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgmqllib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgmqllib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgmqllib
   :alt:   (downloads)
.. |docker_bioconductor-rgmqllib| image:: https://quay.io/repository/biocontainers/bioconductor-rgmqllib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgmqllib
.. _`bioconductor-rgmqllib/tags`: https://quay.io/repository/biocontainers/bioconductor-rgmqllib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgmqllib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgmqllib/README.html