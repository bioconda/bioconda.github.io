.. title:: Package Recipe 'perl-postscript'
.. highlight: bash


perl-postscript
===============

.. conda:recipe:: perl-postscript
   :replaces_section_title:

   helper module for PostScript\:\:TextBlock

   :homepage: http://metacpan.org/pod/PostScript
   :license: unknown
   :recipe: /`perl-postscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript/meta.yaml>`_

   


.. conda:package:: perl-postscript

   |downloads_perl-postscript| |docker_perl-postscript|

   :versions: 0.06

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-postscript|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-postscript

   and update with::

      conda update perl-postscript

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-postscript


.. |required_by_perl-postscript| conda:required_by:: perl-postscript
.. |downloads_perl-postscript| image:: https://img.shields.io/conda/dn/bioconda/perl-postscript.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-postscript| image:: https://quay.io/repository/biocontainers/perl-postscript/status
   :target: https://quay.io/repository/biocontainers/perl-postscript







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-postscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-postscript/README.html

