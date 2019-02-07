.. title:: Package Recipe 'ppanini'
.. highlight: bash


ppanini
=======

.. conda:recipe:: ppanini
   :replaces_section_title:

   PPANINI\: Prioritization and Prediction of functional Annotations for Novel and Important genes via automated data Network Integration.

   :homepage: http://huttenhower.sph.harvard.edu/ppanini
   :license: MIT
   :recipe: /`ppanini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini/meta.yaml>`_

   


.. conda:package:: ppanini

   |downloads_ppanini| |docker_ppanini|

   :versions: 0.6.4, 0.6.2

   :depends: :conda:package:`biopython` >=1.66 :conda:package:`matplotlib` >=1.1.1 :conda:package:`numpy` >=1.9.2 :conda:package:`python` 2.7* :conda:package:`scikit-learn` >=0.14.1 

   :required~by: |required_by_ppanini|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ppanini

   and update with::

      conda update ppanini

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ppanini


.. |required_by_ppanini| conda:required_by:: ppanini
.. |downloads_ppanini| image:: https://img.shields.io/conda/dn/bioconda/ppanini.svg?style=flat
   :alt:   (downloads)
.. |docker_ppanini| image:: https://quay.io/repository/biocontainers/ppanini/status
   :target: https://quay.io/repository/biocontainers/ppanini







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanini/README.html

