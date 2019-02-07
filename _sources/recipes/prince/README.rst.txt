.. title:: Package Recipe 'prince'
.. highlight: bash


prince
======

.. conda:recipe:: prince
   :replaces_section_title:

   PRINCE estimates Variable Number Tandem Repeats \(VNTR\) copy number from raw next generation sequencing \(NGS\) data.

   :homepage: https://github.com/WGS-TB/PythonPrince
   :license: MIT
   :recipe: /`prince <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prince>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prince/meta.yaml>`_

   


.. conda:package:: prince

   |downloads_prince| |docker_prince|

   :versions: 2.1, 2.0, 1.2, 1.1, 1.0

   :depends: :conda:package:`biopython`  :conda:package:`numpy`  :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_prince|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prince

   and update with::

      conda update prince

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prince


.. |required_by_prince| conda:required_by:: prince
.. |downloads_prince| image:: https://img.shields.io/conda/dn/bioconda/prince.svg?style=flat
   :alt:   (downloads)
.. |docker_prince| image:: https://quay.io/repository/biocontainers/prince/status
   :target: https://quay.io/repository/biocontainers/prince







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prince/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prince/README.html

