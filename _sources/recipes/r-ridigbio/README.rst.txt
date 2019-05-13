:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ridigbio'
.. highlight: bash

r-ridigbio
==========

.. conda:recipe:: r-ridigbio
   :replaces_section_title:

   An interface to iDigBio\'s search API that allows downloading specimen records. Searches are returned as a data.frame. Other functions such as the metadata end points return lists of information. iDigBio is a US project focused on digitizing and serving museum specimen collections on the web. See \<https\:\/\/www.idigbio.org\> for information on iDigBio.

   :homepage: https://github.com/iDigBio/ridigbio
   :license: MIT / MIT
   :recipe: /`r-ridigbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ridigbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ridigbio/meta.yaml>`_

   


.. conda:package:: r-ridigbio

   |downloads_r-ridigbio| |docker_r-ridigbio|

   :versions: 0.3.5-3, 0.3.5-2, 0.3.5-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ridigbio

   and update with::

      conda update r-ridigbio

   or use the docker container::

      docker pull quay.io/biocontainers/r-ridigbio:<tag>

   (see `r-ridigbio/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ridigbio| image:: https://img.shields.io/conda/dn/bioconda/r-ridigbio.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ridigbio
   :alt:   (downloads)
.. |docker_r-ridigbio| image:: https://quay.io/repository/biocontainers/r-ridigbio/status
   :target: https://quay.io/repository/biocontainers/r-ridigbio
.. _`r-ridigbio/tags`: https://quay.io/repository/biocontainers/r-ridigbio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ridigbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ridigbio/README.html