.. title:: Package Recipe 'ctat-lncrna'
.. highlight: bash


ctat-lncrna
===========

.. conda:recipe:: ctat-lncrna
   :replaces_section_title:

   ctat\-lncrna uses slncky

   :homepage: https://github.com/NCIP/ctat-lncrna
   :license: BSD / BSD-3-Clause
   :recipe: /`ctat-lncrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-lncrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-lncrna/meta.yaml>`_

   


.. conda:package:: ctat-lncrna

   |downloads_ctat-lncrna| |docker_ctat-lncrna|

   :versions: 1.0.1, 1.0

   :depends: :conda:package:`bedtools`  :conda:package:`lastz`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`slncky`  :conda:package:`ucsc-liftover`  

   :required~by: |required_by_ctat-lncrna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ctat-lncrna

   and update with::

      conda update ctat-lncrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ctat-lncrna


.. |required_by_ctat-lncrna| conda:required_by:: ctat-lncrna
.. |downloads_ctat-lncrna| image:: https://img.shields.io/conda/dn/bioconda/ctat-lncrna.svg?style=flat
   :alt:   (downloads)
.. |docker_ctat-lncrna| image:: https://quay.io/repository/biocontainers/ctat-lncrna/status
   :target: https://quay.io/repository/biocontainers/ctat-lncrna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-lncrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-lncrna/README.html

