.. title:: Package Recipe 'mzml2isa'
.. highlight: bash


mzml2isa
========

.. conda:recipe:: mzml2isa
   :replaces_section_title:

   mzml2isa \- mzML to ISA\-tab parsing tool

   :homepage: https://github.com/ISA-tools/mzml2isa
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`mzml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa/meta.yaml>`_

   


.. conda:package:: mzml2isa

   |downloads_mzml2isa| |docker_mzml2isa|

   :versions: 0.5.1, 0.4.24

   :depends: :conda:package:`openpyxl`  :conda:package:`pronto` >=0.6.0 :conda:package:`python` 2.7* :conda:package:`six`  

   :required~by: |required_by_mzml2isa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mzml2isa

   and update with::

      conda update mzml2isa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mzml2isa


.. |required_by_mzml2isa| conda:required_by:: mzml2isa
.. |downloads_mzml2isa| image:: https://img.shields.io/conda/dn/bioconda/mzml2isa.svg?style=flat
   :alt:   (downloads)
.. |docker_mzml2isa| image:: https://quay.io/repository/biocontainers/mzml2isa/status
   :target: https://quay.io/repository/biocontainers/mzml2isa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzml2isa/README.html

