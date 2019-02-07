.. title:: Package Recipe 'pydna'
.. highlight: bash


pydna
=====

.. conda:recipe:: pydna
   :replaces_section_title:

   Representing double stranded DNA and simulating cloning\, homologous recombination\, Gibson assembly\, Gel electrophoresis etc.

   :homepage: https://github.com/BjornFJohansson/pydna
   :license: BSD / BSD-3-Clause
   :recipe: /`pydna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna/meta.yaml>`_

   


.. conda:package:: pydna

   |downloads_pydna| |docker_pydna|

   :versions: 2.0.1, 2.0.0a3

   :depends: :conda:package:`appdirs` >=1.3.0 :conda:package:`biopython` >=1.65 :conda:package:`networkx` >=1.8.1 :conda:package:`ordered-set` >=2.0.1 :conda:package:`prettytable` >=0.7.2 :conda:package:`pyparsing` >=2.1.10 :conda:package:`pytest-runner`  :conda:package:`python` 3.5* :conda:package:`requests` >=2.12 

   :required~by: |required_by_pydna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydna

   and update with::

      conda update pydna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pydna


.. |required_by_pydna| conda:required_by:: pydna
.. |downloads_pydna| image:: https://img.shields.io/conda/dn/bioconda/pydna.svg?style=flat
   :alt:   (downloads)
.. |docker_pydna| image:: https://quay.io/repository/biocontainers/pydna/status
   :target: https://quay.io/repository/biocontainers/pydna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna/README.html

