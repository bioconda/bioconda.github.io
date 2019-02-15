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
   
   :depends bz2file: >=0.98
   
   :depends cachecontrol: >=0.11.5
   
   :depends contextlib2: >=0.4.0
   
   :depends decorator: >=3.4.2
   
   :depends future: >=0.14.3
   
   :depends ipython: >=3.2.0
   
   :depends lockfile: >=0.10.2
   
   :depends matplotlib: >=1.4.3
   
   :depends natsort: >=4.0.3
   
   :depends nose: >=1.3.7
   
   :depends numpy: 1.10*
   
   :depends numpy: >=1.9.2
   
   :depends pandas: 0.17.*
   
   :depends python: 2.7*
   
   :depends scipy: >=0.15.1
   
   :depends six: >=1.9.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scikit-bio

   and update with::

      conda update scikit-bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scikit-bio:<tag>

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