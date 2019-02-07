.. title:: Package Recipe 'mpa-portable'
.. highlight: bash


mpa-portable
============

.. conda:recipe:: mpa-portable
   :replaces_section_title:

   MPA Portable is a light\-weight and stand\-alone software for the
   identification of proteins and in\-depth analysis of metaproteomics.


   :homepage: https://github.com/compomics/meta-proteome-analyzer
   :license: Apache License, Version 2.0
   :recipe: /`mpa-portable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable/meta.yaml>`_

   


.. conda:package:: mpa-portable

   |downloads_mpa-portable| |docker_mpa-portable|

   :versions: 1.4.1

   :depends: :conda:package:`openjdk` >=6 :conda:package:`python`  

   :required~by: |required_by_mpa-portable|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mpa-portable

   and update with::

      conda update mpa-portable

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mpa-portable


.. |required_by_mpa-portable| conda:required_by:: mpa-portable
.. |downloads_mpa-portable| image:: https://img.shields.io/conda/dn/bioconda/mpa-portable.svg?style=flat
   :alt:   (downloads)
.. |docker_mpa-portable| image:: https://quay.io/repository/biocontainers/mpa-portable/status
   :target: https://quay.io/repository/biocontainers/mpa-portable






Notes
-----
mpa\-protable is Java program that comes with a custom wrapper shell script.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpa-portable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpa-portable/README.html

