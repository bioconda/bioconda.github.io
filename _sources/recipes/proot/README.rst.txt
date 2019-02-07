.. title:: Package Recipe 'proot'
.. highlight: bash


proot
=====

.. conda:recipe:: proot
   :replaces_section_title:

   chroot\, mount \-\-bind\, and binfmt\_misc without privilege\/setup

   :homepage: https://github.com/proot-me/PRoot
   :license: GPL-2.0
   :recipe: /`proot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proot/meta.yaml>`_

   


.. conda:package:: proot

   |downloads_proot| |docker_proot|

   :versions: 5.1.0

   :depends: :conda:package:`talloc`  

   :required~by: |required_by_proot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proot

   and update with::

      conda update proot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/proot


.. |required_by_proot| conda:required_by:: proot
.. |downloads_proot| image:: https://img.shields.io/conda/dn/bioconda/proot.svg?style=flat
   :alt:   (downloads)
.. |docker_proot| image:: https://quay.io/repository/biocontainers/proot/status
   :target: https://quay.io/repository/biocontainers/proot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proot/README.html

