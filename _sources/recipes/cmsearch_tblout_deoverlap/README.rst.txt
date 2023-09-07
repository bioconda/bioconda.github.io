:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmsearch_tblout_deoverlap'
.. highlight: bash

cmsearch_tblout_deoverlap
=========================

.. conda:recipe:: cmsearch_tblout_deoverlap
   :replaces_section_title:
   :noindex:

   cmsearch\-deoverlap.pl\: remove lower scoring overlaps from cmsearch

   :homepage: https://github.com/nawrockie/cmsearch_tblout_deoverlap
   :license: Public Domain
   :recipe: /`cmsearch_tblout_deoverlap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsearch_tblout_deoverlap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsearch_tblout_deoverlap/meta.yaml>`_

   


.. conda:package:: cmsearch_tblout_deoverlap

   |downloads_cmsearch_tblout_deoverlap| |docker_cmsearch_tblout_deoverlap|

   :versions:
      
      

      ``0.09-0``

      

   
   :depends perl: ``>=5.26.2``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install cmsearch_tblout_deoverlap

   and update with::

      mamba update cmsearch_tblout_deoverlap

  To create a new environment, run::

      mamba create --name myenvname cmsearch_tblout_deoverlap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmsearch_tblout_deoverlap:<tag>

   (see `cmsearch_tblout_deoverlap/tags`_ for valid values for ``<tag>``)


.. |downloads_cmsearch_tblout_deoverlap| image:: https://img.shields.io/conda/dn/bioconda/cmsearch_tblout_deoverlap.svg?style=flat
   :target: https://anaconda.org/bioconda/cmsearch_tblout_deoverlap
   :alt:   (downloads)
.. |docker_cmsearch_tblout_deoverlap| image:: https://quay.io/repository/biocontainers/cmsearch_tblout_deoverlap/status
   :target: https://quay.io/repository/biocontainers/cmsearch_tblout_deoverlap
.. _`cmsearch_tblout_deoverlap/tags`: https://quay.io/repository/biocontainers/cmsearch_tblout_deoverlap?tab=tags


.. raw:: html

    <script>
        var package = "cmsearch_tblout_deoverlap";
        var versions = ["0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmsearch_tblout_deoverlap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmsearch_tblout_deoverlap/README.html