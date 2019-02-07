.. title:: Package Recipe 'forked-path'
.. highlight: bash


forked-path
===========

.. conda:recipe:: forked-path
   :replaces_section_title:

   An object oriented file path module

   :homepage: http://github.com/Singletoned/forked-path
   :license: Public Domain
   :recipe: /`forked-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path/meta.yaml>`_

   


.. conda:package:: forked-path

   |downloads_forked-path| |docker_forked-path|

   :versions: 0.2.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_forked-path|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install forked-path

   and update with::

      conda update forked-path

   or use the docker container::

      docker pull quay.io/repository/biocontainers/forked-path


.. |required_by_forked-path| conda:required_by:: forked-path
.. |downloads_forked-path| image:: https://img.shields.io/conda/dn/bioconda/forked-path.svg?style=flat
   :alt:   (downloads)
.. |docker_forked-path| image:: https://quay.io/repository/biocontainers/forked-path/status
   :target: https://quay.io/repository/biocontainers/forked-path







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forked-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forked-path/README.html

