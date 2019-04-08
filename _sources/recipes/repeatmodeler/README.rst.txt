:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmodeler'
.. highlight: bash

repeatmodeler
=============

.. conda:recipe:: repeatmodeler
   :replaces_section_title:

   RepeatModeler is a de\-novo repeat family identification and modeling package.

   :homepage: http://www.repeatmasker.org/RepeatModeler.html
   :license: Open Software License v2.1
   :recipe: /`repeatmodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler/meta.yaml>`_
   :links: biotools: :biotools:`RepeatModeler`

   


.. conda:package:: repeatmodeler

   |downloads_repeatmodeler| |docker_repeatmodeler|

   :versions: 1.0.11-1, 1.0.11-0, 1.0.8-1, 1.0.8-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-text-soundex: 
   :depends recon: 
   :depends repeatmasker: 
   :depends repeatscout: 
   :depends rmblast: 
   :depends trf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repeatmodeler

   and update with::

      conda update repeatmodeler

   or use the docker container::

      docker pull quay.io/biocontainers/repeatmodeler:<tag>

   (see `repeatmodeler/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatmodeler| image:: https://img.shields.io/conda/dn/bioconda/repeatmodeler.svg?style=flat
   :alt:   (downloads)
.. |docker_repeatmodeler| image:: https://quay.io/repository/biocontainers/repeatmodeler/status
   :target: https://quay.io/repository/biocontainers/repeatmodeler
.. _`repeatmodeler/tags`: https://quay.io/repository/biocontainers/repeatmodeler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmodeler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmodeler/README.html