:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'triqler'
.. highlight: bash

triqler
=======

.. conda:recipe:: triqler
   :replaces_section_title:
   :noindex:

   A combined identification and quantification error model of label\-free protein quantification

   :homepage: https://github.com/statisticalbiotechnology/triqler
   :license: APACHE / Apache Software
   :recipe: /`triqler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triqler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triqler/meta.yaml>`_

   


.. conda:package:: triqler

   |downloads_triqler| |docker_triqler|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends numpy: ``>=1.12``
   :depends python: 
   :depends scipy: ``>=0.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install triqler

   and update with::

      conda update triqler

   or use the docker container::

      docker pull quay.io/biocontainers/triqler:<tag>

   (see `triqler/tags`_ for valid values for ``<tag>``)


.. |downloads_triqler| image:: https://img.shields.io/conda/dn/bioconda/triqler.svg?style=flat
   :target: https://anaconda.org/bioconda/triqler
   :alt:   (downloads)
.. |docker_triqler| image:: https://quay.io/repository/biocontainers/triqler/status
   :target: https://quay.io/repository/biocontainers/triqler
.. _`triqler/tags`: https://quay.io/repository/biocontainers/triqler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triqler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triqler/README.html