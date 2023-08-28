:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-monovar'
.. highlight: bash

python-monovar
==============

.. conda:recipe:: python-monovar
   :replaces_section_title:
   :noindex:

   single cell joint genotyper\, patched version

   :homepage: https://kgithub.com/gongyh/MonoVar
   :license: MIT
   :recipe: /`python-monovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-monovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-monovar/meta.yaml>`_
   :links: biotools: :biotools:`Monovar`, doi: :doi:`10.1038/nmeth.3835`

   


.. conda:package:: python-monovar

   |downloads_python-monovar| |docker_python-monovar|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install python-monovar

   and update with::

      mamba update python-monovar

  To create a new environment, run::

      mamba create --name myenvname python-monovar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-monovar:<tag>

   (see `python-monovar/tags`_ for valid values for ``<tag>``)


.. |downloads_python-monovar| image:: https://img.shields.io/conda/dn/bioconda/python-monovar.svg?style=flat
   :target: https://anaconda.org/bioconda/python-monovar
   :alt:   (downloads)
.. |docker_python-monovar| image:: https://quay.io/repository/biocontainers/python-monovar/status
   :target: https://quay.io/repository/biocontainers/python-monovar
.. _`python-monovar/tags`: https://quay.io/repository/biocontainers/python-monovar?tab=tags


.. raw:: html

    <script>
        var package = "python-monovar";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-monovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-monovar/README.html