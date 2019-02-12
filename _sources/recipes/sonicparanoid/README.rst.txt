.. title:: Package Recipe 'sonicparanoid'
.. highlight: bash


sonicparanoid
=============

.. conda:recipe:: sonicparanoid
   :replaces_section_title:

   SonicParanoid\: fast\, easy and accurate orthology inference

   :homepage: http://iwasakilab.bs.s.u-tokyo.ac.jp/sonicparanoid/
   :license: GPL3 / GNU General Public License v3
   :recipe: /`sonicparanoid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bioinformatics/bty631`

   


.. conda:package:: sonicparanoid

   |downloads_sonicparanoid| |docker_sonicparanoid|

   :versions: 1.0.14, 1.0.13

   :depends: :conda:package:`biopython` >=1.67 :conda:package:`cython` >=0.27.0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`make`  :conda:package:`mmseqs2` 6.f5a1c :conda:package:`numpy` >=1.13.0 :conda:package:`pandas` >=0.22.0 :conda:package:`pip` >=9.0.1 :conda:package:`python` >=3.7,<3.8.0a0 :conda:package:`setuptools` >=24.2.0 :conda:package:`sh` >=1.12.14 

   :required~by: |required_by_sonicparanoid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sonicparanoid

   and update with::

      conda update sonicparanoid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sonicparanoid


.. |required_by_sonicparanoid| conda:required_by:: sonicparanoid
.. |downloads_sonicparanoid| image:: https://img.shields.io/conda/dn/bioconda/sonicparanoid.svg?style=flat
   :alt:   (downloads)
.. |docker_sonicparanoid| image:: https://quay.io/repository/biocontainers/sonicparanoid/status
   :target: https://quay.io/repository/biocontainers/sonicparanoid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonicparanoid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonicparanoid/README.html

