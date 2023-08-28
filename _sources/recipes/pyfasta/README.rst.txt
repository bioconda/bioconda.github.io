:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfasta'
.. highlight: bash

pyfasta
=======

.. conda:recipe:: pyfasta
   :replaces_section_title:
   :noindex:

   fast\, memory\-efficient\, pythonic \(and command\-line\) access to fasta sequence files

   :homepage: http://github.com/brentp/pyfasta/
   :license: MIT
   :recipe: /`pyfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfasta/meta.yaml>`_
   :links: biotools: :biotools:`pyfasta`

   


.. conda:package:: pyfasta

   |downloads_pyfasta| |docker_pyfasta|

   :versions:
      
      

      ``0.5.2-1``,  ``0.5.2-0``

      

   
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install pyfasta

   and update with::

      mamba update pyfasta

  To create a new environment, run::

      mamba create --name myenvname pyfasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfasta:<tag>

   (see `pyfasta/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfasta| image:: https://img.shields.io/conda/dn/bioconda/pyfasta.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfasta
   :alt:   (downloads)
.. |docker_pyfasta| image:: https://quay.io/repository/biocontainers/pyfasta/status
   :target: https://quay.io/repository/biocontainers/pyfasta
.. _`pyfasta/tags`: https://quay.io/repository/biocontainers/pyfasta?tab=tags


.. raw:: html

    <script>
        var package = "pyfasta";
        var versions = ["0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfasta/README.html