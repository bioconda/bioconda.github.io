:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saspector'
.. highlight: bash

saspector
=========

.. conda:recipe:: saspector
   :replaces_section_title:
   :noindex:

   A tool for analysis of missing regions in \(bacterial\) draft genomes.

   :homepage: https://github.com/alejocrojo09/SASpector
   :license: MIT
   :recipe: /`saspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saspector/meta.yaml>`_

   


.. conda:package:: saspector

   |downloads_saspector| |docker_saspector|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.3-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends progressbar: 
   :depends progressivemauve: 
   :depends prokka: 
   :depends python: ``>3``
   :depends quast: 
   :depends samtools: 
   :depends seaborn: 
   :depends sourmash: 
   :depends trf: 
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

      mamba install saspector

   and update with::

      mamba update saspector

  To create a new environment, run::

      mamba create --name myenvname saspector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/saspector:<tag>

   (see `saspector/tags`_ for valid values for ``<tag>``)


.. |downloads_saspector| image:: https://img.shields.io/conda/dn/bioconda/saspector.svg?style=flat
   :target: https://anaconda.org/bioconda/saspector
   :alt:   (downloads)
.. |docker_saspector| image:: https://quay.io/repository/biocontainers/saspector/status
   :target: https://quay.io/repository/biocontainers/saspector
.. _`saspector/tags`: https://quay.io/repository/biocontainers/saspector?tab=tags


.. raw:: html

    <script>
        var package = "saspector";
        var versions = ["0.0.5","0.0.3","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saspector/README.html