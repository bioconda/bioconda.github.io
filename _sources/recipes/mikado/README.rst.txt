.. title:: Package Recipe 'mikado'
.. highlight: bash


mikado
======

.. conda:recipe:: mikado
   :replaces_section_title:

   A Python3 annotation program to select the best gene model in each locus

   :homepage: https://github.com/lucventurini/mikado
   :license: LGPL / GNU Lesser General Public License v3 or later (LGPLv3+)
   :recipe: /`mikado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado/meta.yaml>`_

   


.. conda:package:: mikado

   |downloads_mikado| |docker_mikado|

   :versions: 1.2.4, 1.2.3, 1.2.2, 1.2.1, 1.1.1, 1.0.2

   :depends: :conda:package:`biopython` >=1.66 :conda:package:`cython` >=0.28.2 :conda:package:`docutils` !=0.13.1 :conda:package:`drmaa`  :conda:package:`frozendict`  :conda:package:`intervaltree`  :conda:package:`jsonschema`  :conda:package:`libmagic`  :conda:package:`networkx` >=1.10 :conda:package:`nose`  :conda:package:`numpy`  :conda:package:`portcullis`  :conda:package:`pyfaidx`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`python-magic`  :conda:package:`pyyaml`  :conda:package:`scikit-learn` >=0.17.0 :conda:package:`scipy` >=0.15.0 :conda:package:`simplejson`  :conda:package:`snakemake`  :conda:package:`sqlalchemy` >=1 :conda:package:`sqlalchemy-utils`  :conda:package:`tabulate`  :conda:package:`typing`  :conda:package:`ujson`  :conda:package:`wheel` >=0.28.0 

   :required~by: |required_by_mikado|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mikado

   and update with::

      conda update mikado

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mikado


.. |required_by_mikado| conda:required_by:: mikado
.. |downloads_mikado| image:: https://img.shields.io/conda/dn/bioconda/mikado.svg?style=flat
   :alt:   (downloads)
.. |docker_mikado| image:: https://quay.io/repository/biocontainers/mikado/status
   :target: https://quay.io/repository/biocontainers/mikado







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikado/README.html

