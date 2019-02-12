:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-quorts'
.. highlight: bash

r-quorts
========

.. conda:recipe:: r-quorts
   :replaces_section_title:

   The QoRTs software package is a fast\, efficient\, and portable multifunction toolkit designed to assist in the analysis\, quality control\, and data management of RNA\-Seq datasets.

   :homepage: https://github.com/hartleys/QoRTs
   :license: Public Domain
   :recipe: /`r-quorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quorts/meta.yaml>`_

   


.. conda:package:: r-quorts

   |downloads_r-quorts| |docker_r-quorts|

   :versions: 1.3.0-1, 1.3.0-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-quorts

   and update with::

      conda update r-quorts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-quorts:<tag>

   (see `r-quorts/tags`_ for valid values for ``<tag>``)


.. |downloads_r-quorts| image:: https://img.shields.io/conda/dn/bioconda/r-quorts.svg?style=flat
   :alt:   (downloads)
.. |docker_r-quorts| image:: https://quay.io/repository/biocontainers/r-quorts/status
   :target: https://quay.io/repository/biocontainers/r-quorts
.. _`r-quorts/tags`: https://quay.io/repository/biocontainers/r-quorts?tab=tags






Notes
-----
This package is a requirement of the main QoRTs package\; \"qorts\".



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-quorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-quorts/README.html