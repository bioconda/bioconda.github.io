.. title:: Package Recipe 'musicc'
.. highlight: bash


musicc
======

.. conda:recipe:: musicc
   :replaces_section_title:

   MUSICC\: A marker genes based framework for metagenomic normalization and accurate profiling of gene abundances in the microbiome.

   :homepage: http://elbo.gs.washington.edu/software_musicc.html
   :license: BSD License
   :recipe: /`musicc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/musicc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/musicc/meta.yaml>`_

   


.. conda:package:: musicc

   |downloads_musicc| |docker_musicc|

   :versions: 1.0.2, 1.0.1

   :depends: :conda:package:`numpy` >=1.6.1 :conda:package:`pandas` >=0.14 :conda:package:`python` 2.7* :conda:package:`scikit-learn` >=0.15.2 :conda:package:`scipy` >=0.9 

   :required~by: |required_by_musicc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install musicc

   and update with::

      conda update musicc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/musicc


.. |required_by_musicc| conda:required_by:: musicc
.. |downloads_musicc| image:: https://img.shields.io/conda/dn/bioconda/musicc.svg?style=flat
   :alt:   (downloads)
.. |docker_musicc| image:: https://quay.io/repository/biocontainers/musicc/status
   :target: https://quay.io/repository/biocontainers/musicc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/musicc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/musicc/README.html

