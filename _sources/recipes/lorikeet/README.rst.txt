:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet'
.. highlight: bash

lorikeet
========

.. conda:recipe:: lorikeet
   :replaces_section_title:

   Tool for digital spoligotyping of MTB strains from Illumina read data

   :homepage: https://github.com/AbeelLab/lorikeet
   :license: GPL / GPL-3
   :recipe: /`lorikeet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pmed.1001880`

   


.. conda:package:: lorikeet

   |downloads_lorikeet| |docker_lorikeet|

   :versions: 20-0, 19-0, 17-0
   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lorikeet

   and update with::

      conda update lorikeet

   or use the docker container::

      docker pull quay.io/biocontainers/lorikeet:<tag>

   (see `lorikeet/tags`_ for valid values for ``<tag>``)


.. |downloads_lorikeet| image:: https://img.shields.io/conda/dn/bioconda/lorikeet.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet
   :alt:   (downloads)
.. |docker_lorikeet| image:: https://quay.io/repository/biocontainers/lorikeet/status
   :target: https://quay.io/repository/biocontainers/lorikeet
.. _`lorikeet/tags`: https://quay.io/repository/biocontainers/lorikeet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet/README.html