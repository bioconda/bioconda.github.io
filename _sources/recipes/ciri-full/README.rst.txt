:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ciri-full'
.. highlight: bash

ciri-full
=========

.. conda:recipe:: ciri-full
   :replaces_section_title:
   :noindex:

   Full length circRNA reconstruction and quantification using BSJ and reverse overlap \(RO\) features.

   :homepage: https://ciri-cookbook.readthedocs.io/en/latest/CIRI-full.html
   :developer docs: https://github.com/bioinfo-biols/CIRI-full
   :license: Unknown
   :recipe: /`ciri-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciri-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciri-full/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-019-0614-1`

   


.. conda:package:: ciri-full

   |downloads_ciri-full| |docker_ciri-full|

   :versions:
      
      

      ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends bwa: 
   :depends openjdk: 
   :depends perl: 
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

      mamba install ciri-full

   and update with::

      mamba update ciri-full

  To create a new environment, run::

      mamba create --name myenvname ciri-full

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ciri-full:<tag>

   (see `ciri-full/tags`_ for valid values for ``<tag>``)


.. |downloads_ciri-full| image:: https://img.shields.io/conda/dn/bioconda/ciri-full.svg?style=flat
   :target: https://anaconda.org/bioconda/ciri-full
   :alt:   (downloads)
.. |docker_ciri-full| image:: https://quay.io/repository/biocontainers/ciri-full/status
   :target: https://quay.io/repository/biocontainers/ciri-full
.. _`ciri-full/tags`: https://quay.io/repository/biocontainers/ciri-full?tab=tags


.. raw:: html

    <script>
        var package = "ciri-full";
        var versions = ["2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ciri-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ciri-full/README.html