:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringmeup'
.. highlight: bash

stringmeup
==========

.. conda:recipe:: stringmeup
   :replaces_section_title:
   :noindex:

   A post\-processing tool to reclassify Kraken 2 output based on the confidence score and\/or minimum minimizer hit groups.

   :homepage: https://github.com/danisven/StringMeUp
   :license: MIT / MIT
   :recipe: /`stringmeup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmeup/meta.yaml>`_

   


.. conda:package:: stringmeup

   |downloads_stringmeup| |docker_stringmeup|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stringmeup

   and update with::

      conda update stringmeup

   or use the docker container::

      docker pull quay.io/biocontainers/stringmeup:<tag>

   (see `stringmeup/tags`_ for valid values for ``<tag>``)


.. |downloads_stringmeup| image:: https://img.shields.io/conda/dn/bioconda/stringmeup.svg?style=flat
   :target: https://anaconda.org/bioconda/stringmeup
   :alt:   (downloads)
.. |docker_stringmeup| image:: https://quay.io/repository/biocontainers/stringmeup/status
   :target: https://quay.io/repository/biocontainers/stringmeup
.. _`stringmeup/tags`: https://quay.io/repository/biocontainers/stringmeup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmeup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmeup/README.html