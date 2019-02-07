.. title:: Package Recipe 'super-focus'
.. highlight: bash


super-focus
===========

.. conda:recipe:: super-focus
   :replaces_section_title:

   SUPER\-FOCUS\: A tool for agile functional analysis of shotgun metagenomic data

   :homepage: https://edwards.sdsu.edu/SUPERFOCUS
   :developer docs: https://github.com/metageni/SUPER-FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`super-focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus/meta.yaml>`_

   


.. conda:package:: super-focus

   |downloads_super-focus| |docker_super-focus|

   :versions: 0.33, 0.32, 0.31, 0.30, 0.29

   :depends: :conda:package:`blast`  :conda:package:`diamond`  :conda:package:`jellyfish`  :conda:package:`numpy` >=1.12.1 :conda:package:`python` >=3 :conda:package:`rapsearch`  :conda:package:`scipy`  

   :required~by: |required_by_super-focus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install super-focus

   and update with::

      conda update super-focus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/super-focus


.. |required_by_super-focus| conda:required_by:: super-focus
.. |downloads_super-focus| image:: https://img.shields.io/conda/dn/bioconda/super-focus.svg?style=flat
   :alt:   (downloads)
.. |docker_super-focus| image:: https://quay.io/repository/biocontainers/super-focus/status
   :target: https://quay.io/repository/biocontainers/super-focus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super-focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super-focus/README.html

