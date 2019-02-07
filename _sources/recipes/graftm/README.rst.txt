.. title:: Package Recipe 'graftm'
.. highlight: bash


graftm
======

.. conda:recipe:: graftm
   :replaces_section_title:

   GraftM is a pipeline used for identifying and classifying marker gene reads from metagenomic datasets

   :homepage: http://geronimp.github.io/graftM
   :license: GPL3 / GPL3+
   :recipe: /`graftm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm/meta.yaml>`_

   


.. conda:package:: graftm

   |downloads_graftm| |docker_graftm|

   :versions: 0.11.1, 0.10.1

   :depends: :conda:package:`biom-format` >=2.1.4 :conda:package:`biopython` >=1.64 :conda:package:`dendropy` >=4.1.0 :conda:package:`extern` >=0.0.4 :conda:package:`nose` >=1.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`seqmagick` >=0.5.0 :conda:package:`subprocess32` >=3.2.6 :conda:package:`taxtastic` >=0.5.4 :conda:package:`tempdir` >=0.6 

   :required~by: |required_by_graftm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graftm

   and update with::

      conda update graftm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graftm


.. |required_by_graftm| conda:required_by:: graftm
.. |downloads_graftm| image:: https://img.shields.io/conda/dn/bioconda/graftm.svg?style=flat
   :alt:   (downloads)
.. |docker_graftm| image:: https://quay.io/repository/biocontainers/graftm/status
   :target: https://quay.io/repository/biocontainers/graftm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graftm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graftm/README.html

