:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swalign'
.. highlight: bash

swalign
=======

.. conda:recipe:: swalign
   :replaces_section_title:

   Smith\-Waterman local aligner

   :homepage: http://github.com/mbreese/swalign/
   :license: BSD
   :recipe: /`swalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swalign/meta.yaml>`_

   


.. conda:package:: swalign

   |downloads_swalign| |docker_swalign|

   :versions: 0.3.4-0, 0.3.3-2, 0.3.3-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swalign

   and update with::

      conda update swalign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/swalign:<tag>

   (see `swalign/tags`_ for valid values for ``<tag>``)


.. |downloads_swalign| image:: https://img.shields.io/conda/dn/bioconda/swalign.svg?style=flat
   :alt:   (downloads)
.. |docker_swalign| image:: https://quay.io/repository/biocontainers/swalign/status
   :target: https://quay.io/repository/biocontainers/swalign
.. _`swalign/tags`: https://quay.io/repository/biocontainers/swalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swalign/README.html