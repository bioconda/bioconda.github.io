.. title:: Package Recipe 'albatradis'
.. highlight: bash


albatradis
==========

.. conda:recipe:: albatradis
   :replaces_section_title:

   Comparative TraDIS analysis

   :homepage: https://github.com/quadram-institute-bioscience/albatradis
   :license: GPLv3
   :recipe: /`albatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/albatradis/meta.yaml>`_

   


.. conda:package:: albatradis

   |downloads_albatradis| |docker_albatradis|

   :versions: 0.0.5

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`biotradis`  :conda:package:`cython`  :conda:package:`dendropy`  :conda:package:`graphviz` >=2.38.0,<3.0a0 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`perl-app-cpanminus`  :conda:package:`perl-moose`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-pathtools`  :conda:package:`perl-scalar-util-numeric`  :conda:package:`pyfastaq` >=3.12.0 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`scipy`  :conda:package:`seaborn`  

   :required~by: |required_by_albatradis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install albatradis

   and update with::

      conda update albatradis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/albatradis


.. |required_by_albatradis| conda:required_by:: albatradis
.. |downloads_albatradis| image:: https://img.shields.io/conda/dn/bioconda/albatradis.svg?style=flat
   :alt:   (downloads)
.. |docker_albatradis| image:: https://quay.io/repository/biocontainers/albatradis/status
   :target: https://quay.io/repository/biocontainers/albatradis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/albatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/albatradis/README.html

