:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nebulizer'
.. highlight: bash

nebulizer
=========

.. conda:recipe:: nebulizer
   :replaces_section_title:
   :noindex:

   Command\-line utilities to help with managing users\, data libraries and tools in a Galaxy instance

   :homepage: https://github.com/pjbriggs/nebulizer
   :documentation: https://nebulizer.readthedocs.io/en/latest/
   
   :license: AFL-3.0
   :recipe: /`nebulizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nebulizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nebulizer/meta.yaml>`_

   


.. conda:package:: nebulizer

   |downloads_nebulizer| |docker_nebulizer|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.0-2``,  ``0.5.0-0``

      

   
   :depends bioblend: 
   :depends click: ``<=6.7``
   :depends mako: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nebulizer

   and update with::

      conda update nebulizer

   or use the docker container::

      docker pull quay.io/biocontainers/nebulizer:<tag>

   (see `nebulizer/tags`_ for valid values for ``<tag>``)


.. |downloads_nebulizer| image:: https://img.shields.io/conda/dn/bioconda/nebulizer.svg?style=flat
   :target: https://anaconda.org/bioconda/nebulizer
   :alt:   (downloads)
.. |docker_nebulizer| image:: https://quay.io/repository/biocontainers/nebulizer/status
   :target: https://quay.io/repository/biocontainers/nebulizer
.. _`nebulizer/tags`: https://quay.io/repository/biocontainers/nebulizer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nebulizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nebulizer/README.html