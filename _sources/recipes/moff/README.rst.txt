:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moff'
.. highlight: bash

moff
====

.. conda:recipe:: moff
   :replaces_section_title:

   moFF is an OS independent tool designed to extract apex MS1 intensity using a set of identified MS2 peptides.

   :homepage: https://github.com/compomics/moFF
   :license: Apache 2.0
   :recipe: /`moff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moff/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.8b00708`

   


.. conda:package:: moff

   |downloads_moff| |docker_moff|

   :versions: 2.0.2-1, 2.0.2-0, 2.0.1-0, 1.2.1-1, 1.2.1-0, 1.2-0, 1.1-0
   
   :depends brain-isotopic-distribution: 
   
   :depends mono: 
   
   :depends numpy: >=1.15
   
   :depends pandas: >=0.23
   
   :depends pymzml: >=2.0.6
   
   :depends pyteomics: >=3.5
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends scikit-learn: >0.19
   
   :depends scipy: >=1.1
   
   :depends simplejson: >=3.16.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moff

   and update with::

      conda update moff

   or use the docker container::

      docker pull quay.io/biocontainers/moff:<tag>

   (see `moff/tags`_ for valid values for ``<tag>``)


.. |downloads_moff| image:: https://img.shields.io/conda/dn/bioconda/moff.svg?style=flat
   :alt:   (downloads)
.. |docker_moff| image:: https://quay.io/repository/biocontainers/moff/status
   :target: https://quay.io/repository/biocontainers/moff
.. _`moff/tags`: https://quay.io/repository/biocontainers/moff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moff/README.html