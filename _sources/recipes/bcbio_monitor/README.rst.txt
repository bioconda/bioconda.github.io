:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio_monitor'
.. highlight: bash

bcbio_monitor
=============

.. conda:recipe:: bcbio_monitor
   :replaces_section_title:

   bcbio\-monitor is an extension of bcbio\-nextgen to visualize its progress

   :homepage: https://github.com/guillermo-carrasco/bcbio-nextgen-monitor
   :license: MIT
   :recipe: /`bcbio_monitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor/meta.yaml>`_

   


.. conda:package:: bcbio_monitor

   |downloads_bcbio_monitor| |docker_bcbio_monitor|

   :versions: 1.0.6-3, 1.0.6-2, 1.0.6-0, 1.0.2-0
   
   :depends dateutil: 
   
   :depends flask: >=0.10.1
   
   :depends gevent: >=1.0
   
   :depends paramiko: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-graphviz: 
   
   :depends pytz: 
   
   :depends pyyaml: 
   
   :depends requests: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio_monitor

   and update with::

      conda update bcbio_monitor

   or use the docker container::

      docker pull quay.io/biocontainers/bcbio_monitor:<tag>

   (see `bcbio_monitor/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio_monitor| image:: https://img.shields.io/conda/dn/bioconda/bcbio_monitor.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio_monitor| image:: https://quay.io/repository/biocontainers/bcbio_monitor/status
   :target: https://quay.io/repository/biocontainers/bcbio_monitor
.. _`bcbio_monitor/tags`: https://quay.io/repository/biocontainers/bcbio_monitor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio_monitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio_monitor/README.html