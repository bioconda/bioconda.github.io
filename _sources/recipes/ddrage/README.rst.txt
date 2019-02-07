.. title:: Package Recipe 'ddrage'
.. highlight: bash


ddrage
======

.. conda:recipe:: ddrage
   :replaces_section_title:

   Simulator for ddRADseq \(double digest restriction site associated DNA sequencing\) datasets. Generates reads \(FASTQ format\) that can be analyzed and validated using a ground truth file \(YAML\).

   :homepage: https://bitbucket.org/genomeinformatics/rage
   :license: MIT / MIT License
   :recipe: /`ddrage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddrage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddrage/meta.yaml>`_

   


.. conda:package:: ddrage

   |downloads_ddrage| |docker_ddrage|

   :versions: 1.6.3, 1.6.1, 1.5.2, 1.5.1, 1.4.0, 1.3.1, 1.3.0, 1.2.2, 1.1.4

   :depends: :conda:package:`dinopy`  :conda:package:`matplotlib`  :conda:package:`numba`  :conda:package:`numpy`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyyaml`  :conda:package:`scipy`  :conda:package:`seaborn`  

   :required~by: |required_by_ddrage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ddrage

   and update with::

      conda update ddrage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ddrage


.. |required_by_ddrage| conda:required_by:: ddrage
.. |downloads_ddrage| image:: https://img.shields.io/conda/dn/bioconda/ddrage.svg?style=flat
   :alt:   (downloads)
.. |docker_ddrage| image:: https://quay.io/repository/biocontainers/ddrage/status
   :target: https://quay.io/repository/biocontainers/ddrage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddrage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddrage/README.html

