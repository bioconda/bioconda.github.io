:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spydrpick'
.. highlight: bash

spydrpick
=========

.. conda:recipe:: spydrpick
   :replaces_section_title:

   Mutual information based detection of pairs of genomic loci co\-evolving under a shared selective pressure

   :homepage: https://github.com/santeripuranen/SpydrPick
   :license: GNU Affero General Public License
   :recipe: /`spydrpick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spydrpick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spydrpick/meta.yaml>`_
   :links: doi: :doi:`10.1101/523407`

   


.. conda:package:: spydrpick

   |downloads_spydrpick| |docker_spydrpick|

   :versions: 1.1.1-0, 1.1.0-0, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pthread-stubs: 
   :depends tbb: >=2019.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spydrpick

   and update with::

      conda update spydrpick

   or use the docker container::

      docker pull quay.io/biocontainers/spydrpick:<tag>

   (see `spydrpick/tags`_ for valid values for ``<tag>``)


.. |downloads_spydrpick| image:: https://img.shields.io/conda/dn/bioconda/spydrpick.svg?style=flat
   :target: https://anaconda.org/bioconda/spydrpick
   :alt:   (downloads)
.. |docker_spydrpick| image:: https://quay.io/repository/biocontainers/spydrpick/status
   :target: https://quay.io/repository/biocontainers/spydrpick
.. _`spydrpick/tags`: https://quay.io/repository/biocontainers/spydrpick?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spydrpick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spydrpick/README.html