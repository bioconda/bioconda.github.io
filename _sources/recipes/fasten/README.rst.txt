:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasten'
.. highlight: bash

fasten
======

.. conda:recipe:: fasten
   :replaces_section_title:
   :noindex:

   Perform random operations on fastq files\, using unix streaming. Secure your analysis with Fasten\!

   :homepage: https://github.com/lskatz/fasten
   :license: MIT
   :recipe: /`fasten <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten/meta.yaml>`_

   


.. conda:package:: fasten

   |downloads_fasten| |docker_fasten|

   :versions:
      
      

      ``0.1.13-2``,  ``0.1.13-1``,  ``0.1.13-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fasten

   and update with::

      conda update fasten

   or use the docker container::

      docker pull quay.io/biocontainers/fasten:<tag>

   (see `fasten/tags`_ for valid values for ``<tag>``)


.. |downloads_fasten| image:: https://img.shields.io/conda/dn/bioconda/fasten.svg?style=flat
   :target: https://anaconda.org/bioconda/fasten
   :alt:   (downloads)
.. |docker_fasten| image:: https://quay.io/repository/biocontainers/fasten/status
   :target: https://quay.io/repository/biocontainers/fasten
.. _`fasten/tags`: https://quay.io/repository/biocontainers/fasten?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasten/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasten/README.html