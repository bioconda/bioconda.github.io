:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rfmix'
.. highlight: bash

rfmix
=====

.. conda:recipe:: rfmix
   :replaces_section_title:

   RFMix implements a fast discriminative approach to modeling ancestry along an admixed chromosome given observed haplotype sequences of known or inferred ancestry.

   :homepage: https://github.com/slowkoni/rfmix
   :license: Free for Academic Use
   :recipe: /`rfmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix/meta.yaml>`_
   :links: biotools: :biotools:`RFMix`, doi: :doi:`10.1016/j.ajhg.2013.06.020`

   


.. conda:package:: rfmix

   |downloads_rfmix| |docker_rfmix|

   :versions: 2.03.r0.9505bfa-0
   
   :depends pthread-stubs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rfmix

   and update with::

      conda update rfmix

   or use the docker container::

      docker pull quay.io/biocontainers/rfmix:<tag>

   (see `rfmix/tags`_ for valid values for ``<tag>``)


.. |downloads_rfmix| image:: https://img.shields.io/conda/dn/bioconda/rfmix.svg?style=flat
   :target: https://anaconda.org/bioconda/rfmix
   :alt:   (downloads)
.. |docker_rfmix| image:: https://quay.io/repository/biocontainers/rfmix/status
   :target: https://quay.io/repository/biocontainers/rfmix
.. _`rfmix/tags`: https://quay.io/repository/biocontainers/rfmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rfmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rfmix/README.html