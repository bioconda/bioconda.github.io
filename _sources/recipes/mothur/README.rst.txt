.. title:: Package Recipe 'mothur'
.. highlight: bash


mothur
======

.. conda:recipe:: mothur
   :replaces_section_title:

   This project seeks to develop a single piece of open\-source\, expandable software to fill the bioinformatics needs of the microbial ecology community.

   :homepage: http://www.mothur.org
   :developer docs: https://github.com/mothur/mothur
   :license: GPL / GPL-3.0
   :recipe: /`mothur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur/meta.yaml>`_

   


.. conda:package:: mothur

   |downloads_mothur| |docker_mothur|

   :versions: 1.41.0, 1.40.5, 1.39.5, 1.38.1.1, 1.36.1, 1.25.0

   :depends: :conda:package:`blast-legacy`  :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`hdf5` >=1.10.3,<1.10.4.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`readline` >=7.0,<8.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_mothur|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mothur

   and update with::

      conda update mothur

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mothur


.. |required_by_mothur| conda:required_by:: mothur
.. |downloads_mothur| image:: https://img.shields.io/conda/dn/bioconda/mothur.svg?style=flat
   :alt:   (downloads)
.. |docker_mothur| image:: https://quay.io/repository/biocontainers/mothur/status
   :target: https://quay.io/repository/biocontainers/mothur







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mothur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mothur/README.html

