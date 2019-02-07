.. title:: Package Recipe 'pear'
.. highlight: bash


pear
====

.. conda:recipe:: pear
   :replaces_section_title:

   paired\-end read merger

   :homepage: http://sco.h-its.org/exelixis/web/software/pear/
   :license: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
   :recipe: /`pear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear/meta.yaml>`_
   :links: biotools: :biotools:`PEAR`

   


.. conda:package:: pear

   |downloads_pear| |docker_pear|

   :versions: 0.9.6

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_pear|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pear

   and update with::

      conda update pear

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pear


.. |required_by_pear| conda:required_by:: pear
.. |downloads_pear| image:: https://img.shields.io/conda/dn/bioconda/pear.svg?style=flat
   :alt:   (downloads)
.. |docker_pear| image:: https://quay.io/repository/biocontainers/pear/status
   :target: https://quay.io/repository/biocontainers/pear







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pear/README.html

