:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gplas'
.. highlight: bash

gplas
=====

.. conda:recipe:: gplas
   :replaces_section_title:
   :noindex:

   gplas is a tool to bin plasmid\-predicted contigs based on sequence composition\, coverage and assembly graph information. It extends the possibility of accurately binning predicted plasmid contigs into several discrete plasmid components.

   :homepage: https://gitlab.com/sirarredondo/gplas
   :license: GPL3.0
   :recipe: /`gplas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas/meta.yaml>`_

   


.. conda:package:: gplas

   |downloads_gplas| |docker_gplas|

   :versions:
      
      

      ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends python: ``>=3.6``
   :depends snakemake: ``>=5.5.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gplas

   and update with::

      conda update gplas

   or use the docker container::

      docker pull quay.io/biocontainers/gplas:<tag>

   (see `gplas/tags`_ for valid values for ``<tag>``)


.. |downloads_gplas| image:: https://img.shields.io/conda/dn/bioconda/gplas.svg?style=flat
   :target: https://anaconda.org/bioconda/gplas
   :alt:   (downloads)
.. |docker_gplas| image:: https://quay.io/repository/biocontainers/gplas/status
   :target: https://quay.io/repository/biocontainers/gplas
.. _`gplas/tags`: https://quay.io/repository/biocontainers/gplas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gplas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gplas/README.html