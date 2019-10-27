:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgview'
.. highlight: bash

cgview
======

.. conda:recipe:: cgview
   :replaces_section_title:

   CGView is a Java package for generating high quality\, zoomable maps of circular genomes.
   Its primary purpose is to serve as a component of sequence annotation pipelines\, as a
   means of generating visual output suitable for the web.

   :homepage: http://wishart.biology.ualberta.ca/cgview/
   :license: GNU General Public License, Version 2.0
   :recipe: /`cgview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview/meta.yaml>`_

   


.. conda:package:: cgview

   |downloads_cgview| |docker_cgview|

   :versions: 1.0-3, 1.0-2, 1.0-1
   
   :depends openjdk: >=6
   :depends perl: 
   :depends perl-bioperl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgview

   and update with::

      conda update cgview

   or use the docker container::

      docker pull quay.io/biocontainers/cgview:<tag>

   (see `cgview/tags`_ for valid values for ``<tag>``)


.. |downloads_cgview| image:: https://img.shields.io/conda/dn/bioconda/cgview.svg?style=flat
   :target: https://anaconda.org/bioconda/cgview
   :alt:   (downloads)
.. |docker_cgview| image:: https://quay.io/repository/biocontainers/cgview/status
   :target: https://quay.io/repository/biocontainers/cgview
.. _`cgview/tags`: https://quay.io/repository/biocontainers/cgview?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgview/README.html