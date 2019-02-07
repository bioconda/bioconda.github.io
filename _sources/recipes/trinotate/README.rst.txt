.. title:: Package Recipe 'trinotate'
.. highlight: bash


trinotate
=========

.. conda:recipe:: trinotate
   :replaces_section_title:

   Trinotate is a comprehensive annotation suite designed for automatic functional annotation of transcriptomes\, particularly de novo assembled transcriptomes\, from model or non\-model organisms

   :homepage: https://trinotate.github.io/
   :license: BSD
   :recipe: /`trinotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinotate/meta.yaml>`_

   


.. conda:package:: trinotate

   |downloads_trinotate| |docker_trinotate|

   :versions: 3.1.1, 3.1.0, 3.0.2, 3.0.1

   :depends: :conda:package:`blast`  :conda:package:`hmmer`  :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-dbd-sqlite`  :conda:package:`perl-dbi`  :conda:package:`perl-file-find-rule`  :conda:package:`perl-module-build`  :conda:package:`sqlite`  

   :required~by: |required_by_trinotate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trinotate

   and update with::

      conda update trinotate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trinotate


.. |required_by_trinotate| conda:required_by:: trinotate
.. |downloads_trinotate| image:: https://img.shields.io/conda/dn/bioconda/trinotate.svg?style=flat
   :alt:   (downloads)
.. |docker_trinotate| image:: https://quay.io/repository/biocontainers/trinotate/status
   :target: https://quay.io/repository/biocontainers/trinotate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinotate/README.html

