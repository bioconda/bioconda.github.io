:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micropita'
.. highlight: bash

micropita
=========

.. conda:recipe:: micropita
   :replaces_section_title:

   microPITA is a computational tool enabling sample selection in two\-stage \(tiered\) studies.

   :homepage: http://huttenhower.sph.harvard.edu/micropita
   :license: MIT / MIT
   :recipe: /`micropita <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita/meta.yaml>`_
   :links: biotools: :biotools:`micropita`, doi: :doi:`10.1038/ismej.2013.139`

   


.. conda:package:: micropita

   |downloads_micropita| |docker_micropita|

   :versions: 1.1.0-1, 1.1.0-0
   
   :depends biom-format: 
   :depends blist: 
   :depends cogent: 
   :depends machine-learning-py: 
   :depends mpi4py: 
   :depends numpy: 
   :depends python: <3
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install micropita

   and update with::

      conda update micropita

   or use the docker container::

      docker pull quay.io/biocontainers/micropita:<tag>

   (see `micropita/tags`_ for valid values for ``<tag>``)


.. |downloads_micropita| image:: https://img.shields.io/conda/dn/bioconda/micropita.svg?style=flat
   :target: https://anaconda.org/bioconda/micropita
   :alt:   (downloads)
.. |docker_micropita| image:: https://quay.io/repository/biocontainers/micropita/status
   :target: https://quay.io/repository/biocontainers/micropita
.. _`micropita/tags`: https://quay.io/repository/biocontainers/micropita?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micropita/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micropita/README.html