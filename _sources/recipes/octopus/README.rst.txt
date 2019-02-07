.. title:: Package Recipe 'octopus'
.. highlight: bash


octopus
=======

.. conda:recipe:: octopus
   :replaces_section_title:

   Octopus is a mapping\-based variant caller that implements several calling models within a unified haplotype\-aware framework.

   :homepage: https://github.com/luntergroup/octopus
   :license: MIT / MIT
   :recipe: /`octopus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus/meta.yaml>`_

   


.. conda:package:: octopus

   |downloads_octopus| |docker_octopus|

   :versions: 0.5.2b, 0.5.1b, 0.5.0b, 0.4.1a, 0.3.3a

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`icu` >=58.2,<59.0a0 :conda:package:`libboost`  :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_octopus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install octopus

   and update with::

      conda update octopus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/octopus


.. |required_by_octopus| conda:required_by:: octopus
.. |downloads_octopus| image:: https://img.shields.io/conda/dn/bioconda/octopus.svg?style=flat
   :alt:   (downloads)
.. |docker_octopus| image:: https://quay.io/repository/biocontainers/octopus/status
   :target: https://quay.io/repository/biocontainers/octopus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopus/README.html

