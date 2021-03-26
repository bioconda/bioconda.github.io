:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'auspice'
.. highlight: bash

auspice
=======

.. conda:recipe:: auspice
   :replaces_section_title:
   :noindex:

   Auspice is an open\-source interactive tool for visualising phylogenomic data

   :homepage: https://docs.nextstrain.org/projects/auspice/
   :developer docs: https://github.com/nextstrain/auspice
   :license: AGPL / AGPL-3.0
   :recipe: /`auspice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice/meta.yaml>`_

   


.. conda:package:: auspice

   |downloads_auspice| |docker_auspice|

   :versions:
      
      

      ``2.23.0-1``,  ``2.23.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends nodejs: ``>=10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install auspice

   and update with::

      conda update auspice

   or use the docker container::

      docker pull quay.io/biocontainers/auspice:<tag>

   (see `auspice/tags`_ for valid values for ``<tag>``)


.. |downloads_auspice| image:: https://img.shields.io/conda/dn/bioconda/auspice.svg?style=flat
   :target: https://anaconda.org/bioconda/auspice
   :alt:   (downloads)
.. |docker_auspice| image:: https://quay.io/repository/biocontainers/auspice/status
   :target: https://quay.io/repository/biocontainers/auspice
.. _`auspice/tags`: https://quay.io/repository/biocontainers/auspice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/auspice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/auspice/README.html