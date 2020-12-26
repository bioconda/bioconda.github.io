:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hail'
.. highlight: bash

hail
====

.. conda:recipe:: hail
   :replaces_section_title:
   :noindex:

   Hail is Python\-based data analysis tool for working with genomic data.


   :homepage: https://hail.is
   :developer docs: https://github.com/hail-is/hail
   :license: MIT
   :recipe: /`hail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail/meta.yaml>`_

   


.. conda:package:: hail

   |downloads_hail| |docker_hail|

   :versions:
      
      

      ``0.2.61-0``,  ``0.2.58-0``,  ``0.2.33-1``,  ``0.2.33-0``

      

   
   :depends aiohttp: 
   :depends aiohttp-session: 
   :depends bokeh: ``>1.1,<1.3``
   :depends decorator: ``<5``
   :depends deprecated: 
   :depends gcsfs: ``0.2.1``
   :depends humanize: 
   :depends hurry.filesize: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends nest-asyncio: 
   :depends openjdk: ``8.*``
   :depends parsimonious: 
   :depends pyjwt: 
   :depends pyspark: ``>=2.4,<2.4.2``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-json-logger: ``0.1.11``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends requests: 
   :depends scipy: 
   :depends tabulate: ``0.8.3``
   :depends tqdm: ``4.42.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hail

   and update with::

      conda update hail

   or use the docker container::

      docker pull quay.io/biocontainers/hail:<tag>

   (see `hail/tags`_ for valid values for ``<tag>``)


.. |downloads_hail| image:: https://img.shields.io/conda/dn/bioconda/hail.svg?style=flat
   :target: https://anaconda.org/bioconda/hail
   :alt:   (downloads)
.. |docker_hail| image:: https://quay.io/repository/biocontainers/hail/status
   :target: https://quay.io/repository/biocontainers/hail
.. _`hail/tags`: https://quay.io/repository/biocontainers/hail?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hail/README.html