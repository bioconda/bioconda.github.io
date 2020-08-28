:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'im-pipelines'
.. highlight: bash

im-pipelines
============

.. conda:recipe:: im-pipelines
   :replaces_section_title:
   :noindex:

   Components for cheminformatics and computational chemistry from InformaticsMatters.

   :homepage: https://github.com/InformaticsMatters/pipelines
   :license: Apache / Apache-2.0
   :recipe: /`im-pipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im-pipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im-pipelines/meta.yaml>`_

   


.. conda:package:: im-pipelines

   |downloads_im-pipelines| |docker_im-pipelines|

   :versions:
      
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends im-pipelines-utils: 
   :depends im-pipelines-utils-rdkit: 
   :depends matplotlib-base: 
   :depends molvs: 
   :depends python: 
   :depends scikit-learn: 
   :depends standardiser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install im-pipelines

   and update with::

      conda update im-pipelines

   or use the docker container::

      docker pull quay.io/biocontainers/im-pipelines:<tag>

   (see `im-pipelines/tags`_ for valid values for ``<tag>``)


.. |downloads_im-pipelines| image:: https://img.shields.io/conda/dn/bioconda/im-pipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/im-pipelines
   :alt:   (downloads)
.. |docker_im-pipelines| image:: https://quay.io/repository/biocontainers/im-pipelines/status
   :target: https://quay.io/repository/biocontainers/im-pipelines
.. _`im-pipelines/tags`: https://quay.io/repository/biocontainers/im-pipelines?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/im-pipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/im-pipelines/README.html