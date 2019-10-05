:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepnovo'
.. highlight: bash

pepnovo
=======

.. conda:recipe:: pepnovo
   :replaces_section_title:

   PepNovo serves as a high throughput de novo peptide sequencing tool for tandem mass spectrometry data

   :homepage: http://proteomics.ucsd.edu/Software/PepNovo/
   :license: BSD
   :recipe: /`pepnovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo/meta.yaml>`_
   :links: biotools: :biotools:`pepnovo`

   


.. conda:package:: pepnovo

   |downloads_pepnovo| |docker_pepnovo|

   :versions: 20101117-1, 20101117-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pepnovo

   and update with::

      conda update pepnovo

   or use the docker container::

      docker pull quay.io/biocontainers/pepnovo:<tag>

   (see `pepnovo/tags`_ for valid values for ``<tag>``)


.. |downloads_pepnovo| image:: https://img.shields.io/conda/dn/bioconda/pepnovo.svg?style=flat
   :target: https://anaconda.org/bioconda/pepnovo
   :alt:   (downloads)
.. |docker_pepnovo| image:: https://quay.io/repository/biocontainers/pepnovo/status
   :target: https://quay.io/repository/biocontainers/pepnovo
.. _`pepnovo/tags`: https://quay.io/repository/biocontainers/pepnovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepnovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepnovo/README.html