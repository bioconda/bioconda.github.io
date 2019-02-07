.. title:: Package Recipe 'forgi'
.. highlight: bash


forgi
=====

.. conda:recipe:: forgi
   :replaces_section_title:

   RNA Graph Library

   :homepage: http://www.tbi.univie.ac.at/~pkerp/forgi/
   :license: GNU Affero GPL 3.0
   :recipe: /`forgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi/meta.yaml>`_

   


.. conda:package:: forgi

   |downloads_forgi| |docker_forgi|

   :versions: 1.1

   :depends: :conda:package:`appdirs` ==1.4 :conda:package:`beautifulsoup4` >=4.6 :conda:package:`biopython` >=1.70 :conda:package:`ddt`  :conda:package:`future`  :conda:package:`logging_exceptions` >=0.1.6 :conda:package:`matplotlib` ==2 :conda:package:`networkx` ==2 :conda:package:`numpy` >=1.10.0 :conda:package:`pandas` >=0.20 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.19.1 

   :required~by: |required_by_forgi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install forgi

   and update with::

      conda update forgi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/forgi


.. |required_by_forgi| conda:required_by:: forgi
.. |downloads_forgi| image:: https://img.shields.io/conda/dn/bioconda/forgi.svg?style=flat
   :alt:   (downloads)
.. |docker_forgi| image:: https://quay.io/repository/biocontainers/forgi/status
   :target: https://quay.io/repository/biocontainers/forgi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forgi/README.html

