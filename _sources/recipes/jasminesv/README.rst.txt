:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jasminesv'
.. highlight: bash

jasminesv
=========

.. conda:recipe:: jasminesv
   :replaces_section_title:
   :noindex:

   Software for merging structural variants between individuals

   :homepage: https://github.com/mkirsche/Jasmine
   :license: MIT
   :recipe: /`jasminesv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasminesv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasminesv/meta.yaml>`_

   


.. conda:package:: jasminesv

   |downloads_jasminesv| |docker_jasminesv|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends openjdk: ``>=11.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jasminesv

   and update with::

      conda update jasminesv

   or use the docker container::

      docker pull quay.io/biocontainers/jasminesv:<tag>

   (see `jasminesv/tags`_ for valid values for ``<tag>``)


.. |downloads_jasminesv| image:: https://img.shields.io/conda/dn/bioconda/jasminesv.svg?style=flat
   :target: https://anaconda.org/bioconda/jasminesv
   :alt:   (downloads)
.. |docker_jasminesv| image:: https://quay.io/repository/biocontainers/jasminesv/status
   :target: https://quay.io/repository/biocontainers/jasminesv
.. _`jasminesv/tags`: https://quay.io/repository/biocontainers/jasminesv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jasminesv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jasminesv/README.html