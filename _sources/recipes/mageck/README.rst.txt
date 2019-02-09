.. title:: Package Recipe 'mageck'
.. highlight: bash


mageck
======

.. conda:recipe:: mageck
   :replaces_section_title:

   MAGeCK \(Model\-based Analysis of Genome\-wide CRISPR\-Cas9 Knockout\)\, an algorithm to process\, QC\, analyze and visualize CRISPR screening data.

   :homepage: http://mageck.sourceforge.net
   :license: BSD License
   :recipe: /`mageck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck/meta.yaml>`_

   


.. conda:package:: mageck

   |downloads_mageck| |docker_mageck|

   :versions: 0.5.8, 0.5.8a, 0.5.7, 0.5.7a, 0.5.6, 0.5.5, 0.5.4, 0.5.3, 0.5.2

   :depends: :conda:package:`ipython`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_mageck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mageck

   and update with::

      conda update mageck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mageck


.. |required_by_mageck| conda:required_by:: mageck
.. |downloads_mageck| image:: https://img.shields.io/conda/dn/bioconda/mageck.svg?style=flat
   :alt:   (downloads)
.. |docker_mageck| image:: https://quay.io/repository/biocontainers/mageck/status
   :target: https://quay.io/repository/biocontainers/mageck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck/README.html

