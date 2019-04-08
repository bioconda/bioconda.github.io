:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken-biom'
.. highlight: bash

kraken-biom
===========

.. conda:recipe:: kraken-biom
   :replaces_section_title:

   Create BIOM\-format tables from Kraken output.

   :homepage: https://github.com/smdabdoub/kraken-biom
   :license: MIT / MIT License
   :recipe: /`kraken-biom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-biom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-biom/meta.yaml>`_

   


.. conda:package:: kraken-biom

   |downloads_kraken-biom| |docker_kraken-biom|

   :versions: 1.0.1-2, 1.0.1-0
   
   :depends biom-format: >=2.1.5
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kraken-biom

   and update with::

      conda update kraken-biom

   or use the docker container::

      docker pull quay.io/biocontainers/kraken-biom:<tag>

   (see `kraken-biom/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken-biom| image:: https://img.shields.io/conda/dn/bioconda/kraken-biom.svg?style=flat
   :alt:   (downloads)
.. |docker_kraken-biom| image:: https://quay.io/repository/biocontainers/kraken-biom/status
   :target: https://quay.io/repository/biocontainers/kraken-biom
.. _`kraken-biom/tags`: https://quay.io/repository/biocontainers/kraken-biom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken-biom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken-biom/README.html