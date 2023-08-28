:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirdeep-p2'
.. highlight: bash

mirdeep-p2
==========

.. conda:recipe:: mirdeep-p2
   :replaces_section_title:
   :noindex:

   A fast and accurate tool for analyzing the miRNA transcriptome in plants

   :homepage: https://sourceforge.net/projects/mirdp2/
   :license: GNU General Public v3 (GPLv3)
   :recipe: /`mirdeep-p2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep-p2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep-p2/meta.yaml>`_

   


.. conda:package:: mirdeep-p2

   |downloads_mirdeep-p2| |docker_mirdeep-p2|

   :versions:
      
      

      ``1.1.4-0``

      

   
   :depends bowtie: 
   :depends bowtie2: 
   :depends perl: 
   :depends randfold: 
   :depends viennarna: 
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

      mamba install mirdeep-p2

   and update with::

      mamba update mirdeep-p2

  To create a new environment, run::

      mamba create --name myenvname mirdeep-p2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirdeep-p2:<tag>

   (see `mirdeep-p2/tags`_ for valid values for ``<tag>``)


.. |downloads_mirdeep-p2| image:: https://img.shields.io/conda/dn/bioconda/mirdeep-p2.svg?style=flat
   :target: https://anaconda.org/bioconda/mirdeep-p2
   :alt:   (downloads)
.. |docker_mirdeep-p2| image:: https://quay.io/repository/biocontainers/mirdeep-p2/status
   :target: https://quay.io/repository/biocontainers/mirdeep-p2
.. _`mirdeep-p2/tags`: https://quay.io/repository/biocontainers/mirdeep-p2?tab=tags


.. raw:: html

    <script>
        var package = "mirdeep-p2";
        var versions = ["1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirdeep-p2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirdeep-p2/README.html