:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'searchgui'
.. highlight: bash

searchgui
=========

.. conda:recipe:: searchgui
   :replaces_section_title:

   User\-friendly graphical tool for using proteomics identification search engines

   :homepage: https://github.com/compomics/searchgui
   :license: APACHE / Apache License 2.0
   :recipe: /`searchgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui/meta.yaml>`_
   :links: biotools: :biotools:`searchgui`, doi: :doi:`10.1002/pmic.201000595`

   SearchGUI is a user\-friendly open\-source graphical user interface for configuring and running proteomics identification search engines\, currently supporting X\!Tandem\, MS\-GF\+\, MS Amanda\, MyriMatch\, Comet\, Tide\, Andromeda and OMSSA.



.. conda:package:: searchgui

   |downloads_searchgui| |docker_searchgui|

   :versions: 4.0.1.alpha-0, 3.3.10-0, 3.3.9-1, 3.3.9-0, 3.3.6-1, 3.3.5-1, 3.3.3-1, 3.3.1-1, 3.3.1-0, 3.2.26-0, 3.2.24-0, 3.2.20-0, 3.2.13-1, 3.2.13-0, 3.2.11-1, 3.2.11-0, 3.2.8-1, 3.2.8-0, 3.2.7-1, 3.2.7-0, 3.2.6-1, 3.2.6-0, 3.2.5-1, 3.2.5-0, 3.2.3-1, 3.2.3-0, 3.1.4-2, 3.1.4-1, 3.1.4-0, 2.9.0-2, 2.9.0-1, 2.9.0-0, 2.1.4-3, 2.1.4-2, 2.1.4-1, 2.1.4-0
   
   :depends libgcc-ng: >=7.3.0
   :depends mono: >=4.0.0
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install searchgui

   and update with::

      conda update searchgui

   or use the docker container::

      docker pull quay.io/biocontainers/searchgui:<tag>

   (see `searchgui/tags`_ for valid values for ``<tag>``)


.. |downloads_searchgui| image:: https://img.shields.io/conda/dn/bioconda/searchgui.svg?style=flat
   :target: https://anaconda.org/bioconda/searchgui
   :alt:   (downloads)
.. |docker_searchgui| image:: https://quay.io/repository/biocontainers/searchgui/status
   :target: https://quay.io/repository/biocontainers/searchgui
.. _`searchgui/tags`: https://quay.io/repository/biocontainers/searchgui?tab=tags






Notes
-----
SearchGUI is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"searchgui \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/searchgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/searchgui/README.html