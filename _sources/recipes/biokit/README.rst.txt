.. title:: Package Recipe 'biokit'
.. highlight: bash


biokit
======

.. conda:recipe:: biokit
   :replaces_section_title:

   Set of visualisation and analysis tools for biological data sets

   :homepage: http://pypi.python.org/pypi/biokit
   :license: BSD
   :recipe: /`biokit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biokit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biokit/meta.yaml>`_

   


.. conda:package:: biokit

   |downloads_biokit| |docker_biokit|

   :versions: 0.4.4, 0.4.2, 0.4.1, 0.2.1, 0.1.4, 0.1.3

   :depends: :conda:package:`biopython`  :conda:package:`bioservices` >=1.4.16 :conda:package:`colorlog`  :conda:package:`colormap`  :conda:package:`easydev` >=0.9.34 :conda:package:`matplotlib`  :conda:package:`mesalib`  :conda:package:`numpydoc`  :conda:package:`pandas`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyyaml`  :conda:package:`scipy`  :conda:package:`xmltodict`  

   :required~by: |required_by_biokit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biokit

   and update with::

      conda update biokit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biokit


.. |required_by_biokit| conda:required_by:: biokit
.. |downloads_biokit| image:: https://img.shields.io/conda/dn/bioconda/biokit.svg?style=flat
   :alt:   (downloads)
.. |docker_biokit| image:: https://quay.io/repository/biocontainers/biokit/status
   :target: https://quay.io/repository/biocontainers/biokit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biokit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biokit/README.html

