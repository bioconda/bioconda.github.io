:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alder'
.. highlight: bash

alder
=====

.. conda:recipe:: alder
   :replaces_section_title:

   The ALDER software computes the weighted linkage disequilibrium \(LD\) statistic for making inference about population admixture

   :homepage: http://cb.csail.mit.edu/cb/alder/
   :license: Custom OSS
   :recipe: /`alder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alder/meta.yaml>`_
   :links: biotools: :biotools:`alder`, doi: :doi:`10.1534/genetics.112.147330`

   


.. conda:package:: alder

   |downloads_alder| |docker_alder|

   :versions: 1.03-0
   
   :depends fftw: 
   
   :depends lapack: 
   
   :depends libcxx: 4.0.*
   
   :depends openmp: 4.0.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alder

   and update with::

      conda update alder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/alder:<tag>

   (see `alder/tags`_ for valid values for ``<tag>``)


.. |downloads_alder| image:: https://img.shields.io/conda/dn/bioconda/alder.svg?style=flat
   :alt:   (downloads)
.. |docker_alder| image:: https://quay.io/repository/biocontainers/alder/status
   :target: https://quay.io/repository/biocontainers/alder
.. _`alder/tags`: https://quay.io/repository/biocontainers/alder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alder/README.html