.. title:: Package Recipe 'rascaf'
.. highlight: bash


rascaf
======

.. conda:recipe:: rascaf
   :replaces_section_title:

   Scaffolding with RNA\-seq read alignment

   :homepage: https://github.com/mourisl/Rascaf/commits/master
   :license: GPL2
   :recipe: /`rascaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf/meta.yaml>`_

   


.. conda:package:: rascaf

   |downloads_rascaf| |docker_rascaf|

   :versions: 20161129

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_rascaf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rascaf

   and update with::

      conda update rascaf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rascaf


.. |required_by_rascaf| conda:required_by:: rascaf
.. |downloads_rascaf| image:: https://img.shields.io/conda/dn/bioconda/rascaf.svg?style=flat
   :alt:   (downloads)
.. |docker_rascaf| image:: https://quay.io/repository/biocontainers/rascaf/status
   :target: https://quay.io/repository/biocontainers/rascaf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rascaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rascaf/README.html

