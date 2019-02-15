:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'randfold'
.. highlight: bash

randfold
========

.. conda:recipe:: randfold
   :replaces_section_title:

   Minimum free energy of folding randomization test software

   :homepage: http://bioinformatics.psb.ugent.be/software/details/Randfold
   :license: GNU GPLv2
   :recipe: /`randfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/randfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/randfold/meta.yaml>`_
   :links: biotools: :biotools:`randfold`, doi: :doi:`10.1093/bioinformatics/bth374`

   


.. conda:package:: randfold

   |downloads_randfold| |docker_randfold|

   :versions: 2.0.1-1, 2.0.1-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install randfold

   and update with::

      conda update randfold

   or use the docker container::

      docker pull quay.io/repository/biocontainers/randfold:<tag>

   (see `randfold/tags`_ for valid values for ``<tag>``)


.. |downloads_randfold| image:: https://img.shields.io/conda/dn/bioconda/randfold.svg?style=flat
   :alt:   (downloads)
.. |docker_randfold| image:: https://quay.io/repository/biocontainers/randfold/status
   :target: https://quay.io/repository/biocontainers/randfold
.. _`randfold/tags`: https://quay.io/repository/biocontainers/randfold?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/randfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/randfold/README.html