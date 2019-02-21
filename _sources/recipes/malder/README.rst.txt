:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malder'
.. highlight: bash

malder
======

.. conda:recipe:: malder
   :replaces_section_title:

   MALDER is a version of ALDER \(http\:\/\/groups.csail.mit.edu\/cb\/alder\/\) that has been modified to allow multiple admixture events.

   :homepage: https://github.com/joepickrell/malder
   :license: Custom OSS
   :recipe: /`malder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1313787111`

   


.. conda:package:: malder

   |downloads_malder| |docker_malder|

   :versions: 1.0.1e83d4e-0
   
   :depends fftw: 
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends lapack: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
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