:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contigtax'
.. highlight: bash

contigtax
=========

.. conda:recipe:: contigtax
   :replaces_section_title:
   :noindex:

   Assign taxonomy to metagenomic contigs \(previously know as tango\)

   :homepage: https://github.com/NBISweden/contigtax
   :license: MIT
   :recipe: /`contigtax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contigtax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contigtax/meta.yaml>`_

   


.. conda:package:: contigtax

   |downloads_contigtax| |docker_contigtax|

   :versions:
      
      

      ``0.5.10-0``,  ``0.5.9-0``

      

   
   :depends biopython: 
   :depends diamond: ``>=0.8.37,<=0.9.24``
   :depends ete3: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends tqdm: ``>4.7.2``
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

      mamba install contigtax

   and update with::

      mamba update contigtax

  To create a new environment, run::

      mamba create --name myenvname contigtax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/contigtax:<tag>

   (see `contigtax/tags`_ for valid values for ``<tag>``)


.. |downloads_contigtax| image:: https://img.shields.io/conda/dn/bioconda/contigtax.svg?style=flat
   :target: https://anaconda.org/bioconda/contigtax
   :alt:   (downloads)
.. |docker_contigtax| image:: https://quay.io/repository/biocontainers/contigtax/status
   :target: https://quay.io/repository/biocontainers/contigtax
.. _`contigtax/tags`: https://quay.io/repository/biocontainers/contigtax?tab=tags


.. raw:: html

    <script>
        var package = "contigtax";
        var versions = ["0.5.10","0.5.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contigtax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contigtax/README.html