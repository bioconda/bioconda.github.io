:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightstringgraph'
.. highlight: bash

lightstringgraph
================

.. conda:recipe:: lightstringgraph
   :replaces_section_title:
   :noindex:

   LightStringGraphs \(LSG\) is an external memory string graph construction tool.

   :homepage: http://lsg.algolab.eu
   :license: GPL-3
   :recipe: /`lightstringgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph/meta.yaml>`_
   :links: biotools: :biotools:`lightstringgraph`, doi: :doi:`10.1007/978-3-662-44753-6_23`

   


.. conda:package:: lightstringgraph

   |downloads_lightstringgraph| |docker_lightstringgraph|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends boost: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lightstringgraph

   and update with::

      conda update lightstringgraph

   or use the docker container::

      docker pull quay.io/biocontainers/lightstringgraph:<tag>

   (see `lightstringgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_lightstringgraph| image:: https://img.shields.io/conda/dn/bioconda/lightstringgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/lightstringgraph
   :alt:   (downloads)
.. |docker_lightstringgraph| image:: https://quay.io/repository/biocontainers/lightstringgraph/status
   :target: https://quay.io/repository/biocontainers/lightstringgraph
.. _`lightstringgraph/tags`: https://quay.io/repository/biocontainers/lightstringgraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightstringgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightstringgraph/README.html