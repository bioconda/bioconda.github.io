:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydna'
.. highlight: bash

pydna
=====

.. conda:recipe:: pydna
   :replaces_section_title:
   :noindex:

   Representing double stranded DNA and simulating cloning\, homologous recombination\, Gibson assembly\, Gel electrophoresis etc.

   :homepage: https://github.com/BjornFJohansson/pydna
   :license: BSD / BSD-3-Clause
   :recipe: /`pydna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna/meta.yaml>`_

   


.. conda:package:: pydna

   |downloads_pydna| |docker_pydna|

   :versions:
      
      

      ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0a3-0``

      

   
   :depends appdirs: ``>=1.3.0``
   :depends biopython: ``>=1.65``
   :depends networkx: ``>=1.8.1``
   :depends ordered-set: ``>=2.0.1``
   :depends prettytable: ``>=0.7.2``
   :depends pyparsing: ``>=2.1.10``
   :depends python: ``>=3``
   :depends requests: ``>=2.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydna

   and update with::

      conda update pydna

   or use the docker container::

      docker pull quay.io/biocontainers/pydna:<tag>

   (see `pydna/tags`_ for valid values for ``<tag>``)


.. |downloads_pydna| image:: https://img.shields.io/conda/dn/bioconda/pydna.svg?style=flat
   :target: https://anaconda.org/bioconda/pydna
   :alt:   (downloads)
.. |docker_pydna| image:: https://quay.io/repository/biocontainers/pydna/status
   :target: https://quay.io/repository/biocontainers/pydna
.. _`pydna/tags`: https://quay.io/repository/biocontainers/pydna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna/README.html