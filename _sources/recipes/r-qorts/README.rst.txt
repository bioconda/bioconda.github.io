:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qorts'
.. highlight: bash

r-qorts
=======

.. conda:recipe:: r-qorts
   :replaces_section_title:
   :noindex:

   QoRTs toolkit for analysis\, quality control\, and data management of RNA\-Seq
   datasets.


   :homepage: https://github.com/hartleys/QoRTs
   :license: Public Domain
   :recipe: /`r-qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qorts/meta.yaml>`_

   


.. conda:package:: r-qorts

   |downloads_r-qorts| |docker_r-qorts|

   :versions:
      
      

      ``1.3.6-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qorts

   and update with::

      conda update r-qorts

   or use the docker container::

      docker pull quay.io/biocontainers/r-qorts:<tag>

   (see `r-qorts/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qorts| image:: https://img.shields.io/conda/dn/bioconda/r-qorts.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qorts
   :alt:   (downloads)
.. |docker_r-qorts| image:: https://quay.io/repository/biocontainers/r-qorts/status
   :target: https://quay.io/repository/biocontainers/r-qorts
.. _`r-qorts/tags`: https://quay.io/repository/biocontainers/r-qorts?tab=tags






Notes
-----
This package is a requirement of the main QoRTs package\; \"qorts\".



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qorts/README.html