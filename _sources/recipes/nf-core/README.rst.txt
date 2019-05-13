:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-core'
.. highlight: bash

nf-core
=======

.. conda:recipe:: nf-core
   :replaces_section_title:

   Python package with helper tools for the nf\-core community.

   :homepage: http://nf-co.re/
   :license: MIT
   :recipe: /`nf-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core/meta.yaml>`_

   


.. conda:package:: nf-core

   |downloads_nf-core| |docker_nf-core|

   :versions: 1.6-0, 1.5-0, 1.4-0, 1.3-0, 1.2-0, 1.1-0
   
   :depends click: 
   :depends cookiecutter: 
   :depends git: 
   :depends gitpython: 
   :depends jsonschema: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends requests-cache: 
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nf-core

   and update with::

      conda update nf-core

   or use the docker container::

      docker pull quay.io/biocontainers/nf-core:<tag>

   (see `nf-core/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-core| image:: https://img.shields.io/conda/dn/bioconda/nf-core.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-core
   :alt:   (downloads)
.. |docker_nf-core| image:: https://quay.io/repository/biocontainers/nf-core/status
   :target: https://quay.io/repository/biocontainers/nf-core
.. _`nf-core/tags`: https://quay.io/repository/biocontainers/nf-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-core/README.html