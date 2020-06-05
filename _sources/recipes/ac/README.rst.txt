:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ac'
.. highlight: bash

ac
==

.. conda:recipe:: ac
   :replaces_section_title:
   :noindex:

   A lossless compression tool for Amino Acid sequences

   :homepage: https://github.com/cobilab/ac
   :license: GPL / GPL3
   :recipe: /`ac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac/meta.yaml>`_

   


.. conda:package:: ac

   |downloads_ac| |docker_ac|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ac

   and update with::

      conda update ac

   or use the docker container::

      docker pull quay.io/biocontainers/ac:<tag>

   (see `ac/tags`_ for valid values for ``<tag>``)


.. |downloads_ac| image:: https://img.shields.io/conda/dn/bioconda/ac.svg?style=flat
   :target: https://anaconda.org/bioconda/ac
   :alt:   (downloads)
.. |docker_ac| image:: https://quay.io/repository/biocontainers/ac/status
   :target: https://quay.io/repository/biocontainers/ac
.. _`ac/tags`: https://quay.io/repository/biocontainers/ac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac/README.html