.. title:: Package Recipe 'bioconductor-leukemiaseset'
.. highlight: bash


bioconductor-leukemiaseset
==========================

.. conda:recipe:: bioconductor-leukemiaseset
   :replaces_section_title:

   Expressionset containing gene expresion data from 60 bone marrow samples of patients with one of the four main types of leukemia \(ALL\, AML\, CLL\, CML\) or non\-leukemia.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/leukemiasEset.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-leukemiaseset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leukemiaseset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leukemiaseset/meta.yaml>`_

   


.. conda:package:: bioconductor-leukemiaseset

   |downloads_bioconductor-leukemiaseset| |docker_bioconductor-leukemiaseset|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-leukemiaseset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-leukemiaseset

   and update with::

      conda update bioconductor-leukemiaseset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-leukemiaseset


.. |required_by_bioconductor-leukemiaseset| conda:required_by:: bioconductor-leukemiaseset
.. |downloads_bioconductor-leukemiaseset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-leukemiaseset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-leukemiaseset| image:: https://quay.io/repository/biocontainers/bioconductor-leukemiaseset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-leukemiaseset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-leukemiaseset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-leukemiaseset/README.html

