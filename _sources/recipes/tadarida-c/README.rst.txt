.. title:: Package Recipe 'tadarida-c'
.. highlight: bash


tadarida-c
==========

.. conda:recipe:: tadarida-c
   :replaces_section_title:

   Tadarida\-C \(Toolbox for Animal Detection on Acoustic Recordings \- Classification part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-C
   :license: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
   :recipe: /`tadarida-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c/meta.yaml>`_

   


.. conda:package:: tadarida-c

   |downloads_tadarida-c| |docker_tadarida-c|

   :versions: 1.2, 1.1, 1.0

   :depends: :conda:package:`r-base` 3.3.2* :conda:package:`r-data.table`  :conda:package:`r-randomforest`  

   :required~by: |required_by_tadarida-c|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadarida-c

   and update with::

      conda update tadarida-c

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tadarida-c


.. |required_by_tadarida-c| conda:required_by:: tadarida-c
.. |downloads_tadarida-c| image:: https://img.shields.io/conda/dn/bioconda/tadarida-c.svg?style=flat
   :alt:   (downloads)
.. |docker_tadarida-c| image:: https://quay.io/repository/biocontainers/tadarida-c/status
   :target: https://quay.io/repository/biocontainers/tadarida-c







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-c/README.html

