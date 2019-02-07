.. title:: Package Recipe 'biolite'
.. highlight: bash


biolite
=======

.. conda:recipe:: biolite
   :replaces_section_title:

   A lightweight bioinformatics framework with automated tracking of diagnostics and provenance.

   :homepage: https://bitbucket.org/caseywdunn/biolite
   :license: GPLv3
   :recipe: /`biolite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite/meta.yaml>`_

   


.. conda:package:: biolite

   |downloads_biolite| |docker_biolite|

   :versions: 1.2.0, 1.1.0

   :depends: :conda:package:`biolite-tools` 0.4.0 :conda:package:`biopython` 1.68 :conda:package:`dendropy` 4.2.0 :conda:package:`docutils` 0.13.1 :conda:package:`ete3` 3.0.0b35 :conda:package:`lxml` 3.7.2 :conda:package:`matplotlib` 2.0.0 :conda:package:`networkx` 1.11 :conda:package:`numpy` 1.11.3 :conda:package:`pandas` 0.19.2 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-wget` 3.2 :conda:package:`setuptools`  :conda:package:`sra-tools` 2.8.0 

   :required~by: |required_by_biolite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biolite

   and update with::

      conda update biolite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biolite


.. |required_by_biolite| conda:required_by:: biolite
.. |downloads_biolite| image:: https://img.shields.io/conda/dn/bioconda/biolite.svg?style=flat
   :alt:   (downloads)
.. |docker_biolite| image:: https://quay.io/repository/biocontainers/biolite/status
   :target: https://quay.io/repository/biocontainers/biolite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biolite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biolite/README.html

