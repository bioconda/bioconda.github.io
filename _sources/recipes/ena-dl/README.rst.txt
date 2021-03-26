:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-dl'
.. highlight: bash

ena-dl
======

.. conda:recipe:: ena-dl
   :replaces_section_title:
   :noindex:

   A tool to download FASTQs associated with Study\, Experiment\, or Run accessions.

   :homepage: https://github.com/rpetit3/ena-dl
   :license: MIT
   :recipe: /`ena-dl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-dl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-dl/meta.yaml>`_

   


.. conda:package:: ena-dl

   |downloads_ena-dl| |docker_ena-dl|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ena-dl

   and update with::

      conda update ena-dl

   or use the docker container::

      docker pull quay.io/biocontainers/ena-dl:<tag>

   (see `ena-dl/tags`_ for valid values for ``<tag>``)


.. |downloads_ena-dl| image:: https://img.shields.io/conda/dn/bioconda/ena-dl.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-dl
   :alt:   (downloads)
.. |docker_ena-dl| image:: https://quay.io/repository/biocontainers/ena-dl/status
   :target: https://quay.io/repository/biocontainers/ena-dl
.. _`ena-dl/tags`: https://quay.io/repository/biocontainers/ena-dl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-dl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-dl/README.html