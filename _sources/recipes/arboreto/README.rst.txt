.. title:: Package Recipe 'arboreto'
.. highlight: bash


arboreto
========

.. conda:recipe:: arboreto
   :replaces_section_title:

   Scalable gene regulatory network inference using tree\-based ensemble regressors

   :homepage: https://github.com/tmoerman/arboreto
   :license: BSD / BSD 3-Clause License
   :recipe: /`arboreto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto/meta.yaml>`_

   


.. conda:package:: arboreto

   |downloads_arboreto| |docker_arboreto|

   :versions: 0.1.5

   :depends: :conda:package:`dask`  :conda:package:`distributed`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_arboreto|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arboreto

   and update with::

      conda update arboreto

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arboreto


.. |required_by_arboreto| conda:required_by:: arboreto
.. |downloads_arboreto| image:: https://img.shields.io/conda/dn/bioconda/arboreto.svg?style=flat
   :alt:   (downloads)
.. |docker_arboreto| image:: https://quay.io/repository/biocontainers/arboreto/status
   :target: https://quay.io/repository/biocontainers/arboreto







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arboreto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arboreto/README.html

