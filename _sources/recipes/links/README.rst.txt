:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'links'
.. highlight: bash

links
=====

.. conda:recipe:: links
   :replaces_section_title:

   Long Interval Nucleotide K\-mer Scaffolder

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/links
   :license: GPLv3
   :recipe: /`links <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links/meta.yaml>`_

   


.. conda:package:: links

   |downloads_links| |docker_links|

   :versions: 1.8.6-0, 1.8.4-0, 1.5.2-0
   
   :depends libgcc-ng: >=4.9
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install links

   and update with::

      conda update links

   or use the docker container::

      docker pull quay.io/biocontainers/links:<tag>

   (see `links/tags`_ for valid values for ``<tag>``)


.. |downloads_links| image:: https://img.shields.io/conda/dn/bioconda/links.svg?style=flat
   :target: https://anaconda.org/bioconda/links
   :alt:   (downloads)
.. |docker_links| image:: https://quay.io/repository/biocontainers/links/status
   :target: https://quay.io/repository/biocontainers/links
.. _`links/tags`: https://quay.io/repository/biocontainers/links?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/links/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/links/README.html