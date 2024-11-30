:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amos'
.. highlight: bash

amos
====

.. conda:recipe:: amos
   :replaces_section_title:
   :noindex:

   A Modular\, Open\-Source whole genome assembler

   :homepage: http://amos.sourceforge.net/wiki/index.php/AMOS
   :license: Artistic License
   :recipe: /`amos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amos/meta.yaml>`_
   :links: biotools: :biotools:`amos`

   


.. conda:package:: amos

   |downloads_amos| |docker_amos|

   :versions:
      
      

      ``3.1.0-3``

      

   
   :depends jellyfish: 
   :depends mummer: 
   :depends perl-dbi: 
   :depends perl-statistics-descriptive: 
   :depends perl-threaded: 
   :depends perl-xml-parser: 
   :depends python: ``2.7*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install amos

   and update with::

      mamba update amos

  To create a new environment, run::

      mamba create --name myenvname amos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amos:<tag>

   (see `amos/tags`_ for valid values for ``<tag>``)


.. |downloads_amos| image:: https://img.shields.io/conda/dn/bioconda/amos.svg?style=flat
   :target: https://anaconda.org/bioconda/amos
   :alt:   (downloads)
.. |docker_amos| image:: https://quay.io/repository/biocontainers/amos/status
   :target: https://quay.io/repository/biocontainers/amos
.. _`amos/tags`: https://quay.io/repository/biocontainers/amos?tab=tags


.. raw:: html

    <script>
        var package = "amos";
        var versions = ["3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amos/README.html