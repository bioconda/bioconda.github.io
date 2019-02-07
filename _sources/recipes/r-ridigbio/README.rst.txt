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

   :versions: 0.3.5

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-plyr`  

   :required~by: |required_by_r-ridigbio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ridigbio

   and update with::

      conda update r-ridigbio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ridigbio


.. |required_by_r-ridigbio| conda:required_by:: r-ridigbio
.. |downloads_r-ridigbio| image:: https://img.shields.io/conda/dn/bioconda/r-ridigbio.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ridigbio| image:: https://quay.io/repository/biocontainers/r-ridigbio/status
   :target: https://quay.io/repository/biocontainers/r-ridigbio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ridigbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ridigbio/README.html

