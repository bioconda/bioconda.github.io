:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pychopper'
.. highlight: bash

pychopper
=========

.. conda:recipe:: pychopper
   :replaces_section_title:

   A tool to identify full length cDNA reads from nanopore data.

   :homepage: https://github.com/nanoporetech/pychopper
   :license: MPL2
   :recipe: /`pychopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper/meta.yaml>`_

   


.. conda:package:: pychopper

   |downloads_pychopper| |docker_pychopper|

   :versions: 0.4.0-0
   
   :depends biopython: 
   
   :depends matplotlib: 
   
   :depends pandas: 
   
   :depends parasail-python: 
   
   :depends pytest: 
   
   :depends python: >=3
   
   :depends six: 
   
   :depends tqdm: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pychopper

   and update with::

      conda update pychopper

   or use the docker container::

      docker pull quay.io/biocontainers/pychopper:<tag>

   (see `pychopper/tags`_ for valid values for ``<tag>``)


.. |downloads_pychopper| image:: https://img.shields.io/conda/dn/bioconda/pychopper.svg?style=flat
   :alt:   (downloads)
.. |docker_pychopper| image:: https://quay.io/repository/biocontainers/pychopper/status
   :target: https://quay.io/repository/biocontainers/pychopper
.. _`pychopper/tags`: https://quay.io/repository/biocontainers/pychopper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pychopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pychopper/README.html