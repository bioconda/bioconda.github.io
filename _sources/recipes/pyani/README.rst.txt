:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyani'
.. highlight: bash

pyani
=====

.. conda:recipe:: pyani
   :replaces_section_title:

   pyani provides a package and script for calculation of genome\-scale average nucleotide identity.

   :homepage: http://widdowquinn.github.io/pyani/
   :license: MIT / MIT License
   :recipe: /`pyani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani/meta.yaml>`_

   


.. conda:package:: pyani

   |downloads_pyani| |docker_pyani|

   :versions: 0.2.7-1, 0.2.7-0, 0.2.3-0, 0.2.0-0
   
   :depends biopython: 
   
   :depends blast: 
   
   :depends blast-legacy: 
   
   :depends matplotlib: 
   
   :depends mummer: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scipy: 
   
   :depends seaborn: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyani

   and update with::

      conda update pyani

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyani:<tag>

   (see `pyani/tags`_ for valid values for ``<tag>``)


.. |downloads_pyani| image:: https://img.shields.io/conda/dn/bioconda/pyani.svg?style=flat
   :alt:   (downloads)
.. |docker_pyani| image:: https://quay.io/repository/biocontainers/pyani/status
   :target: https://quay.io/repository/biocontainers/pyani
.. _`pyani/tags`: https://quay.io/repository/biocontainers/pyani?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyani/README.html