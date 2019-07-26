:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiz'
.. highlight: bash

multiz
======

.. conda:recipe:: multiz
   :replaces_section_title:

   DNA multiple sequence aligner from Penn State\'s Miller lab.

   :homepage: http://www.bx.psu.edu/miller_lab/
   :license: MIT
   :recipe: /`multiz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiz/meta.yaml>`_
   :links: biotools: :biotools:`multiz`, biotools: :biotools:`tba`, biotools: :biotools:`roast`

   


.. conda:package:: multiz

   |downloads_multiz| |docker_multiz|

   :versions: 11.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiz

   and update with::

      conda update multiz

   or use the docker container::

      docker pull quay.io/biocontainers/multiz:<tag>

   (see `multiz/tags`_ for valid values for ``<tag>``)


.. |downloads_multiz| image:: https://img.shields.io/conda/dn/bioconda/multiz.svg?style=flat
   :target: https://anaconda.org/bioconda/multiz
   :alt:   (downloads)
.. |docker_multiz| image:: https://quay.io/repository/biocontainers/multiz/status
   :target: https://quay.io/repository/biocontainers/multiz
.. _`multiz/tags`: https://quay.io/repository/biocontainers/multiz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiz/README.html