.. title:: Package Recipe 'nanopolish'
.. highlight: bash


nanopolish
==========

.. conda:recipe:: nanopolish
   :replaces_section_title:

   Signal\-level algorithms for MinION data.

   :homepage: https://github.com/jts/nanopolish
   :license: MIT
   :recipe: /`nanopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish/meta.yaml>`_

   


.. conda:package:: nanopolish

   |downloads_nanopolish| |docker_nanopolish|

   :versions: 0.11.0, 0.10.2, 0.10.1, 0.9.2, 0.9.0, 0.8.5, 0.8.1, 0.7.1, 0.7.0, 0.6.0, 0.6.0.dev, 0.4.0

   :depends: :conda:package:`biopython`  :conda:package:`bwa`  :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`eigen`  :conda:package:`hdf5` >=1.10.3,<1.10.4.0a0 :conda:package:`libcurl` >=7.63.0,<8.0a0 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`libgcc`  :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`openmp`  :conda:package:`python`  

   :required~by: |required_by_nanopolish|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopolish

   and update with::

      conda update nanopolish

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanopolish


.. |required_by_nanopolish| conda:required_by:: nanopolish
.. |downloads_nanopolish| image:: https://img.shields.io/conda/dn/bioconda/nanopolish.svg?style=flat
   :alt:   (downloads)
.. |docker_nanopolish| image:: https://quay.io/repository/biocontainers/nanopolish/status
   :target: https://quay.io/repository/biocontainers/nanopolish







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolish/README.html

