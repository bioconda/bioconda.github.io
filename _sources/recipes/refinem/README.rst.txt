:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refinem'
.. highlight: bash

refinem
=======

.. conda:recipe:: refinem
   :replaces_section_title:
   :noindex:

   A toolbox for improving population genomes.

   :homepage: http://pypi.python.org/pypi/refinem/
   :documentation: https://github.com/dparks1134/RefineM/blob/master/README.md
   
   :developer docs: https://github.com/dparks1134/RefineM
   :license: GPL3 / GPL3
   :recipe: /`refinem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem/meta.yaml>`_

   


.. conda:package:: refinem

   |downloads_refinem| |docker_refinem|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.25-0``,  ``0.0.24-3``,  ``0.0.24-2``

      

   
   :depends biolib: ``>=0.0.45``
   :depends blast: ``>=2.6.0``
   :depends dendropy: 
   :depends diamond: ``>=0.9.9``
   :depends jinja2: ``>=2.7.3``
   :depends krona: ``>=2.7``
   :depends matplotlib-base: ``>=1.4.0``
   :depends mpld3: ``>=0.2``
   :depends numpy: ``>=1.9.0``
   :depends prodigal: ``>=2.6.3``
   :depends pysam: 
   :depends python: 
   :depends scipy: ``>=1.0.0``
   :depends weightedstats: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install refinem

   and update with::

      mamba update refinem

  To create a new environment, run::

      mamba create --name myenvname refinem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/refinem:<tag>

   (see `refinem/tags`_ for valid values for ``<tag>``)


.. |downloads_refinem| image:: https://img.shields.io/conda/dn/bioconda/refinem.svg?style=flat
   :target: https://anaconda.org/bioconda/refinem
   :alt:   (downloads)
.. |docker_refinem| image:: https://quay.io/repository/biocontainers/refinem/status
   :target: https://quay.io/repository/biocontainers/refinem
.. _`refinem/tags`: https://quay.io/repository/biocontainers/refinem?tab=tags


.. raw:: html

    <script>
        var package = "refinem";
        var versions = ["0.1.2","0.1.1","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refinem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refinem/README.html