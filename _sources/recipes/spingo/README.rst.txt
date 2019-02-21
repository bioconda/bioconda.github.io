:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spingo'
.. highlight: bash

spingo
======

.. conda:recipe:: spingo
   :replaces_section_title:

   Species level IdentificatioN of metaGenOmic amplicons

   :homepage: https://github.com/GuyAllard/SPINGO
   :license: https://github.com/GuyAllard/SPINGO/blob/master/LICENSE
   :recipe: /`spingo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spingo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spingo/meta.yaml>`_

   


.. conda:package:: spingo

   |downloads_spingo| |docker_spingo|

   :versions: 1.3-0
   
   :depends boost: 1.61*
   
   :depends libgcc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spingo

   and update with::

      conda update spingo

   or use the docker container::

      docker pull quay.io/biocontainers/spingo:<tag>

   (see `spingo/tags`_ for valid values for ``<tag>``)


.. |downloads_spingo| image:: https://img.shields.io/conda/dn/bioconda/spingo.svg?style=flat
   :alt:   (downloads)
.. |docker_spingo| image:: https://quay.io/repository/biocontainers/spingo/status
   :target: https://quay.io/repository/biocontainers/spingo
.. _`spingo/tags`: https://quay.io/repository/biocontainers/spingo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spingo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spingo/README.html