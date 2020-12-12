:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moss'
.. highlight: bash

moss
====

.. conda:recipe:: moss
   :replaces_section_title:
   :noindex:

   A multi\-sample somatic SNV caller

   :homepage: https://github.com/elkebir-group/Moss
   :license: MIT
   :recipe: /`moss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss/meta.yaml>`_

   


.. conda:package:: moss

   |downloads_moss| |docker_moss|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moss

   and update with::

      conda update moss

   or use the docker container::

      docker pull quay.io/biocontainers/moss:<tag>

   (see `moss/tags`_ for valid values for ``<tag>``)


.. |downloads_moss| image:: https://img.shields.io/conda/dn/bioconda/moss.svg?style=flat
   :target: https://anaconda.org/bioconda/moss
   :alt:   (downloads)
.. |docker_moss| image:: https://quay.io/repository/biocontainers/moss/status
   :target: https://quay.io/repository/biocontainers/moss
.. _`moss/tags`: https://quay.io/repository/biocontainers/moss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moss/README.html