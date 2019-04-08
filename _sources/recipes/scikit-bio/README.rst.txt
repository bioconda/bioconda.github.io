:orphan:  .. only available via index, not via toctree

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

   :versions: 0.4.2-0, 0.2.3-0
   
   :depends bz2file: 
   :depends cachecontrol: 
   :depends contextlib2: 
   :depends decorator: 
   :depends future: 
   :depends ipython: 
   :depends lockfile: 
   :depends matplotlib: >=1.1.0
   :depends natsort: 
   :depends nose: 
   :depends numpy: 1.10*
   :depends pandas: 
   :depends python: 2.7*
   :depends scipy: >=0.13.0
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scikit-bio

   and update with::

      conda update scikit-bio

   or use the docker container::

      docker pull quay.io/biocontainers/scikit-bio:<tag>

   (see `scikit-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_scikit-bio| image:: https://img.shields.io/conda/dn/bioconda/scikit-bio.svg?style=flat
   :alt:   (downloads)
.. |docker_scikit-bio| image:: https://quay.io/repository/biocontainers/scikit-bio/status
   :target: https://quay.io/repository/biocontainers/scikit-bio
.. _`scikit-bio/tags`: https://quay.io/repository/biocontainers/scikit-bio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scikit-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scikit-bio/README.html