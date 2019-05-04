:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strip_it'
.. highlight: bash

strip_it
========

.. conda:recipe:: strip-it/1.0.2
   :replaces_section_title:

   Strip\-it is a program that extracts predefined scaffolds from organic small molecules.

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/strip-it/1.0.2/strip-it.html
   :license: LGPL
   :recipe: /`strip-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip-it>`_/`1.0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip-it/1.0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip-it/1.0.2/meta.yaml>`_

   


.. conda:package:: strip_it

   |downloads_strip_it| |docker_strip_it|

   :versions: 1.0.2-4, 1.0.2-3, 1.0.2-2, 1.0.2-1, 1.0.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openbabel: 2.4.1.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strip_it

   and update with::

      conda update strip_it

   or use the docker container::

      docker pull quay.io/biocontainers/strip_it:<tag>

   (see `strip_it/tags`_ for valid values for ``<tag>``)


.. |downloads_strip_it| image:: https://img.shields.io/conda/dn/bioconda/strip_it.svg?style=flat
   :alt:   (downloads)
.. |docker_strip_it| image:: https://quay.io/repository/biocontainers/strip_it/status
   :target: https://quay.io/repository/biocontainers/strip_it
.. _`strip_it/tags`: https://quay.io/repository/biocontainers/strip_it?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strip_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strip_it/README.html