.. title:: Package Recipe 'qorts'
.. highlight: bash


qorts
=====

.. conda:recipe:: qorts
   :replaces_section_title:

   The QoRTs software package is a fast\, efficient\, and portable multifunction toolkit designed to assist in the analysis\, quality control\, and data management of RNA\-Seq datasets.

   :homepage: http://hartleys.github.io/QoRTs/
   :license: Public Domain
   :recipe: /`qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts/meta.yaml>`_

   


.. conda:package:: qorts

   |downloads_qorts| |docker_qorts|

   :versions: 1.3.0, 1.1.8

   :depends: :conda:package:`openjdk`  :conda:package:`python` 2.7* :conda:package:`r-qorts` ==1.3.0 

   :required~by: |required_by_qorts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qorts

   and update with::

      conda update qorts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qorts


.. |required_by_qorts| conda:required_by:: qorts
.. |downloads_qorts| image:: https://img.shields.io/conda/dn/bioconda/qorts.svg?style=flat
   :alt:   (downloads)
.. |docker_qorts| image:: https://quay.io/repository/biocontainers/qorts/status
   :target: https://quay.io/repository/biocontainers/qorts






Notes
-----
QoRTs is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"qorts\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"qorts \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qorts/README.html

