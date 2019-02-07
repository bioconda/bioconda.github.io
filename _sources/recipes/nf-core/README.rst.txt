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

   :versions: 1.4, 1.3, 1.2, 1.1

   :depends: :conda:package:`click`  :conda:package:`cookiecutter`  :conda:package:`git`  :conda:package:`gitpython`  :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`requests`  :conda:package:`requests-cache`  :conda:package:`tabulate`  

   :required~by: |required_by_nf-core|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nf-core

   and update with::

      conda update nf-core

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nf-core


.. |required_by_nf-core| conda:required_by:: nf-core
.. |downloads_nf-core| image:: https://img.shields.io/conda/dn/bioconda/nf-core.svg?style=flat
   :alt:   (downloads)
.. |docker_nf-core| image:: https://quay.io/repository/biocontainers/nf-core/status
   :target: https://quay.io/repository/biocontainers/nf-core







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-core/README.html

