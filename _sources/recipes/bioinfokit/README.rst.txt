:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioinfokit'
.. highlight: bash

bioinfokit
==========

.. conda:recipe:: bioinfokit
   :replaces_section_title:
   :noindex:

   The bioinfokit toolkit aimed to provide various easy\-to\-use functionalities to analyze\, visualize\, and interpret the biological data generated from genome\-scale omics experiments.

   :homepage: https://reneshbedre.github.io/blog/howtoinstall.html
   :license: MIT
   :recipe: /`bioinfokit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit/meta.yaml>`_

   


.. conda:package:: bioinfokit

   |downloads_bioinfokit| |docker_bioinfokit|

   :versions:
      
      

      ``0.9.7-0``,  ``0.9.6-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioinfokit

   and update with::

      conda update bioinfokit

   or use the docker container::

      docker pull quay.io/biocontainers/bioinfokit:<tag>

   (see `bioinfokit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioinfokit| image:: https://img.shields.io/conda/dn/bioconda/bioinfokit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioinfokit
   :alt:   (downloads)
.. |docker_bioinfokit| image:: https://quay.io/repository/biocontainers/bioinfokit/status
   :target: https://quay.io/repository/biocontainers/bioinfokit
.. _`bioinfokit/tags`: https://quay.io/repository/biocontainers/bioinfokit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioinfokit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioinfokit/README.html