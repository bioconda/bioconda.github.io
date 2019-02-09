.. title:: Package Recipe 'sparc'
.. highlight: bash


sparc
=====

.. conda:recipe:: sparc
   :replaces_section_title:

   A sparsity\-based consensus algorithm for long erroneous sequencing reads.

   :homepage: https://github.com/yechengxi/Sparc
   :license: 
   :recipe: /`sparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc/meta.yaml>`_

   


.. conda:package:: sparc

   |downloads_sparc| |docker_sparc|

   :versions: 20160205

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_sparc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparc

   and update with::

      conda update sparc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sparc


.. |required_by_sparc| conda:required_by:: sparc
.. |downloads_sparc| image:: https://img.shields.io/conda/dn/bioconda/sparc.svg?style=flat
   :alt:   (downloads)
.. |docker_sparc| image:: https://quay.io/repository/biocontainers/sparc/status
   :target: https://quay.io/repository/biocontainers/sparc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparc/README.html

