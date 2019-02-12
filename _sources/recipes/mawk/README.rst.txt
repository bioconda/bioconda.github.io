.. title:: Package Recipe 'mawk'
.. highlight: bash


mawk
====

.. conda:recipe:: mawk
   :replaces_section_title:

   mawk is an interpreter for the AWK Programming Language.

   :homepage: http://invisible-island.net/mawk/
   :license: Copyright (c) 2009-2014,2015 by Thomas E. Dickey
   :recipe: /`mawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mawk/meta.yaml>`_

   


.. conda:package:: mawk

   |downloads_mawk| |docker_mawk|

   :versions: 1.3.4

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_mawk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mawk

   and update with::

      conda update mawk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mawk


.. |required_by_mawk| conda:required_by:: mawk
.. |downloads_mawk| image:: https://img.shields.io/conda/dn/bioconda/mawk.svg?style=flat
   :alt:   (downloads)
.. |docker_mawk| image:: https://quay.io/repository/biocontainers/mawk/status
   :target: https://quay.io/repository/biocontainers/mawk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mawk/README.html

