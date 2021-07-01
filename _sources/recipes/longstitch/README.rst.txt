:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longstitch'
.. highlight: bash

longstitch
==========

.. conda:recipe:: longstitch
   :replaces_section_title:
   :noindex:

   A genome assembly correction and scaffolding pipeline using long reads

   :homepage: https://bcgsc.ca/resources/software/longstitch
   :documentation: https://github.com/bcgsc/longstitch
   
   :license: GPL-3.0
   :recipe: /`longstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2021.06.17.448848`

   


.. conda:package:: longstitch

   |downloads_longstitch| |docker_longstitch|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends arcs: ``>=1.2.2``
   :depends make: 
   :depends ntlink: 
   :depends python: 
   :depends samtools: 
   :depends tigmint: ``>=1.2.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install longstitch

   and update with::

      conda update longstitch

   or use the docker container::

      docker pull quay.io/biocontainers/longstitch:<tag>

   (see `longstitch/tags`_ for valid values for ``<tag>``)


.. |downloads_longstitch| image:: https://img.shields.io/conda/dn/bioconda/longstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/longstitch
   :alt:   (downloads)
.. |docker_longstitch| image:: https://quay.io/repository/biocontainers/longstitch/status
   :target: https://quay.io/repository/biocontainers/longstitch
.. _`longstitch/tags`: https://quay.io/repository/biocontainers/longstitch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longstitch/README.html