:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funnel'
.. highlight: bash

funnel
======

.. conda:recipe:: funnel
   :replaces_section_title:

   Funnel is a toolkit for distributed task execution via a simple\, standard API

   :homepage: https://ohsu-comp-bio.github.io/funnel/
   :license: MIT
   :recipe: /`funnel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funnel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funnel/meta.yaml>`_

   


.. conda:package:: funnel

   |downloads_funnel| |docker_funnel|

   :versions: 0.9.0-0, 0.5.0-1, 0.5.0-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install funnel

   and update with::

      conda update funnel

   or use the docker container::

      docker pull quay.io/biocontainers/funnel:<tag>

   (see `funnel/tags`_ for valid values for ``<tag>``)


.. |downloads_funnel| image:: https://img.shields.io/conda/dn/bioconda/funnel.svg?style=flat
   :target: https://anaconda.org/bioconda/funnel
   :alt:   (downloads)
.. |docker_funnel| image:: https://quay.io/repository/biocontainers/funnel/status
   :target: https://quay.io/repository/biocontainers/funnel
.. _`funnel/tags`: https://quay.io/repository/biocontainers/funnel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funnel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funnel/README.html