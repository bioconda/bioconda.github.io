.. title:: Package Recipe 'pyliftover'
.. highlight: bash


pyliftover
==========

.. conda:recipe:: pyliftover
   :replaces_section_title:

   Pure\-python implementation of UCSC \`\`liftOver\`\` genome coordinate conversion.

   :homepage: https://github.com/konstantint/pyliftover
   :license: MIT / MIT License
   :recipe: /`pyliftover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyliftover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyliftover/meta.yaml>`_

   


.. conda:package:: pyliftover

   |downloads_pyliftover| |docker_pyliftover|

   :versions: 0.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_pyliftover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyliftover

   and update with::

      conda update pyliftover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyliftover


.. |required_by_pyliftover| conda:required_by:: pyliftover
.. |downloads_pyliftover| image:: https://img.shields.io/conda/dn/bioconda/pyliftover.svg?style=flat
   :alt:   (downloads)
.. |docker_pyliftover| image:: https://quay.io/repository/biocontainers/pyliftover/status
   :target: https://quay.io/repository/biocontainers/pyliftover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyliftover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyliftover/README.html

