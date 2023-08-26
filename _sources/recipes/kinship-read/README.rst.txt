:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinship-read'
.. highlight: bash

kinship-read
============

.. conda:recipe:: kinship-read
   :replaces_section_title:
   :noindex:

   READ is a method to infer the degree of relationship for a pair of low\-coverage individuals.

   :homepage: https://bitbucket.org/tguenther/read/src/master/
   :license: GPL-3.0-only
   :recipe: /`kinship-read <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinship-read>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinship-read/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0195491`

   


.. conda:package:: kinship-read

   |downloads_kinship-read| |docker_kinship-read|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends python: ``>=2.7,<3``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kinship-read

   and update with::

      conda update kinship-read

   or use the docker container::

      docker pull quay.io/biocontainers/kinship-read:<tag>

   (see `kinship-read/tags`_ for valid values for ``<tag>``)


.. |downloads_kinship-read| image:: https://img.shields.io/conda/dn/bioconda/kinship-read.svg?style=flat
   :target: https://anaconda.org/bioconda/kinship-read
   :alt:   (downloads)
.. |docker_kinship-read| image:: https://quay.io/repository/biocontainers/kinship-read/status
   :target: https://quay.io/repository/biocontainers/kinship-read
.. _`kinship-read/tags`: https://quay.io/repository/biocontainers/kinship-read?tab=tags


.. raw:: html

    <script>
        var package = "kinship-read";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinship-read/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinship-read/README.html