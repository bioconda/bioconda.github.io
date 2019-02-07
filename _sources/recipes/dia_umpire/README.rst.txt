.. title:: Package Recipe 'dia_umpire'
.. highlight: bash


dia_umpire
==========

.. conda:recipe:: dia_umpire
   :replaces_section_title:

   DIA\-Umpire is an open source Java program for computational analysis of data independent acquisition \(DIA\)
   mass spectrometry\-based proteomics data. It enables untargeted peptide and protein identification and quantitation
   using DIA data\, and also incorporates targeted extraction to reduce the number of cases of missing quantitation.


   :homepage: https://github.com/Nesvilab/DIA-Umpire
   :license: Apache License, Version 2.0
   :recipe: /`dia_umpire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dia_umpire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dia_umpire/meta.yaml>`_

   


.. conda:package:: dia_umpire

   |downloads_dia_umpire| |docker_dia_umpire|

   :versions: 2.1.3, 2.1.2

   :depends: :conda:package:`openjdk` >=7 :conda:package:`python` 2.7* 

   :required~by: |required_by_dia_umpire|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dia_umpire

   and update with::

      conda update dia_umpire

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dia_umpire


.. |required_by_dia_umpire| conda:required_by:: dia_umpire
.. |downloads_dia_umpire| image:: https://img.shields.io/conda/dn/bioconda/dia_umpire.svg?style=flat
   :alt:   (downloads)
.. |docker_dia_umpire| image:: https://quay.io/repository/biocontainers/dia_umpire/status
   :target: https://quay.io/repository/biocontainers/dia_umpire






Notes
-----
DIA\-Umpire is a Java program.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dia_umpire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dia_umpire/README.html

