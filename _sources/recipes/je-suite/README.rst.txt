.. title:: Package Recipe 'je-suite'
.. highlight: bash


je-suite
========

.. conda:recipe:: je-suite
   :replaces_section_title:

   Je is a suite to handle barcoded fastq files with \(or without\) Unique Molecule Identifiers \(UMIs\) and filter
   read duplicates using these UMIs


   :homepage: https://gbcs.embl.de/Je
   :license: MIT / MIT License
   :recipe: /`je-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite/meta.yaml>`_

   


.. conda:package:: je-suite

   |downloads_je-suite| |docker_je-suite|

   :versions: 2.0.RC, 1.2

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_je-suite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install je-suite

   and update with::

      conda update je-suite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/je-suite


.. |required_by_je-suite| conda:required_by:: je-suite
.. |downloads_je-suite| image:: https://img.shields.io/conda/dn/bioconda/je-suite.svg?style=flat
   :alt:   (downloads)
.. |docker_je-suite| image:: https://quay.io/repository/biocontainers/je-suite/status
   :target: https://quay.io/repository/biocontainers/je-suite






Notes
-----
Je is Java program that comes with a wrapper shell script.
By default \"\-Xmx4G \-Xms256m\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"je \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/je-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/je-suite/README.html

