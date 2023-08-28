:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isescan'
.. highlight: bash

isescan
=======

.. conda:recipe:: isescan
   :replaces_section_title:
   :noindex:

   A python pipeline to identify IS \(Insertion Sequence\) elements in genome and metagenome 

   :homepage: https://github.com/xiezhq/ISEScan
   :license: GNU General Public License
   :recipe: /`isescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isescan/meta.yaml>`_

   


.. conda:package:: isescan

   |downloads_isescan| |docker_isescan|

   :versions:
      
      

      ``1.7.2.3-2``,  ``1.7.2.3-1``,  ``1.7.2.3-0``,  ``1.7.2.2.2-0``,  ``1.7.2.2.1-0``,  ``1.7.2.1-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``

      

   
   :depends biopython: ``>=1.62``
   :depends blast: ``>=2.2.31``
   :depends fastcluster: 
   :depends fraggenescan: ``<=1.30``
   :depends hmmer: ``>=3.1b2``
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.8``
   :depends python: ``>=3``
   :depends scipy: ``>=0.13.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install isescan

   and update with::

      mamba update isescan

  To create a new environment, run::

      mamba create --name myenvname isescan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isescan:<tag>

   (see `isescan/tags`_ for valid values for ``<tag>``)


.. |downloads_isescan| image:: https://img.shields.io/conda/dn/bioconda/isescan.svg?style=flat
   :target: https://anaconda.org/bioconda/isescan
   :alt:   (downloads)
.. |docker_isescan| image:: https://quay.io/repository/biocontainers/isescan/status
   :target: https://quay.io/repository/biocontainers/isescan
.. _`isescan/tags`: https://quay.io/repository/biocontainers/isescan?tab=tags


.. raw:: html

    <script>
        var package = "isescan";
        var versions = ["1.7.2.3","1.7.2.3","1.7.2.3","1.7.2.2.2","1.7.2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isescan/README.html