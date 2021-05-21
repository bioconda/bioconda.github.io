:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextclade_js'
.. highlight: bash

nextclade_js
============

.. conda:recipe:: nextclade_js
   :replaces_section_title:
   :noindex:

   SARS\-CoV\-2 genome clade assignment\, mutation calling\, and sequence quality checks \(Javascript implementation\)

   :homepage: https://github.com/nextstrain/nextclade
   :license: MIT
   :recipe: /`nextclade_js <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade_js>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade_js/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nextclade`

   


.. conda:package:: nextclade_js

   |downloads_nextclade_js| |docker_nextclade_js|

   :versions:
      
      

      ``0.14.3-0``,  ``0.14.2-0``

      

   
   :depends nodejs: ``>12``
   :depends nodejs: ``>=15.14.0,<16.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextclade_js

   and update with::

      conda update nextclade_js

   or use the docker container::

      docker pull quay.io/biocontainers/nextclade_js:<tag>

   (see `nextclade_js/tags`_ for valid values for ``<tag>``)


.. |downloads_nextclade_js| image:: https://img.shields.io/conda/dn/bioconda/nextclade_js.svg?style=flat
   :target: https://anaconda.org/bioconda/nextclade_js
   :alt:   (downloads)
.. |docker_nextclade_js| image:: https://quay.io/repository/biocontainers/nextclade_js/status
   :target: https://quay.io/repository/biocontainers/nextclade_js
.. _`nextclade_js/tags`: https://quay.io/repository/biocontainers/nextclade_js?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextclade_js/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextclade_js/README.html