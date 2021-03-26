:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malder'
.. highlight: bash

malder
======

.. conda:recipe:: malder
   :replaces_section_title:
   :noindex:

   MALDER is a version of ALDER \(http\:\/\/groups.csail.mit.edu\/cb\/alder\/\) that has been modified to allow multiple admixture events.

   :homepage: https://github.com/joepickrell/malder
   :license: Custom OSS
   :recipe: /`malder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1313787111`

   


.. conda:package:: malder

   |downloads_malder| |docker_malder|

   :versions:
      
      

      ``1.0.1e83d4e-2``,  ``1.0.1e83d4e-1``,  ``1.0.1e83d4e-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.3.9,<4.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends liblapacke: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install malder

   and update with::

      conda update malder

   or use the docker container::

      docker pull quay.io/biocontainers/malder:<tag>

   (see `malder/tags`_ for valid values for ``<tag>``)


.. |downloads_malder| image:: https://img.shields.io/conda/dn/bioconda/malder.svg?style=flat
   :target: https://anaconda.org/bioconda/malder
   :alt:   (downloads)
.. |docker_malder| image:: https://quay.io/repository/biocontainers/malder/status
   :target: https://quay.io/repository/biocontainers/malder
.. _`malder/tags`: https://quay.io/repository/biocontainers/malder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malder/README.html