:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fann'
.. highlight: bash

fann
====

.. conda:recipe:: fann
   :replaces_section_title:
   :noindex:

   Fast Artificial Neural Network Library

   :homepage: http://leenissen.dk/fann/wp/
   :license: LGPL-2.1
   :recipe: /`fann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fann/meta.yaml>`_

   


.. conda:package:: fann

   |downloads_fann| |docker_fann|

   :versions:
      
      

      ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fann

   and update with::

      conda update fann

   or use the docker container::

      docker pull quay.io/biocontainers/fann:<tag>

   (see `fann/tags`_ for valid values for ``<tag>``)


.. |downloads_fann| image:: https://img.shields.io/conda/dn/bioconda/fann.svg?style=flat
   :target: https://anaconda.org/bioconda/fann
   :alt:   (downloads)
.. |docker_fann| image:: https://quay.io/repository/biocontainers/fann/status
   :target: https://quay.io/repository/biocontainers/fann
.. _`fann/tags`: https://quay.io/repository/biocontainers/fann?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fann/README.html