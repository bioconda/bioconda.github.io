.. title:: Package Recipe 'bcbiogff'
.. highlight: bash


bcbiogff
========

.. conda:recipe:: bcbiogff
   :replaces_section_title:

   Read and write Generic Feature Format \(GFF\) with Biopython integration.

   :homepage: https://github.com/chapmanb/bcbb/blob/master/gff
   :license: Biopython License Agreement
   :recipe: /`bcbiogff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbiogff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbiogff/meta.yaml>`_

   


.. conda:package:: bcbiogff

   |downloads_bcbiogff| |docker_bcbiogff|

   :versions: 0.6.4, 0.6.2

   :depends: :conda:package:`biopython`  :conda:package:`python` 2.7* :conda:package:`six`  

   :required~by: |required_by_bcbiogff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbiogff

   and update with::

      conda update bcbiogff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbiogff


.. |required_by_bcbiogff| conda:required_by:: bcbiogff
.. |downloads_bcbiogff| image:: https://img.shields.io/conda/dn/bioconda/bcbiogff.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbiogff| image:: https://quay.io/repository/biocontainers/bcbiogff/status
   :target: https://quay.io/repository/biocontainers/bcbiogff







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbiogff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbiogff/README.html

