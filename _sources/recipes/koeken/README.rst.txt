.. title:: Package Recipe 'koeken'
.. highlight: bash


koeken
======

.. conda:recipe:: koeken
   :replaces_section_title:

   A Linear Discriminant Analysis \(LEfSe\) wrapper.

   :homepage: https://github.com/twbattaglia/koeken
   :license: MIT / MIT
   :recipe: /`koeken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/koeken/meta.yaml>`_

   


.. conda:package:: koeken

   |downloads_koeken| |docker_koeken|

   :versions: 0.2.6

   :depends: :conda:package:`biopython`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`qiime`  :conda:package:`r-coin`  :conda:package:`r-gtools`  :conda:package:`r-klar`  :conda:package:`r-mass`  :conda:package:`r-modeltools`  :conda:package:`r-mvtnorm`  :conda:package:`r-optparse`  :conda:package:`r-survival`  :conda:package:`rpy2`  

   :required~by: |required_by_koeken|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install koeken

   and update with::

      conda update koeken

   or use the docker container::

      docker pull quay.io/repository/biocontainers/koeken


.. |required_by_koeken| conda:required_by:: koeken
.. |downloads_koeken| image:: https://img.shields.io/conda/dn/bioconda/koeken.svg?style=flat
   :alt:   (downloads)
.. |docker_koeken| image:: https://quay.io/repository/biocontainers/koeken/status
   :target: https://quay.io/repository/biocontainers/koeken







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/koeken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/koeken/README.html

