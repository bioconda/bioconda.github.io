:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatscout'
.. highlight: bash

repeatscout
===========

.. conda:recipe:: repeatscout
   :replaces_section_title:

   De novo identification of repeat families in large genomes.

   :homepage: http://repeatscout.bioprojects.org
   :license: GNU General Public License
   :recipe: /`repeatscout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatscout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatscout/meta.yaml>`_

   


.. conda:package:: repeatscout

   |downloads_repeatscout| |docker_repeatscout|

   :versions: 1.0.5-1, 1.0.5-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repeatscout

   and update with::

      conda update repeatscout

   or use the docker container::

      docker pull quay.io/biocontainers/repeatscout:<tag>

   (see `repeatscout/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatscout| image:: https://img.shields.io/conda/dn/bioconda/repeatscout.svg?style=flat
   :alt:   (downloads)
.. |docker_repeatscout| image:: https://quay.io/repository/biocontainers/repeatscout/status
   :target: https://quay.io/repository/biocontainers/repeatscout
.. _`repeatscout/tags`: https://quay.io/repository/biocontainers/repeatscout?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatscout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatscout/README.html