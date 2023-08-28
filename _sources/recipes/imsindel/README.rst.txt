:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imsindel'
.. highlight: bash

imsindel
========

.. conda:recipe:: imsindel
   :replaces_section_title:
   :noindex:

   An accurate intermediate\-size indel detection tool incorporating de novo assembly and gapped global\-local alignment with split read analysis

   :homepage: https://github.com/NCGG-MGC/IMSindel
   :license: MIT
   :recipe: /`imsindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imsindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imsindel/meta.yaml>`_

   


.. conda:package:: imsindel

   |downloads_imsindel| |docker_imsindel|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends fasta3: 
   :depends mafft: 
   :depends rb-bio: 
   :depends ruby: 
   :depends samtools: 
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

      mamba install imsindel

   and update with::

      mamba update imsindel

  To create a new environment, run::

      mamba create --name myenvname imsindel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/imsindel:<tag>

   (see `imsindel/tags`_ for valid values for ``<tag>``)


.. |downloads_imsindel| image:: https://img.shields.io/conda/dn/bioconda/imsindel.svg?style=flat
   :target: https://anaconda.org/bioconda/imsindel
   :alt:   (downloads)
.. |docker_imsindel| image:: https://quay.io/repository/biocontainers/imsindel/status
   :target: https://quay.io/repository/biocontainers/imsindel
.. _`imsindel/tags`: https://quay.io/repository/biocontainers/imsindel?tab=tags


.. raw:: html

    <script>
        var package = "imsindel";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imsindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imsindel/README.html