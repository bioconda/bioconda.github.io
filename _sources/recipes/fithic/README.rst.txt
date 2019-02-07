.. title:: Package Recipe 'fithic'
.. highlight: bash


fithic
======

.. conda:recipe:: fithic
   :replaces_section_title:

   Fit\-Hi\-C is a tool for assigning statistical confidence estimates to chromosomal contact maps produced by genome architecture assays.

   :homepage: https://github.com/ay-lab/fithic/tree/master
   :license: MIT
   :recipe: /`fithic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic/meta.yaml>`_

   


.. conda:package:: fithic

   |downloads_fithic| |docker_fithic|

   :versions: 2.0.6, 2.0.5

   :depends: :conda:package:`argparse`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=3 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`sortedcontainers`  

   :required~by: |required_by_fithic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fithic

   and update with::

      conda update fithic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fithic


.. |required_by_fithic| conda:required_by:: fithic
.. |downloads_fithic| image:: https://img.shields.io/conda/dn/bioconda/fithic.svg?style=flat
   :alt:   (downloads)
.. |docker_fithic| image:: https://quay.io/repository/biocontainers/fithic/status
   :target: https://quay.io/repository/biocontainers/fithic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fithic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fithic/README.html

