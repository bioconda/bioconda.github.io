:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnuvid'
.. highlight: bash

gnuvid
======

.. conda:recipe:: gnuvid
   :replaces_section_title:
   :noindex:

   GNUVID is Gene Novelty Unit\-based Virus IDentification for SARS\-CoV\-2

   :homepage: https://github.com/ahmedmagds/GNUVID
   :license: GPL / GPLv3
   :recipe: /`gnuvid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuvid/meta.yaml>`_

   


.. conda:package:: gnuvid

   |downloads_gnuvid| |docker_gnuvid|

   :versions:
      
      

      ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends mafft: ``>=7.453``
   :depends matplotlib-base: ``>=3.3.3``
   :depends pandas: ``>=1.1.5``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=0.23.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnuvid

   and update with::

      conda update gnuvid

   or use the docker container::

      docker pull quay.io/biocontainers/gnuvid:<tag>

   (see `gnuvid/tags`_ for valid values for ``<tag>``)


.. |downloads_gnuvid| image:: https://img.shields.io/conda/dn/bioconda/gnuvid.svg?style=flat
   :target: https://anaconda.org/bioconda/gnuvid
   :alt:   (downloads)
.. |docker_gnuvid| image:: https://quay.io/repository/biocontainers/gnuvid/status
   :target: https://quay.io/repository/biocontainers/gnuvid
.. _`gnuvid/tags`: https://quay.io/repository/biocontainers/gnuvid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnuvid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnuvid/README.html