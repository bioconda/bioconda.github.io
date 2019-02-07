.. title:: Package Recipe 'gnu-getopt'
.. highlight: bash


gnu-getopt
==========

.. conda:recipe:: gnu-getopt
   :replaces_section_title:

   Command\-line option parsing library

   :homepage: http://software.frodo.looijaard.name/getopt/
   :license: GPLv2
   :recipe: /`gnu-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt/meta.yaml>`_

   


.. conda:package:: gnu-getopt

   |downloads_gnu-getopt| |docker_gnu-getopt|

   :versions: 1.1.6

   :depends: :conda:package:`gettext`  :conda:package:`libgcc`  

   :required~by: |required_by_gnu-getopt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnu-getopt

   and update with::

      conda update gnu-getopt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gnu-getopt


.. |required_by_gnu-getopt| conda:required_by:: gnu-getopt
.. |downloads_gnu-getopt| image:: https://img.shields.io/conda/dn/bioconda/gnu-getopt.svg?style=flat
   :alt:   (downloads)
.. |docker_gnu-getopt| image:: https://quay.io/repository/biocontainers/gnu-getopt/status
   :target: https://quay.io/repository/biocontainers/gnu-getopt






Notes
-----
On Linux systems gnu\-getopt is simply called \'getopt\'\, however due to potential collision with the native BSD getopt on OSX\, this binary is renamed \'gnu\-getopt\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-getopt/README.html

