.. title:: Package Recipe 'consensusfixer'
.. highlight: bash


consensusfixer
==============

.. conda:recipe:: consensusfixer
   :replaces_section_title:

   Computes a consensus sequence with wobbles\, ambiguous bases\, and in\-frame insertions\, from a NGS read alignment.

   :homepage: https://github.com/cbg-ethz/ConsensusFixer
   :license: GPL / GPL-3.0
   :recipe: /`consensusfixer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consensusfixer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consensusfixer/meta.yaml>`_

   


.. conda:package:: consensusfixer

   |downloads_consensusfixer| |docker_consensusfixer|

   :versions: 0.4, 0.3.1

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_consensusfixer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install consensusfixer

   and update with::

      conda update consensusfixer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/consensusfixer


.. |required_by_consensusfixer| conda:required_by:: consensusfixer
.. |downloads_consensusfixer| image:: https://img.shields.io/conda/dn/bioconda/consensusfixer.svg?style=flat
   :alt:   (downloads)
.. |docker_consensusfixer| image:: https://quay.io/repository/biocontainers/consensusfixer/status
   :target: https://quay.io/repository/biocontainers/consensusfixer






Notes
-----
ConsensusFixer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"ConsensusFixer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"ConsensusFixer \-Xms512m \-Xmx1G\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consensusfixer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consensusfixer/README.html

