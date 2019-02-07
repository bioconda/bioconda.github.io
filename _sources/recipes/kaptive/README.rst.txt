.. title:: Package Recipe 'kaptive'
.. highlight: bash


kaptive
=======

.. conda:recipe:: kaptive
   :replaces_section_title:

   Kaptive reports information about capsular \(K\) loci found in genome assemblies

   :homepage: https://github.com/katholt/Kaptive
   :license: GPL / GPL-3.0
   :recipe: /`kaptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive/meta.yaml>`_

   


.. conda:package:: kaptive

   |downloads_kaptive| |docker_kaptive|

   :versions: 0.5.1, 0.3, 0.2

   :depends: :conda:package:`biopython` ==1.68 :conda:package:`blast` ==2.2.31 :conda:package:`python` 2.7* 

   :required~by: |required_by_kaptive|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kaptive

   and update with::

      conda update kaptive

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kaptive


.. |required_by_kaptive| conda:required_by:: kaptive
.. |downloads_kaptive| image:: https://img.shields.io/conda/dn/bioconda/kaptive.svg?style=flat
   :alt:   (downloads)
.. |docker_kaptive| image:: https://quay.io/repository/biocontainers/kaptive/status
   :target: https://quay.io/repository/biocontainers/kaptive







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaptive/README.html

