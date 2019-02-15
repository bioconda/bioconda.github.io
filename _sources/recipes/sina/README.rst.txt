:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sina'
.. highlight: bash

sina
====

.. conda:recipe:: sina
   :replaces_section_title:

   SINA is a tool for aligning sequences with an existing multiple sequence
   alignment \(MSA\) at high accuracy. It can also execute a homology search based
   on the computed alignment and generate a per sequence classifications from the
   search results.

   :homepage: https://github.com/epruesse/SINA
   :license: GPL / GPLv3
   :recipe: /`sina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina/meta.yaml>`_

   


.. conda:package:: sina

   |downloads_sina| |docker_sina|

   :versions: 1.4.0-0, 1.3.5-2, 1.3.4-2, 1.3.1-2, 1.3.1-0, 1.3.0-0
   
   :depends arb-bio-tools: 
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends tbb: >=2019.2
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sina

   and update with::

      conda update sina

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sina:<tag>

   (see `sina/tags`_ for valid values for ``<tag>``)


.. |downloads_sina| image:: https://img.shields.io/conda/dn/bioconda/sina.svg?style=flat
   :alt:   (downloads)
.. |docker_sina| image:: https://quay.io/repository/biocontainers/sina/status
   :target: https://quay.io/repository/biocontainers/sina
.. _`sina/tags`: https://quay.io/repository/biocontainers/sina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sina/README.html