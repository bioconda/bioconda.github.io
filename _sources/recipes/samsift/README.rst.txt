.. title:: Package Recipe 'samsift'
.. highlight: bash


samsift
=======

.. conda:recipe:: samsift
   :replaces_section_title:

   Advanced filtering and tagging of SAM\/BAM alignments using Python expressions.

   :homepage: https://github.com/karel-brinda/samsift
   :license: MIT
   :recipe: /`samsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift/meta.yaml>`_

   


.. conda:package:: samsift

   |downloads_samsift| |docker_samsift|

   :versions: 0.2.5, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.0

   :depends: :conda:package:`pysam`  :conda:package:`python` 3.5* 

   :required~by: |required_by_samsift|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samsift

   and update with::

      conda update samsift

   or use the docker container::

      docker pull quay.io/repository/biocontainers/samsift


.. |required_by_samsift| conda:required_by:: samsift
.. |downloads_samsift| image:: https://img.shields.io/conda/dn/bioconda/samsift.svg?style=flat
   :alt:   (downloads)
.. |docker_samsift| image:: https://quay.io/repository/biocontainers/samsift/status
   :target: https://quay.io/repository/biocontainers/samsift







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsift/README.html

