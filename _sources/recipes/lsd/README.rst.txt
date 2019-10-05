:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsd'
.. highlight: bash

lsd
===

.. conda:recipe:: lsd
   :replaces_section_title:

   The LAPPS Grid Services DSL \(LSD\). Used to invoke LAPPS web services from the command line.

   :homepage: http://github.com/lappsgrid-incubator/org.anc.lapps.dsl
   :license: Apache v2.0
   :recipe: /`lsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsd/meta.yaml>`_

   


.. conda:package:: lsd

   |downloads_lsd| |docker_lsd|

   :versions: 2.2.3-1, 2.2.3-0
   
   :depends java-jdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lsd

   and update with::

      conda update lsd

   or use the docker container::

      docker pull quay.io/biocontainers/lsd:<tag>

   (see `lsd/tags`_ for valid values for ``<tag>``)


.. |downloads_lsd| image:: https://img.shields.io/conda/dn/bioconda/lsd.svg?style=flat
   :target: https://anaconda.org/bioconda/lsd
   :alt:   (downloads)
.. |docker_lsd| image:: https://quay.io/repository/biocontainers/lsd/status
   :target: https://quay.io/repository/biocontainers/lsd
.. _`lsd/tags`: https://quay.io/repository/biocontainers/lsd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsd/README.html