:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepbinner'
.. highlight: bash

deepbinner
==========

.. conda:recipe:: deepbinner
   :replaces_section_title:
   :noindex:

   A signal\-level demultiplexer for Oxford Nanopore reads.

   :homepage: https://github.com/rrwick/Deepbinner
   :license: GPL3
   :recipe: /`deepbinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner/meta.yaml>`_

   


.. conda:package:: deepbinner

   |downloads_deepbinner| |docker_deepbinner|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends h5py: 
   :depends keras: 
   :depends matplotlib: 
   :depends noise: 
   :depends numpy: 
   :depends python: ``>3``
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepbinner

   and update with::

      conda update deepbinner

   or use the docker container::

      docker pull quay.io/biocontainers/deepbinner:<tag>

   (see `deepbinner/tags`_ for valid values for ``<tag>``)


.. |downloads_deepbinner| image:: https://img.shields.io/conda/dn/bioconda/deepbinner.svg?style=flat
   :target: https://anaconda.org/bioconda/deepbinner
   :alt:   (downloads)
.. |docker_deepbinner| image:: https://quay.io/repository/biocontainers/deepbinner/status
   :target: https://quay.io/repository/biocontainers/deepbinner
.. _`deepbinner/tags`: https://quay.io/repository/biocontainers/deepbinner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbinner/README.html