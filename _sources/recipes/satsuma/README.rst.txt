:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'satsuma2'
.. highlight: bash

satsuma2
========

.. conda:recipe:: satsuma
   :replaces_section_title:

   FFT cross\-correlation based synteny aligner\, \(re\)designed to make full use of parallel computing

   :homepage: https://github.com/bioinfologics/satsuma2
   :license: GPL3
   :recipe: /`satsuma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma/meta.yaml>`_

   


.. conda:package:: satsuma2

   |downloads_satsuma2| |docker_satsuma2|

   :versions: 20161123-1, 20161123-0
   
   :depends libgcc-ng: >=7.2.0
   :depends libstdcxx-ng: >=7.2.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install satsuma2

   and update with::

      conda update satsuma2

   or use the docker container::

      docker pull quay.io/biocontainers/satsuma2:<tag>

   (see `satsuma2/tags`_ for valid values for ``<tag>``)


.. |downloads_satsuma2| image:: https://img.shields.io/conda/dn/bioconda/satsuma2.svg?style=flat
   :alt:   (downloads)
.. |docker_satsuma2| image:: https://quay.io/repository/biocontainers/satsuma2/status
   :target: https://quay.io/repository/biocontainers/satsuma2
.. _`satsuma2/tags`: https://quay.io/repository/biocontainers/satsuma2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/satsuma2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/satsuma2/README.html