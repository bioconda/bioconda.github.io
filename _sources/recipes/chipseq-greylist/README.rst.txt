.. title:: Package Recipe 'chipseq-greylist'
.. highlight: bash


chipseq-greylist
================

.. conda:recipe:: chipseq-greylist
   :replaces_section_title:

   Python implementation of GreyListChIP Bioconductor package.

   :homepage: https://github.com/roryk/chipseq-greylist
   :license: MIT
   :recipe: /`chipseq-greylist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chipseq-greylist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chipseq-greylist/meta.yaml>`_

   


.. conda:package:: chipseq-greylist

   |downloads_chipseq-greylist| |docker_chipseq-greylist|

   :versions: 1.0.1

   :depends: :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`sambamba`  :conda:package:`scipy`  :conda:package:`statsmodels`  

   :required~by: |required_by_chipseq-greylist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chipseq-greylist

   and update with::

      conda update chipseq-greylist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/chipseq-greylist


.. |required_by_chipseq-greylist| conda:required_by:: chipseq-greylist
.. |downloads_chipseq-greylist| image:: https://img.shields.io/conda/dn/bioconda/chipseq-greylist.svg?style=flat
   :alt:   (downloads)
.. |docker_chipseq-greylist| image:: https://quay.io/repository/biocontainers/chipseq-greylist/status
   :target: https://quay.io/repository/biocontainers/chipseq-greylist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chipseq-greylist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chipseq-greylist/README.html

