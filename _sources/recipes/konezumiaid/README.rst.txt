:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'konezumiaid'
.. highlight: bash

konezumiaid
===========

.. conda:recipe:: konezumiaid
   :replaces_section_title:
   :noindex:

   This is used for automatically designing gRNAs for genome editing by Target\-AID.

   :homepage: https://github.com/aki2274/KOnezumi-AID
   :license: MIT
   :recipe: /`konezumiaid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/konezumiaid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/konezumiaid/meta.yaml>`_

   


.. conda:package:: konezumiaid

   |downloads_konezumiaid| |docker_konezumiaid|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends bedtools: 
   :depends bowtie: 
   :depends numpy: ``1.26.0.*``
   :depends pandas: ``2.2.2.*``
   :depends primer3-py: ``>=2.0.1,<3.0.0``
   :depends python: ``>=3.9.0,<4.0.0``
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

      mamba install konezumiaid

   and update with::

      mamba update konezumiaid

  To create a new environment, run::

      mamba create --name myenvname konezumiaid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/konezumiaid:<tag>

   (see `konezumiaid/tags`_ for valid values for ``<tag>``)


.. |downloads_konezumiaid| image:: https://img.shields.io/conda/dn/bioconda/konezumiaid.svg?style=flat
   :target: https://anaconda.org/bioconda/konezumiaid
   :alt:   (downloads)
.. |docker_konezumiaid| image:: https://quay.io/repository/biocontainers/konezumiaid/status
   :target: https://quay.io/repository/biocontainers/konezumiaid
.. _`konezumiaid/tags`: https://quay.io/repository/biocontainers/konezumiaid?tab=tags


.. raw:: html

    <script>
        var package = "konezumiaid";
        var versions = ["0.3.1","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/konezumiaid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/konezumiaid/README.html