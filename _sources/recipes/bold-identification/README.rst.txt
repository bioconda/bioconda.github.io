:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bold-identification'
.. highlight: bash

bold-identification
===================

.. conda:recipe:: bold-identification
   :replaces_section_title:
   :noindex:

   A tool for taxonomic assignment for given sequences using the BOLD database \(http\:\/\/www.boldsystems.org\/index.php\)

   :homepage: https://github.com/linzhi2013/bold_identification
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`bold-identification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification/meta.yaml>`_
   :links: biotools: :biotools:`bold-identification`

   


.. conda:package:: bold-identification

   |downloads_bold-identification| |docker_bold-identification|

   :versions:
      
      

      ``0.0.27-0``,  ``0.0.25-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: ``>1.5``
   :depends html5lib: 
   :depends python: ``>=3.5``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bold-identification

   and update with::

      conda update bold-identification

   or use the docker container::

      docker pull quay.io/biocontainers/bold-identification:<tag>

   (see `bold-identification/tags`_ for valid values for ``<tag>``)


.. |downloads_bold-identification| image:: https://img.shields.io/conda/dn/bioconda/bold-identification.svg?style=flat
   :target: https://anaconda.org/bioconda/bold-identification
   :alt:   (downloads)
.. |docker_bold-identification| image:: https://quay.io/repository/biocontainers/bold-identification/status
   :target: https://quay.io/repository/biocontainers/bold-identification
.. _`bold-identification/tags`: https://quay.io/repository/biocontainers/bold-identification?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bold-identification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bold-identification/README.html