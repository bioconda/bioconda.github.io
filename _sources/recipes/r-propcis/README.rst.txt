.. title:: Package Recipe 'r-propcis'
.. highlight: bash


r-propcis
=========

.. conda:recipe:: r-propcis
   :replaces_section_title:

   Computes two\-sample confidence intervals for single\, paired and independent proportions.

   :homepage: https://github.com/shearer/PropCIs
   :license: GPL / GPL
   :recipe: /`r-propcis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-propcis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-propcis/meta.yaml>`_

   


.. conda:package:: r-propcis

   |downloads_r-propcis| |docker_r-propcis|

   :versions: 0.3_0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-propcis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-propcis

   and update with::

      conda update r-propcis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-propcis


.. |required_by_r-propcis| conda:required_by:: r-propcis
.. |downloads_r-propcis| image:: https://img.shields.io/conda/dn/bioconda/r-propcis.svg?style=flat
   :alt:   (downloads)
.. |docker_r-propcis| image:: https://quay.io/repository/biocontainers/r-propcis/status
   :target: https://quay.io/repository/biocontainers/r-propcis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-propcis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-propcis/README.html

