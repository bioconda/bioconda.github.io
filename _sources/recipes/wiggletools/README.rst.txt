.. title:: Package Recipe 'wiggletools'
.. highlight: bash


wiggletools
===========

.. conda:recipe:: wiggletools
   :replaces_section_title:

   The WiggleTools package allows genomewide data files to be manipulated as numerical functions\, equipped with all the standard functional analysis operators \(sum\, product\, product by a scalar\, comparators\)\, and derived statistics \(mean\, median\, variance\, stddev\, t\-test\, Wilcoxon\'s rank sum test\, etc\).

   :homepage: https://github.com/Ensembl/WiggleTools
   :license: Apache
   :recipe: /`wiggletools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools/meta.yaml>`_

   


.. conda:package:: wiggletools

   |downloads_wiggletools| |docker_wiggletools|

   :versions: 1.2.2, 1.2.1

   :depends: :conda:package:`gsl` 1.16* :conda:package:`htslib` 1.5* :conda:package:`libbigwig`  

   :required~by: |required_by_wiggletools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wiggletools

   and update with::

      conda update wiggletools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wiggletools


.. |required_by_wiggletools| conda:required_by:: wiggletools
.. |downloads_wiggletools| image:: https://img.shields.io/conda/dn/bioconda/wiggletools.svg?style=flat
   :alt:   (downloads)
.. |docker_wiggletools| image:: https://quay.io/repository/biocontainers/wiggletools/status
   :target: https://quay.io/repository/biocontainers/wiggletools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wiggletools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wiggletools/README.html

