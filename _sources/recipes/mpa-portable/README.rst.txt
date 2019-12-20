:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpa-portable'
.. highlight: bash

mpa-portable
============

.. conda:recipe:: mpa-portable
   :replaces_section_title:

   MPA Portable is a light\-weight and stand\-alone software for the identification of proteins and in\-depth analysis of metaproteomics \(and also proteomics\) data.

   :homepage: https://github.com/compomics/meta-proteome-analyzer
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`mpa-portable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable/meta.yaml>`_

   


.. conda:package:: mpa-portable

   |downloads_mpa-portable| |docker_mpa-portable|

   :versions: 2.0.0-0, 1.9.0-0, 1.4.1-2, 1.4.1-1, 1.4.1-0
   
   :depends openjdk: >=6
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mpa-portable

   and update with::

      conda update mpa-portable

   or use the docker container::

      docker pull quay.io/biocontainers/mpa-portable:<tag>

   (see `mpa-portable/tags`_ for valid values for ``<tag>``)


.. |downloads_mpa-portable| image:: https://img.shields.io/conda/dn/bioconda/mpa-portable.svg?style=flat
   :target: https://anaconda.org/bioconda/mpa-portable
   :alt:   (downloads)
.. |docker_mpa-portable| image:: https://quay.io/repository/biocontainers/mpa-portable/status
   :target: https://quay.io/repository/biocontainers/mpa-portable
.. _`mpa-portable/tags`: https://quay.io/repository/biocontainers/mpa-portable?tab=tags






Notes
-----
mpa\-protable is Java program that comes with a custom wrapper Python script.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpa-portable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpa-portable/README.html