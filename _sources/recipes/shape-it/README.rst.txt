:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shape_it'
.. highlight: bash

shape_it
========

.. conda:recipe:: shape-it/1.0.1
   :replaces_section_title:

   Shape alignment against a database of molecules

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/shape-it/1.0.1/shape-it.html
   :license: LGPL
   :recipe: /`shape-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape-it>`_/`1.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape-it/1.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape-it/1.0.1/meta.yaml>`_

   


.. conda:package:: shape_it

   |downloads_shape_it| |docker_shape_it|

   :versions: 1.0.1-4, 1.0.1-3, 1.0.1-2, 1.0.1-1
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openbabel: 2.4.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shape_it

   and update with::

      conda update shape_it

   or use the docker container::

      docker pull quay.io/biocontainers/shape_it:<tag>

   (see `shape_it/tags`_ for valid values for ``<tag>``)


.. |downloads_shape_it| image:: https://img.shields.io/conda/dn/bioconda/shape_it.svg?style=flat
   :alt:   (downloads)
.. |docker_shape_it| image:: https://quay.io/repository/biocontainers/shape_it/status
   :target: https://quay.io/repository/biocontainers/shape_it
.. _`shape_it/tags`: https://quay.io/repository/biocontainers/shape_it?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shape_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shape_it/README.html