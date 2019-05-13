:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xxmotif'
.. highlight: bash

xxmotif
=======

.. conda:recipe:: xxmotif
   :replaces_section_title:

   eXhaustive\, weight matriX\-based motif discovery in nucleotide sequences

   :homepage: https://github.com/soedinglab/xxmotif
   :license: GPLv3
   :recipe: /`xxmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xxmotif/meta.yaml>`_

   


.. conda:package:: xxmotif

   |downloads_xxmotif| |docker_xxmotif|

   :versions: 1.6-2, 1.6-1, 1.6-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xxmotif

   and update with::

      conda update xxmotif

   or use the docker container::

      docker pull quay.io/biocontainers/xxmotif:<tag>

   (see `xxmotif/tags`_ for valid values for ``<tag>``)


.. |downloads_xxmotif| image:: https://img.shields.io/conda/dn/bioconda/xxmotif.svg?style=flat
   :target: https://anaconda.org/bioconda/xxmotif
   :alt:   (downloads)
.. |docker_xxmotif| image:: https://quay.io/repository/biocontainers/xxmotif/status
   :target: https://quay.io/repository/biocontainers/xxmotif
.. _`xxmotif/tags`: https://quay.io/repository/biocontainers/xxmotif?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xxmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xxmotif/README.html