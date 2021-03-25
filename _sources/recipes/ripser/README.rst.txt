:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ripser'
.. highlight: bash

ripser
======

.. conda:recipe:: ripser
   :replaces_section_title:
   :noindex:

   Ripser\: efficient computation of Vietoris–Rips persistence barcodes.

   :homepage: http://ripser.org/
   :developer docs: https://github.com/Ripser/ripser
   :license: MIT / MIT
   :recipe: /`ripser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ripser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ripser/meta.yaml>`_

   


.. conda:package:: ripser

   |downloads_ripser| |docker_ripser|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libcxx: ``>=11.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ripser

   and update with::

      conda update ripser

   or use the docker container::

      docker pull quay.io/biocontainers/ripser:<tag>

   (see `ripser/tags`_ for valid values for ``<tag>``)


.. |downloads_ripser| image:: https://img.shields.io/conda/dn/bioconda/ripser.svg?style=flat
   :target: https://anaconda.org/bioconda/ripser
   :alt:   (downloads)
.. |docker_ripser| image:: https://quay.io/repository/biocontainers/ripser/status
   :target: https://quay.io/repository/biocontainers/ripser
.. _`ripser/tags`: https://quay.io/repository/biocontainers/ripser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ripser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ripser/README.html