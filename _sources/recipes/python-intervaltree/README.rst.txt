:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-intervaltree'
.. highlight: bash

python-intervaltree
===================

.. conda:recipe:: python-intervaltree
   :replaces_section_title:

   Faster than intervaltree\_bio

   :homepage: https://pypi.org/project/intervaltree/#description
   :license: Apache
   :recipe: /`python-intervaltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-intervaltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-intervaltree/meta.yaml>`_

   


.. conda:package:: python-intervaltree

   |downloads_python-intervaltree| |docker_python-intervaltree|

   :versions: 3.0.2-0, 3.0.1-0, 2.1.0-0
   
   :depends python: 
   
   :depends python-sortedcontainers: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-intervaltree

   and update with::

      conda update python-intervaltree

   or use the docker container::

      docker pull quay.io/biocontainers/python-intervaltree:<tag>

   (see `python-intervaltree/tags`_ for valid values for ``<tag>``)


.. |downloads_python-intervaltree| image:: https://img.shields.io/conda/dn/bioconda/python-intervaltree.svg?style=flat
   :alt:   (downloads)
.. |docker_python-intervaltree| image:: https://quay.io/repository/biocontainers/python-intervaltree/status
   :target: https://quay.io/repository/biocontainers/python-intervaltree
.. _`python-intervaltree/tags`: https://quay.io/repository/biocontainers/python-intervaltree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-intervaltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-intervaltree/README.html