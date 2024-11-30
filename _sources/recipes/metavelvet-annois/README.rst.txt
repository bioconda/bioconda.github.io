:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-annois'
.. highlight: bash

metavelvet-annois
=================

.. conda:recipe:: metavelvet-annois
   :replaces_section_title:
   :noindex:

   Metavelvet AnnoIS \- an extra package for metavelvet for versions \< 1.2.01

   :homepage: http://metavelvet.dna.bio.keio.ac.jp
   :license: GNU General Public License
   :recipe: /`metavelvet-annois <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois/meta.yaml>`_

   


.. conda:package:: metavelvet-annois

   |downloads_metavelvet-annois| |docker_metavelvet-annois|

   :versions:
      
      

      ``0.2.01-6``,  ``0.2.01-5``,  ``0.2.01-4``,  ``0.2.01-3``,  ``0.2.01-2``,  ``0.2.01-1``,  ``0.2.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-module-build: 
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

      mamba install metavelvet-annois

   and update with::

      mamba update metavelvet-annois

  To create a new environment, run::

      mamba create --name myenvname metavelvet-annois

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metavelvet-annois:<tag>

   (see `metavelvet-annois/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-annois| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-annois.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-annois
   :alt:   (downloads)
.. |docker_metavelvet-annois| image:: https://quay.io/repository/biocontainers/metavelvet-annois/status
   :target: https://quay.io/repository/biocontainers/metavelvet-annois
.. _`metavelvet-annois/tags`: https://quay.io/repository/biocontainers/metavelvet-annois?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-annois";
        var versions = ["0.2.01","0.2.01","0.2.01","0.2.01","0.2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-annois/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-annois/README.html