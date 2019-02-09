.. title:: Package Recipe 'dnp-corrprofile'
.. highlight: bash


dnp-corrprofile
===============

.. conda:recipe:: dnp-corrprofile
   :replaces_section_title:

   Profile of correlations between the patterns of dinucleotide frequency on forward and reverse strands

   :homepage: https://github.com/erinijapranckeviciene/dnpatterntools
   :license: MIT
   :recipe: /`dnp-corrprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-corrprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-corrprofile/meta.yaml>`_

   


.. conda:package:: dnp-corrprofile

   |downloads_dnp-corrprofile| |docker_dnp-corrprofile|

   :versions: 1.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libcxx` >=4.0.1 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_dnp-corrprofile|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnp-corrprofile

   and update with::

      conda update dnp-corrprofile

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dnp-corrprofile


.. |required_by_dnp-corrprofile| conda:required_by:: dnp-corrprofile
.. |downloads_dnp-corrprofile| image:: https://img.shields.io/conda/dn/bioconda/dnp-corrprofile.svg?style=flat
   :alt:   (downloads)
.. |docker_dnp-corrprofile| image:: https://quay.io/repository/biocontainers/dnp-corrprofile/status
   :target: https://quay.io/repository/biocontainers/dnp-corrprofile







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnp-corrprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnp-corrprofile/README.html

