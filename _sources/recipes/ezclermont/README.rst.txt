:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezclermont'
.. highlight: bash

ezclermont
==========

.. conda:recipe:: ezclermont
   :replaces_section_title:

   easily determine the Clermont 2013 E coli phylotype

   :homepage: https://github.com/nickp60/ezclermont
   :developer docs: https://github.com/nickp60/barrnap-python
   :license: MIT / MIT License
   :recipe: /`ezclermont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezclermont/meta.yaml>`_

   Determines the Clermont 2013 phylotype of a given E coli strain by performing in silico quadriplex PCR


.. conda:package:: ezclermont

   |downloads_ezclermont| |docker_ezclermont|

   :versions: 0.6.1-0, 0.5.0-0, 0.4.3-0
   
   :depends biopython: 
   :depends coverage: 
   :depends python: >=3.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ezclermont

   and update with::

      conda update ezclermont

   or use the docker container::

      docker pull quay.io/biocontainers/ezclermont:<tag>

   (see `ezclermont/tags`_ for valid values for ``<tag>``)


.. |downloads_ezclermont| image:: https://img.shields.io/conda/dn/bioconda/ezclermont.svg?style=flat
   :target: https://anaconda.org/bioconda/ezclermont
   :alt:   (downloads)
.. |docker_ezclermont| image:: https://quay.io/repository/biocontainers/ezclermont/status
   :target: https://quay.io/repository/biocontainers/ezclermont
.. _`ezclermont/tags`: https://quay.io/repository/biocontainers/ezclermont?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezclermont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezclermont/README.html