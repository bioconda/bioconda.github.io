:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoncorrect'
.. highlight: bash

isoncorrect
===========

.. conda:recipe:: isoncorrect
   :replaces_section_title:
   :noindex:

   De novo error\-correction of long\-read transcriptome reads.

   :homepage: https://github.com/ksahlin/isONcorrect
   :license: GPL / GPL-3.0
   :recipe: /`isoncorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect/meta.yaml>`_

   


.. conda:package:: isoncorrect

   |downloads_isoncorrect| |docker_isoncorrect|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends numpy: ``>=1.16.2``
   :depends python: ``>=3``
   :depends python-edlib: ``>=1.1.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isoncorrect

   and update with::

      conda update isoncorrect

   or use the docker container::

      docker pull quay.io/biocontainers/isoncorrect:<tag>

   (see `isoncorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_isoncorrect| image:: https://img.shields.io/conda/dn/bioconda/isoncorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/isoncorrect
   :alt:   (downloads)
.. |docker_isoncorrect| image:: https://quay.io/repository/biocontainers/isoncorrect/status
   :target: https://quay.io/repository/biocontainers/isoncorrect
.. _`isoncorrect/tags`: https://quay.io/repository/biocontainers/isoncorrect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoncorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoncorrect/README.html