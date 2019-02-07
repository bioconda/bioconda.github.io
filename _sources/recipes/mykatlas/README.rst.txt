.. title:: Package Recipe 'mykatlas'
.. highlight: bash


mykatlas
========

.. conda:recipe:: mykatlas
   :replaces_section_title:

   Assists in discoveries of antibiotic\-resistance with mykrobe

   :homepage: http://github.com/phelimb/atlas
   :license: MIT / MIT
   :recipe: /`mykatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas/meta.yaml>`_

   


.. conda:package:: mykatlas

   |downloads_mykatlas| |docker_mykatlas|

   :versions: 0.6.1

   :depends: :conda:package:`biopython`  :conda:package:`future`  :conda:package:`ga4ghmongo`  :conda:package:`mongoengine`  :conda:package:`python` 2.7* :conda:package:`pyvcf`  :conda:package:`redis-py`  

   :required~by: |required_by_mykatlas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mykatlas

   and update with::

      conda update mykatlas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mykatlas


.. |required_by_mykatlas| conda:required_by:: mykatlas
.. |downloads_mykatlas| image:: https://img.shields.io/conda/dn/bioconda/mykatlas.svg?style=flat
   :alt:   (downloads)
.. |docker_mykatlas| image:: https://quay.io/repository/biocontainers/mykatlas/status
   :target: https://quay.io/repository/biocontainers/mykatlas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykatlas/README.html

