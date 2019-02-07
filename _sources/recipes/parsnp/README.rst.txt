.. title:: Package Recipe 'parsnp'
.. highlight: bash


parsnp
======

.. conda:recipe:: parsnp
   :replaces_section_title:

   Parsnp is a command\-line\-tool for efficient microbial core genome alignment and SNP detection.

   :homepage: https://github.com/marbl/parsnp
   :license: custom; see https://raw.githubusercontent.com/marbl/parsnp/master/LICENSE
   :recipe: /`parsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp/meta.yaml>`_

   


.. conda:package:: parsnp

   |downloads_parsnp| |docker_parsnp|

   :versions: 1.2

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_parsnp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parsnp

   and update with::

      conda update parsnp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/parsnp


.. |required_by_parsnp| conda:required_by:: parsnp
.. |downloads_parsnp| image:: https://img.shields.io/conda/dn/bioconda/parsnp.svg?style=flat
   :alt:   (downloads)
.. |docker_parsnp| image:: https://quay.io/repository/biocontainers/parsnp/status
   :target: https://quay.io/repository/biocontainers/parsnp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parsnp/README.html

