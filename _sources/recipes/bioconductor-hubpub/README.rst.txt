:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hubpub'
.. highlight: bash

bioconductor-hubpub
===================

.. conda:recipe:: bioconductor-hubpub
   :replaces_section_title:
   :noindex:

   Utilities to create and use Bioconductor Hubs

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/HubPub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hubpub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub/meta.yaml>`_

   HubPub provides users with functionality to help with the Bioconductor Hub structures. The package provides the ability to create a skeleton of a Hub style package that the user can then populate with the necessary information. There are also functions to help add resources to the Hub package metadata files as well as publish data to the Bioconductor S3 bucket.


.. conda:package:: bioconductor-hubpub

   |downloads_bioconductor-hubpub| |docker_bioconductor-hubpub|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocthis: ``>=1.2.0,<1.3.0``
   :depends r-available: 
   :depends r-aws.s3: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-fs: 
   :depends r-usethis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hubpub

   and update with::

      conda update bioconductor-hubpub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hubpub:<tag>

   (see `bioconductor-hubpub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hubpub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hubpub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hubpub
   :alt:   (downloads)
.. |docker_bioconductor-hubpub| image:: https://quay.io/repository/biocontainers/bioconductor-hubpub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hubpub
.. _`bioconductor-hubpub/tags`: https://quay.io/repository/biocontainers/bioconductor-hubpub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hubpub";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hubpub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hubpub/README.html