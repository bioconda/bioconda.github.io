:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgkit'
.. highlight: bash

mgkit
=====

.. conda:recipe:: mgkit
   :replaces_section_title:

   Metagenomics Framework

   :homepage: https://bitbucket.org/setsuna80/mgkit/
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`mgkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit/meta.yaml>`_
   :links: biotools: :biotools:`mgkit`, doi: :doi:`10.6084/m9.figshare.1588384`

   


.. conda:package:: mgkit

   |downloads_mgkit| |docker_mgkit|

   :versions: 0.3.4-0, 0.3.3-0, 0.3.0-0, 0.2.2-0
   
   :depends click: 
   :depends enum34: 
   :depends future: 
   :depends htseq: >=0.6.0
   :depends matplotlib: >=2
   :depends msgpack-python: >=0.4.6
   :depends numpy: >=1.9.2
   :depends pandas: >=0.18
   :depends progressbar2: 
   :depends pymongo: >=3.1.1
   :depends pysam: >=0.8.2.1
   :depends pytables: >=3.4.2
   :depends python: >=2.7,<2.8.0a0
   :depends requests: 
   :depends scipy: >=0.15.1
   :depends semidbm: >=0.5.1
   :depends statsmodels: >=0.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgkit

   and update with::

      conda update mgkit

   or use the docker container::

      docker pull quay.io/biocontainers/mgkit:<tag>

   (see `mgkit/tags`_ for valid values for ``<tag>``)


.. |downloads_mgkit| image:: https://img.shields.io/conda/dn/bioconda/mgkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mgkit
   :alt:   (downloads)
.. |docker_mgkit| image:: https://quay.io/repository/biocontainers/mgkit/status
   :target: https://quay.io/repository/biocontainers/mgkit
.. _`mgkit/tags`: https://quay.io/repository/biocontainers/mgkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgkit/README.html