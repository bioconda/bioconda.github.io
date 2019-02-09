.. title:: Package Recipe 'perl-pod-elemental'
.. highlight: bash


perl-pod-elemental
==================

.. conda:recipe:: perl-pod-elemental
   :replaces_section_title:

   work with nestable Pod elements

   :homepage: https://github.com/rjbs/Pod-Elemental
   :license: perl_5
   :recipe: /`perl-pod-elemental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental/meta.yaml>`_

   


.. conda:package:: perl-pod-elemental

   |downloads_perl-pod-elemental| |docker_perl-pod-elemental|

   :versions: 0.103004

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-mixin-linewise`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-types`  :conda:package:`perl-scalar-list-utils`  

   :required~by: |required_by_perl-pod-elemental|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-elemental

   and update with::

      conda update perl-pod-elemental

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-elemental


.. |required_by_perl-pod-elemental| conda:required_by:: perl-pod-elemental
.. |downloads_perl-pod-elemental| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-elemental.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-elemental| image:: https://quay.io/repository/biocontainers/perl-pod-elemental/status
   :target: https://quay.io/repository/biocontainers/perl-pod-elemental







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-elemental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-elemental/README.html

