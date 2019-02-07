.. title:: Package Recipe 'rabix-bunny'
.. highlight: bash


rabix-bunny
===========

.. conda:recipe:: rabix-bunny
   :replaces_section_title:

   Open\-source development kit for the Common Workflow Language from Seven Bridges. The Rabix executor Bunny\, which can be used to execute apps locally from the command line.

   :homepage: https://github.com/rabix/bunny
   :license: Apache v2
   :recipe: /`rabix-bunny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabix-bunny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabix-bunny/meta.yaml>`_

   


.. conda:package:: rabix-bunny

   |downloads_rabix-bunny| |docker_rabix-bunny|

   :versions: 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0rc5, 1.0.0rc4

   :depends: :conda:package:`openjdk` >=8,<9 

   :required~by: |required_by_rabix-bunny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rabix-bunny

   and update with::

      conda update rabix-bunny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rabix-bunny


.. |required_by_rabix-bunny| conda:required_by:: rabix-bunny
.. |downloads_rabix-bunny| image:: https://img.shields.io/conda/dn/bioconda/rabix-bunny.svg?style=flat
   :alt:   (downloads)
.. |docker_rabix-bunny| image:: https://quay.io/repository/biocontainers/rabix-bunny/status
   :target: https://quay.io/repository/biocontainers/rabix-bunny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabix-bunny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabix-bunny/README.html

