:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hubpub'
.. highlight: bash

bioconductor-hubpub
===================

.. conda:recipe:: bioconductor-hubpub
   :replaces_section_title:
   :noindex:

   Utilities to create and use Bioconductor Hubs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HubPub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hubpub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub/meta.yaml>`_

   HubPub provides users with functionality to help with the Bioconductor Hub structures. The package provides the ability to create a skeleton of a Hub style package that the user can then populate with the necessary information. There are also functions to help add resources to the Hub package metadata files as well as publish data to the Bioconductor S3 bucket.


.. conda:package:: bioconductor-hubpub

   |downloads_bioconductor-hubpub| |docker_bioconductor-hubpub|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocthis: ``>=1.12.0,<1.13.0``
   :depends r-available: 
   :depends r-aws.s3: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-fs: 
   :depends r-usethis: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hubpub

   and update with::

      mamba update bioconductor-hubpub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hubpub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
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