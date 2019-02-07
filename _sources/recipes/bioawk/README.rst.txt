.. title:: Package Recipe 'bioawk'
.. highlight: bash


bioawk
======

.. conda:recipe:: bioawk
   :replaces_section_title:

   BWK awk modified for biological data

   :homepage: https://github.com/lh3/bioawk
   :license: Free software license (https://github.com/lh3/bioawk/blob/master/README.awk#L1)
   :recipe: /`bioawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioawk/meta.yaml>`_

   


.. conda:package:: bioawk

   |downloads_bioawk| |docker_bioawk|

   :versions: 1.0

   :depends: 

   :required~by: |required_by_bioawk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioawk

   and update with::

      conda update bioawk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioawk


.. |required_by_bioawk| conda:required_by:: bioawk
.. |downloads_bioawk| image:: https://img.shields.io/conda/dn/bioconda/bioawk.svg?style=flat
   :alt:   (downloads)
.. |docker_bioawk| image:: https://quay.io/repository/biocontainers/bioawk/status
   :target: https://quay.io/repository/biocontainers/bioawk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioawk/README.html

