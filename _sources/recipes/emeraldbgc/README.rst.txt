:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emeraldbgc'
.. highlight: bash

emeraldbgc
==========

.. conda:recipe:: emeraldbgc
   :replaces_section_title:
   :noindex:

   SMBGC detection tool

   :homepage: https://github.com/Finn-Lab/emeraldBGC
   :license: Apache / Apache-2.0
   :recipe: /`emeraldbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc/meta.yaml>`_

   


.. conda:package:: emeraldbgc

   |downloads_emeraldbgc| |docker_emeraldbgc|

   :versions:
      
      

      ``0.2.4.1-0``,  ``0.2.3.1-0``,  ``0.2.3-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends joblib: ``>=1.0.1``
   :depends numpy: ``>=1.16,<1.20``
   :depends openjdk: ``>=11.0``
   :depends perl: ``>=5``
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends scikit-learn: ``0.24.*``
   :depends tensorflow: ``2.4.*``
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

      mamba install emeraldbgc

   and update with::

      mamba update emeraldbgc

  To create a new environment, run::

      mamba create --name myenvname emeraldbgc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emeraldbgc:<tag>

   (see `emeraldbgc/tags`_ for valid values for ``<tag>``)


.. |downloads_emeraldbgc| image:: https://img.shields.io/conda/dn/bioconda/emeraldbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/emeraldbgc
   :alt:   (downloads)
.. |docker_emeraldbgc| image:: https://quay.io/repository/biocontainers/emeraldbgc/status
   :target: https://quay.io/repository/biocontainers/emeraldbgc
.. _`emeraldbgc/tags`: https://quay.io/repository/biocontainers/emeraldbgc?tab=tags


.. raw:: html

    <script>
        var package = "emeraldbgc";
        var versions = ["0.2.4.1","0.2.3.1","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emeraldbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emeraldbgc/README.html