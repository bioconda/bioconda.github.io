:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykrobe'
.. highlight: bash

mykrobe
=======

.. conda:recipe:: mykrobe
   :replaces_section_title:

   Rapid antibiotic\-resistance predictions from genome sequence data for Staphylococcus aureus and Mycobacterium tuberculosis.

   :homepage: https://github.com/Mykrobe-tools/mykrobe
   :license: MIT
   :recipe: /`mykrobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe/meta.yaml>`_

   


.. conda:package:: mykrobe

   |downloads_mykrobe| |docker_mykrobe|

   :versions: 0.6.1-0, 0.5.6-1, 0.5.6-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends mongodb: >3.0
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends wget: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mykrobe

   and update with::

      conda update mykrobe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mykrobe:<tag>

   (see `mykrobe/tags`_ for valid values for ``<tag>``)


.. |downloads_mykrobe| image:: https://img.shields.io/conda/dn/bioconda/mykrobe.svg?style=flat
   :alt:   (downloads)
.. |docker_mykrobe| image:: https://quay.io/repository/biocontainers/mykrobe/status
   :target: https://quay.io/repository/biocontainers/mykrobe
.. _`mykrobe/tags`: https://quay.io/repository/biocontainers/mykrobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykrobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykrobe/README.html