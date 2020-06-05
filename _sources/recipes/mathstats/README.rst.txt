:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mathstats'
.. highlight: bash

mathstats
=========

.. conda:recipe:: mathstats
   :replaces_section_title:
   :noindex:

   Statistical functions\, goodness\-of\-fit tests and special and special distributions not implemented in scipy\/numpy .

   :homepage: https://github.com/ksahlin/mathstats
   :license: GPLv3
   :recipe: /`mathstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mathstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mathstats/meta.yaml>`_

   


.. conda:package:: mathstats

   |downloads_mathstats| |docker_mathstats|

   :versions:
      
      

      ``0.2.6.5-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.4-0``

      

   
   :depends python: 
   :depends scipy: ``>=0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mathstats

   and update with::

      conda update mathstats

   or use the docker container::

      docker pull quay.io/biocontainers/mathstats:<tag>

   (see `mathstats/tags`_ for valid values for ``<tag>``)


.. |downloads_mathstats| image:: https://img.shields.io/conda/dn/bioconda/mathstats.svg?style=flat
   :target: https://anaconda.org/bioconda/mathstats
   :alt:   (downloads)
.. |docker_mathstats| image:: https://quay.io/repository/biocontainers/mathstats/status
   :target: https://quay.io/repository/biocontainers/mathstats
.. _`mathstats/tags`: https://quay.io/repository/biocontainers/mathstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mathstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mathstats/README.html