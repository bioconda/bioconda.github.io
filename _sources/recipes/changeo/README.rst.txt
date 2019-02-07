.. title:: Package Recipe 'changeo'
.. highlight: bash


changeo
=======

.. conda:recipe:: changeo
   :replaces_section_title:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data. Citations\: Gupta\, et al \(2015\) \<doi\:10.1093\/bioinformatics\/btv359\>.

   :homepage: http://changeo.readthedocs.io
   :license: CC / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
   :recipe: /`changeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo/meta.yaml>`_

   


.. conda:package:: changeo

   |downloads_changeo| |docker_changeo|

   :versions: 0.4.5, 0.4.4

   :depends: :conda:package:`airr` >=1.2.1 :conda:package:`biopython` >=1.65 :conda:package:`numpy` >=1.8 :conda:package:`pandas` >=0.15 :conda:package:`presto` >=0.5.10 :conda:package:`python` >=3.4 :conda:package:`pyyaml` >=3.12 :conda:package:`scipy` >=0.14 :conda:package:`setuptools` >=2.0 

   :required~by: |required_by_changeo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install changeo

   and update with::

      conda update changeo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/changeo


.. |required_by_changeo| conda:required_by:: changeo
.. |downloads_changeo| image:: https://img.shields.io/conda/dn/bioconda/changeo.svg?style=flat
   :alt:   (downloads)
.. |docker_changeo| image:: https://quay.io/repository/biocontainers/changeo/status
   :target: https://quay.io/repository/biocontainers/changeo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/changeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/changeo/README.html

