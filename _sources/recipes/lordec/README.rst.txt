.. title:: Package Recipe 'lordec'
.. highlight: bash


lordec
======

.. conda:recipe:: lordec
   :replaces_section_title:

   A hybrid error correction program for long\, PacBio reads

   :homepage: http://www.atgc-montpellier.fr/lordec/
   :license: CeCILL A license
   :recipe: /`lordec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordec/meta.yaml>`_

   


.. conda:package:: lordec

   |downloads_lordec| |docker_lordec|

   :versions: 0.9, 0.6

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`gatb` 1.4.1.* :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_lordec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lordec

   and update with::

      conda update lordec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lordec


.. |required_by_lordec| conda:required_by:: lordec
.. |downloads_lordec| image:: https://img.shields.io/conda/dn/bioconda/lordec.svg?style=flat
   :alt:   (downloads)
.. |docker_lordec| image:: https://quay.io/repository/biocontainers/lordec/status
   :target: https://quay.io/repository/biocontainers/lordec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lordec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lordec/README.html

