.. title:: Package Recipe 'egglib'
.. highlight: bash


egglib
======

.. conda:recipe:: egglib
   :replaces_section_title:

   EggLib is a C\+\+\/Python library and program package for evolutionary genetics and genomics. Main features are sequence data management\, sequence polymorphism analysis\, and coalescent simulations. EggLib is a flexible Python module with a performant underlying C\+\+ library and allows fast and intuitive development of Python programs and scripts.

   :homepage: http://mycor.nancy.inra.fr/egglib/
   :license: GPL / GPL3
   :recipe: /`egglib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egglib/meta.yaml>`_

   


.. conda:package:: egglib

   |downloads_egglib| |docker_egglib|

   :versions: 3.0.0b21

   :depends: :conda:package:`libgcc` >=7.2.0 :conda:package:`python` <3 

   :required~by: |required_by_egglib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install egglib

   and update with::

      conda update egglib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/egglib


.. |required_by_egglib| conda:required_by:: egglib
.. |downloads_egglib| image:: https://img.shields.io/conda/dn/bioconda/egglib.svg?style=flat
   :alt:   (downloads)
.. |docker_egglib| image:: https://quay.io/repository/biocontainers/egglib/status
   :target: https://quay.io/repository/biocontainers/egglib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/egglib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/egglib/README.html

