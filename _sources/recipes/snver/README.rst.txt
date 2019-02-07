.. title:: Package Recipe 'snver'
.. highlight: bash


snver
=====

.. conda:recipe:: snver
   :replaces_section_title:

   SNVer is a statistical tool for calling common and rare variants in analysis of pool or individual next\-generation sequencing data.
   It reports one single overall p\-value for evaluating the significance of a candidate locus being a variant\, based on which multiplicity control can be obtained.
   Loci with any \(low\) coverage can be tested and depth of coverage will be quantitatively factored into final significance calculation.
   SNVer runs very fast\, making it feasible for analysis of whole\-exome sequencing data\, or even whole\-genome sequencing data. 


   :homepage: http://snver.sourceforge.net/
   :license: GNU General Public License version 3.0 (GPLv3)
   :recipe: /`snver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver/meta.yaml>`_

   


.. conda:package:: snver

   |downloads_snver| |docker_snver|

   :versions: 0.5.3

   :depends: :conda:package:`openjdk` >=6 :conda:package:`python`  

   :required~by: |required_by_snver|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snver

   and update with::

      conda update snver

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snver


.. |required_by_snver| conda:required_by:: snver
.. |downloads_snver| image:: https://img.shields.io/conda/dn/bioconda/snver.svg?style=flat
   :alt:   (downloads)
.. |docker_snver| image:: https://quay.io/repository/biocontainers/snver/status
   :target: https://quay.io/repository/biocontainers/snver






Notes
-----
SNVer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"snver \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snver/README.html

