:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lohhla'
.. highlight: bash

lohhla
======

.. conda:recipe:: lohhla
   :replaces_section_title:
   :noindex:

   A computational tool to evaluate HLA loss using next\-generation sequencing data.

   :homepage: https://bitbucket.org/mcgranahanlab/lohhla
   :license: UNKNOWN
   :recipe: /`lohhla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla/meta.yaml>`_

   


.. conda:package:: lohhla

   |downloads_lohhla| |docker_lohhla|

   :versions:
      
      

      ``20171108-3``,  ``20171108-2``,  ``20171108-1``,  ``20171108-0``

      

   
   :depends bedtools: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends novoalign: 
   :depends picard: 
   :depends r-base: 
   :depends r-beeswarm: 
   :depends r-optparse: ``<1.6.4``
   :depends r-seqinr: 
   :depends r-zoo: 
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

      mamba install lohhla

   and update with::

      mamba update lohhla

  To create a new environment, run::

      mamba create --name myenvname lohhla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lohhla:<tag>

   (see `lohhla/tags`_ for valid values for ``<tag>``)


.. |downloads_lohhla| image:: https://img.shields.io/conda/dn/bioconda/lohhla.svg?style=flat
   :target: https://anaconda.org/bioconda/lohhla
   :alt:   (downloads)
.. |docker_lohhla| image:: https://quay.io/repository/biocontainers/lohhla/status
   :target: https://quay.io/repository/biocontainers/lohhla
.. _`lohhla/tags`: https://quay.io/repository/biocontainers/lohhla?tab=tags


.. raw:: html

    <script>
        var package = "lohhla";
        var versions = ["20171108","20171108","20171108","20171108"];
    </script>





Notes
-----
The tool is available as command \`lohhla\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lohhla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lohhla/README.html