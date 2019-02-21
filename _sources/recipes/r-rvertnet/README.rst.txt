:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rvertnet'
.. highlight: bash

r-rvertnet
==========

.. conda:recipe:: r-rvertnet
   :replaces_section_title:

   Retrieve\, map and summarize data from the \'VertNet.org\'  archives \(\<http\:\/\/vertnet.org\/\>\).  Functions allow searching by many  parameters\, including \'taxonomic\' names\, places\, and dates. In addition\,  there is an interface for conducting spatially delimited searches\, and  another for requesting large \'datasets\' via email.

   :homepage: https://github.com/ropensci/rvertnet
   :license: MIT / MIT
   :recipe: /`r-rvertnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rvertnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rvertnet/meta.yaml>`_

   


.. conda:package:: r-rvertnet

   |downloads_r-rvertnet| |docker_r-rvertnet|

   :versions: 0.7.0-3, 0.7.0-2, 0.7.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-crul: >=0.5.2
   
   :depends r-dplyr: >=0.5.0
   
   :depends r-ggplot2: 
   
   :depends r-jsonlite: >=1.5
   
   :depends r-maps: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rvertnet

   and update with::

      conda update r-rvertnet

   or use the docker container::

      docker pull quay.io/biocontainers/r-rvertnet:<tag>

   (see `r-rvertnet/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rvertnet| image:: https://img.shields.io/conda/dn/bioconda/r-rvertnet.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rvertnet| image:: https://quay.io/repository/biocontainers/r-rvertnet/status
   :target: https://quay.io/repository/biocontainers/r-rvertnet
.. _`r-rvertnet/tags`: https://quay.io/repository/biocontainers/r-rvertnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rvertnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rvertnet/README.html