:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourmash'
.. highlight: bash

sourmash
========

.. conda:recipe:: sourmash
   :replaces_section_title:

   Compute and compare MinHash signatures for DNA data sets.

   :homepage: https://github.com/dib-lab/sourmash
   :license: BSD / BSD License
   :recipe: /`sourmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.00027`

   


.. conda:package:: sourmash

   |downloads_sourmash| |docker_sourmash|

   :versions: 2.0.0a11-0, 2.0.0a10-0, 2.0.0a9-0, 2.0.0a8-2, 2.0.0a8-1, 2.0.0a8-0, 2.0.0a7-0, 2.0.0a6-0, 2.0.0a5-0, 2.0.0a4-0, 2.0.0a3-0, 2.0.0a2-0, 2.0.0a1-3, 2.0.0a1-2, 2.0.0a1-1, 2.0.0a1-0, 1.0-0
   
   :depends ijson: 
   
   :depends khmer: >=2.1
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :depends screed: >=0.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sourmash

   and update with::

      conda update sourmash

   or use the docker container::

      docker pull quay.io/biocontainers/sourmash:<tag>

   (see `sourmash/tags`_ for valid values for ``<tag>``)


.. |downloads_sourmash| image:: https://img.shields.io/conda/dn/bioconda/sourmash.svg?style=flat
   :alt:   (downloads)
.. |docker_sourmash| image:: https://quay.io/repository/biocontainers/sourmash/status
   :target: https://quay.io/repository/biocontainers/sourmash
.. _`sourmash/tags`: https://quay.io/repository/biocontainers/sourmash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourmash/README.html