.. title:: Package Recipe 'sparcc'
.. highlight: bash


sparcc
======

.. conda:recipe:: sparcc
   :replaces_section_title:

   SparCC is a python module for computing correlations in compositional data \(16S\, metagenomics\, etc\).

   :homepage: https://bitbucket.org/yonatanf/sparcc
   :license: MIT
   :recipe: /`sparcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1002687`

   


.. conda:package:: sparcc

   |downloads_sparcc| |docker_sparcc|

   :versions: 0.1.0

   :depends: :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` <3 :conda:package:`scipy`  

   :required~by: |required_by_sparcc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparcc

   and update with::

      conda update sparcc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sparcc


.. |required_by_sparcc| conda:required_by:: sparcc
.. |downloads_sparcc| image:: https://img.shields.io/conda/dn/bioconda/sparcc.svg?style=flat
   :alt:   (downloads)
.. |docker_sparcc| image:: https://quay.io/repository/biocontainers/sparcc/status
   :target: https://quay.io/repository/biocontainers/sparcc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparcc/README.html

