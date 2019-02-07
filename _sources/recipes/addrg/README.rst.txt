.. title:: Package Recipe 'addrg'
.. highlight: bash


addrg
=====

.. conda:recipe:: addrg
   :replaces_section_title:

   Add read group to BAM files

   :homepage: https://github.com/holtgrewe/addrg
   :license: MIT
   :recipe: /`addrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addrg/meta.yaml>`_

   


.. conda:package:: addrg

   |downloads_addrg| |docker_addrg|

   :versions: 0.2.1, 0.2, 0.1

   :depends: :conda:package:`htslib` >=1.0.0 :conda:package:`libgcc`  

   :required~by: |required_by_addrg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install addrg

   and update with::

      conda update addrg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/addrg


.. |required_by_addrg| conda:required_by:: addrg
.. |downloads_addrg| image:: https://img.shields.io/conda/dn/bioconda/addrg.svg?style=flat
   :alt:   (downloads)
.. |docker_addrg| image:: https://quay.io/repository/biocontainers/addrg/status
   :target: https://quay.io/repository/biocontainers/addrg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/addrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/addrg/README.html

