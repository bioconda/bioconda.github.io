.. title:: Package Recipe 'hg-color'
.. highlight: bash


hg-color
========

.. conda:recipe:: hg-color
   :replaces_section_title:

   HG\-CoLoR \(Hybrid Graph for the error Correction of Long Reads\) is a hybrid method for the error correction of long reads that follows the main idea from NaS to produce corrected long reads from assemblies of related accurate short reads.

   :homepage: https://github.com/pierre-morisse/HG-CoLoR
   :license: GNU General Public License (GPL)
   :recipe: /`hg-color <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color/meta.yaml>`_

   


.. conda:package:: hg-color

   |downloads_hg-color| |docker_hg-color|

   :versions: 1.0.0

   :depends: :conda:package:`emboss`  :conda:package:`kmc`  :conda:package:`libgcc`  :conda:package:`parallel`  :conda:package:`pgsa`  :conda:package:`quorum`  

   :required~by: |required_by_hg-color|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hg-color

   and update with::

      conda update hg-color

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hg-color


.. |required_by_hg-color| conda:required_by:: hg-color
.. |downloads_hg-color| image:: https://img.shields.io/conda/dn/bioconda/hg-color.svg?style=flat
   :alt:   (downloads)
.. |docker_hg-color| image:: https://quay.io/repository/biocontainers/hg-color/status
   :target: https://quay.io/repository/biocontainers/hg-color







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hg-color/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hg-color/README.html

