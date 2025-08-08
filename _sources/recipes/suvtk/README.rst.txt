:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suvtk'
.. highlight: bash

suvtk
=====

.. conda:recipe:: suvtk
   :replaces_section_title:
   :noindex:

   Tool to submit viral sequences to Genbank.

   :homepage: https://github.com/LanderDC/suvtk
   :documentation: https://landerdc.github.io/suvtk/
   
   :license: Apache-2.0
   :recipe: /`suvtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suvtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suvtk/meta.yaml>`_

   


.. conda:package:: suvtk

   |downloads_suvtk| |docker_suvtk|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends biopython: ``>=1.83``
   :depends click: 
   :depends mmseqs2: ``>=17.b804f``
   :depends numpy: ``>1.24.4``
   :depends pandas: ``>=2.0.3``
   :depends pyrodigal-gv: ``>=0.3.2``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32.3``
   :depends scipy: ``>=1.13.1``
   :depends table2asn: ``>=1.28.1094``
   :depends taxopy: ``>=0.14.0``
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

      mamba install suvtk

   and update with::

      mamba update suvtk

  To create a new environment, run::

      mamba create --name myenvname suvtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/suvtk:<tag>

   (see `suvtk/tags`_ for valid values for ``<tag>``)


.. |downloads_suvtk| image:: https://img.shields.io/conda/dn/bioconda/suvtk.svg?style=flat
   :target: https://anaconda.org/bioconda/suvtk
   :alt:   (downloads)
.. |docker_suvtk| image:: https://quay.io/repository/biocontainers/suvtk/status
   :target: https://quay.io/repository/biocontainers/suvtk
.. _`suvtk/tags`: https://quay.io/repository/biocontainers/suvtk?tab=tags


.. raw:: html

    <script>
        var package = "suvtk";
        var versions = ["0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suvtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suvtk/README.html