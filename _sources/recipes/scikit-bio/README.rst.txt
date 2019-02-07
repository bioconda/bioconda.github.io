.. title:: Package Recipe 'scikit-bio'
.. highlight: bash


scikit-bio
==========

.. conda:recipe:: scikit-bio
   :replaces_section_title:

   Data structures\, algorithms and educational resources for bioinformatics.

   :homepage: http://scikit-bio.org
   :license: BSD License
   :recipe: /`scikit-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikit-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikit-bio/meta.yaml>`_

   


.. conda:package:: scikit-bio

   |downloads_scikit-bio| |docker_scikit-bio|

   :versions: 0.4.2, 0.2.3

   :depends: :conda:package:`bz2file`  :conda:package:`cachecontrol`  :conda:package:`contextlib2`  :conda:package:`decorator`  :conda:package:`future`  :conda:package:`ipython`  :conda:package:`lockfile`  :conda:package:`matplotlib` >=1.1.0 :conda:package:`natsort`  :conda:package:`nose`  :conda:package:`numpy` 1.10* :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scipy` >=0.13.0 :conda:package:`six`  

   :required~by: |required_by_scikit-bio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scikit-bio

   and update with::

      conda update scikit-bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scikit-bio


.. |required_by_scikit-bio| conda:required_by:: scikit-bio
.. |downloads_scikit-bio| image:: https://img.shields.io/conda/dn/bioconda/scikit-bio.svg?style=flat
   :alt:   (downloads)
.. |docker_scikit-bio| image:: https://quay.io/repository/biocontainers/scikit-bio/status
   :target: https://quay.io/repository/biocontainers/scikit-bio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scikit-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scikit-bio/README.html

