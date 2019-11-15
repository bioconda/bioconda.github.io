:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samplot'
.. highlight: bash

samplot
=======

.. conda:recipe:: samplot
   :replaces_section_title:

   Plot structural variant signals from BAMs and CRAMs.

   :homepage: https://github.com/jbelyeu/samplot
   :license: MIT
   :recipe: /`samplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot/meta.yaml>`_

   


.. conda:package:: samplot

   |downloads_samplot| |docker_samplot|

   :versions: 1.0.9-0, 1.0.1-0
   
   :depends matplotlib: 
   :depends numpy: 
   :depends pip: 
   :depends pysam: >=0.15.2
   :depends python: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samplot

   and update with::

      conda update samplot

   or use the docker container::

      docker pull quay.io/biocontainers/samplot:<tag>

   (see `samplot/tags`_ for valid values for ``<tag>``)


.. |downloads_samplot| image:: https://img.shields.io/conda/dn/bioconda/samplot.svg?style=flat
   :target: https://anaconda.org/bioconda/samplot
   :alt:   (downloads)
.. |docker_samplot| image:: https://quay.io/repository/biocontainers/samplot/status
   :target: https://quay.io/repository/biocontainers/samplot
.. _`samplot/tags`: https://quay.io/repository/biocontainers/samplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samplot/README.html