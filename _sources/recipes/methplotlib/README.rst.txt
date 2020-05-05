:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methplotlib'
.. highlight: bash

methplotlib
===========

.. conda:recipe:: methplotlib
   :replaces_section_title:

   Plot methylation data obtained from nanopolish

   :homepage: https://github.com/wdecoster/methplotlib
   :license: MIT / MIT
   :recipe: /`methplotlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methplotlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methplotlib/meta.yaml>`_

   


.. conda:package:: methplotlib

   |downloads_methplotlib| |docker_methplotlib|

   :versions: 0.14.0-0, 0.13.1-0, 0.13.0-0, 0.12.0-0, 0.8.0-0, 0.7.0-0, 0.6.0-0, 0.4.0-0
   
   :depends biopython: 
   :depends fisher: >=0.1.9
   :depends numpy: >=1.14.3
   :depends pandas: >=0.23.4
   :depends plotly: >=4.1.1
   :depends pyfaidx: 
   :depends pyranges: >=0.0.63
   :depends pysam: 
   :depends python: >=3
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methplotlib

   and update with::

      conda update methplotlib

   or use the docker container::

      docker pull quay.io/biocontainers/methplotlib:<tag>

   (see `methplotlib/tags`_ for valid values for ``<tag>``)


.. |downloads_methplotlib| image:: https://img.shields.io/conda/dn/bioconda/methplotlib.svg?style=flat
   :target: https://anaconda.org/bioconda/methplotlib
   :alt:   (downloads)
.. |docker_methplotlib| image:: https://quay.io/repository/biocontainers/methplotlib/status
   :target: https://quay.io/repository/biocontainers/methplotlib
.. _`methplotlib/tags`: https://quay.io/repository/biocontainers/methplotlib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methplotlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methplotlib/README.html