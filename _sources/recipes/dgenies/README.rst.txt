:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dgenies'
.. highlight: bash

dgenies
=======

.. conda:recipe:: dgenies
   :replaces_section_title:

   Dotplot large Genomes in an Interactive\, Efficient and Simple way

   :homepage: http://dgenies.toulouse.inra.fr
   :documentation: http://dgenies.toulouse.inra.fr/
   
   :developer docs: https://github.com/genotoul-bioinfo/dgenies
   :license: GPL / GPL-3
   :recipe: /`dgenies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies/meta.yaml>`_

   


.. conda:package:: dgenies

   |downloads_dgenies| |docker_dgenies|

   :versions: 1.2.0.1-0
   
   :depends argparse: 
   :depends biopython: 
   :depends flask: 
   :depends intervaltree: 
   :depends jinja2: 
   :depends markdown: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends psutil: 
   :depends python: >=3.5
   :depends python-crontab: 
   :depends pyyaml: 
   :depends requests: 
   :depends tendo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dgenies

   and update with::

      conda update dgenies

   or use the docker container::

      docker pull quay.io/biocontainers/dgenies:<tag>

   (see `dgenies/tags`_ for valid values for ``<tag>``)


.. |downloads_dgenies| image:: https://img.shields.io/conda/dn/bioconda/dgenies.svg?style=flat
   :target: https://anaconda.org/bioconda/dgenies
   :alt:   (downloads)
.. |docker_dgenies| image:: https://quay.io/repository/biocontainers/dgenies/status
   :target: https://quay.io/repository/biocontainers/dgenies
.. _`dgenies/tags`: https://quay.io/repository/biocontainers/dgenies?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dgenies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dgenies/README.html