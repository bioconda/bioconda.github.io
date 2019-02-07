.. title:: Package Recipe 'seqlogo'
.. highlight: bash


seqlogo
=======

.. conda:recipe:: seqlogo
   :replaces_section_title:

   Python port of the R Bioconductor \`seqlogo\` package

   :homepage: https://github.com/betteridiot/seqlogo
   :license: BSD / BSD
   :recipe: /`seqlogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlogo/meta.yaml>`_

   


.. conda:package:: seqlogo

   |downloads_seqlogo| |docker_seqlogo|

   :versions: 5.29.1, 5.2.9, 0.2.0, 0.1.13, 0.1.12

   :depends: :conda:package:`ghostscript`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pytest`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`weblogo`  

   :required~by: |required_by_seqlogo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqlogo

   and update with::

      conda update seqlogo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqlogo


.. |required_by_seqlogo| conda:required_by:: seqlogo
.. |downloads_seqlogo| image:: https://img.shields.io/conda/dn/bioconda/seqlogo.svg?style=flat
   :alt:   (downloads)
.. |docker_seqlogo| image:: https://quay.io/repository/biocontainers/seqlogo/status
   :target: https://quay.io/repository/biocontainers/seqlogo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlogo/README.html

